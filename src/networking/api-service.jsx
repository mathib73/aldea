import axios from 'axios';

import { ApiError } from './api-errors';
import { ApiErrorSerializer } from './api-error-serializer';

const METHODS = {
  delete: 'delete',
  get: 'get',
  patch: 'patch',
  post: 'post',
  put: 'put',
};

class ApiServiceClass {
  constructor() {
    const { appVersion } = navigator;
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });
    const storagedUser = localStorage.getItem('user');
    const user = JSON.parse(storagedUser);
    if (user) {
      this._addedHeaders = {
        'X-Requested-With': 'XMLHttpRequest',
        version: appVersion,
        Authorization: `Bearer ${user.jwt}`,
      };
    } else {
      this._addedHeaders = {
        'X-Requested-With': 'XMLHttpRequest',
        version: appVersion,
      };
    }
  }

  async _sendRequest(method, url, config = {}) {
    try {
      const updatedConfig = { ...config };
      updatedConfig.headers = { ...this._addedHeaders, ...(config.headers || {}) };
      if (method === METHODS.get || method === METHODS.delete) {
        return await this.axios[method](url, updatedConfig);
      }
      const body = updatedConfig.body || {};
      delete updatedConfig.body;
      return await this.axios[method](url, body, updatedConfig);
    } catch (error) {
      if (error.response && error.response.data) {
        throw new ApiError({
          ...ApiErrorSerializer.deSerialize(error.response.data),
          status: error.response.status,
        });
      }
      throw new ApiError({
        status: null,
        code: null,
        message: error.message,
      });
    }
  }

  setHeaders(newHeaders) {
    Object.assign(this._addedHeaders, newHeaders);
  }

  getHeaders() {
    return { ...this._addedHeaders };
  }

  get(url, params = {}, config = {}) {
    return this._sendRequest(METHODS.get, url, { ...config, params });
  }

  post(url, body = {}, config = {}) {
    return this._sendRequest(METHODS.post, url, { ...config, body });
  }

  patch(url, body = {}, config = {}) {
    return this._sendRequest(METHODS.patch, url, { ...config, body });
  }

  put(url, body = {}, config = {}) {
    return this._sendRequest(METHODS.put, url, { ...config, body });
  }

  delete(url, params = {}, config = {}) {
    return this._sendRequest(METHODS.delete, url, { ...config, params });
  }
}

const ApiService = new ApiServiceClass();

export { ApiService };
