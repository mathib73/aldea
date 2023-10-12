class ApiErrorSerializer {
  static deSerialize(data) {
    return {
      errorCode: data.error_code || null,
      code: data.http_status || null,
      short: data.short || null,
      message: data.description || null,
    };
  }
}

export { ApiErrorSerializer };
