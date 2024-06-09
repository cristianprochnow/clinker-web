export class Config {
  static getBaseUrl() {
    let baseUrl = import.meta.env.VITE_API_ENDPOINT;

    if (baseUrl[baseUrl.length - 1] === '/') {
      baseUrl = baseUrl.slide(0, -1);
    }

    return baseUrl;
  }
}