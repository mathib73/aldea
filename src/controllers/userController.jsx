import { BaseController } from './baseController';
import { API_ROUTES } from '../networking/apiRoutes';

class UserController extends BaseController {
  static async login(email, password) {
    try {
      const response = await super.post(API_ROUTES.LOGIN, { email, password }, {});
      const user = response.data;
      localStorage.setItem('user', JSON.stringify(user));
      return { error: false, user };
    } catch (err) {
      const error = { error: true };
      switch (err.status) {
        case null:
          error.message = 'Can\'t reach server. Check your connection.';
          break;
        case 401:
          error.message = 'Authentication error';
          break;
        case 500:
          error.message = 'Internal error';
          break;
        default:
          error.message = 'Unexpected error';
      }
      return error;
    }
  }

  static async logout() {
    try {
      await super.get(API_ROUTES.LOGOUT, {}, {});
      return { error: false };
    } catch (err) {
      const error = { error: true };
      switch (err.status) {
        case null:
          error.message = 'Can\'t reach server. Check your connection.';
          break;
        case 401:
          error.message = 'Authentication error';
          break;
        case 500:
          error.message = 'Internal error';
          break;
        default:
          error.message = 'Unexpected error';
      }
      return error;
    }
  }

  static async getUsers(id) {
    try {
      if (!id) {
        const response = await super.get(API_ROUTES.USERS, {}, {});
        const { users } = response.data;
        return { error: false, users };
      }
      const response = await super.get(`${API_ROUTES.USERS}/${id}`, {}, {});
      const { user } = response.data;
      return { error: false, user };
    } catch (err) {
      const error = { error: true };
      switch (err.status) {
        case null:
          error.message = 'Can\'t reach server. Check your connection.';
          break;
        case 401:
          error.message = 'Authentication error';
          break;
        case 500:
          error.message = 'Internal error';
          break;
        default:
          error.message = 'Unexpected error';
      }
      return error;
    }
  }

  static async addUser(user) {
    try {
      await super.post(API_ROUTES.SIGNUP, user, {});
      return { error: false };
    } catch (err) {
      const error = { error: true };
      switch (err.status) {
        case null:
          error.message = 'Can\'t reach server. Check your connection.';
          break;
        case 401:
          error.message = 'Authentication error';
          break;
        case 500:
          error.message = 'Internal error';
          break;
        default:
          error.message = 'Unexpected error';
      }
      return error;
    }
  }

  static async editUser(user) {
    try {
      const { id } = user;
      const response = await super.put(`${API_ROUTES.USERS}/${id}`, user, {});
      return { error: false, user: response.data.user };
    } catch (err) {
      const error = { error: true };
      switch (err.status) {
        case null:
          error.message = 'Can\'t reach server. Check your connection.';
          break;
        case 401:
          error.message = 'Authentication error';
          break;
        case 500:
          error.message = 'Internal error';
          break;
        default:
          error.message = 'Unexpected error';
      }
      return error;
    }
  }

  static async deleteUser(userId) {
    try {
      await super.delete(`${API_ROUTES.USERS}/${userId}`, {}, {});
      return { error: false };
    } catch (err) {
      const error = { error: true };
      switch (err.status) {
        case null:
          error.message = 'Can\'t reach server. Check your connection.';
          break;
        case 401:
          error.message = 'Authentication error';
          break;
        case 500:
          error.message = 'Internal error';
          break;
        default:
          error.message = 'Unexpected error';
      }
      return error;
    }
  }
}

export { UserController };
