import { ApiService } from '../networking/api-service';

class BaseController {
  static async get(...args) {
    return ApiService.get(...args);
  }

  static async post(url, body, ...args) {
    return ApiService.post(url, body, ...args);
  }

  static async put(url, body, ...args) {
    return ApiService.put(url, body, ...args);
  }

  static async delete(url, ...args) {
    return ApiService.delete(url, ...args);
  }
}

export { BaseController };
