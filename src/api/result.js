export class Result {
  response;

  constructor(responseObject) {
    this.response = responseObject;
  }

  getItem(key) {
    if (!(this.response && this.response[key])) {
      return null;
    }

    return this.response[key];
  }

  getResource() {
    return this.getItem('resource');
  }

  hasResponse() {
    return this.getResource() !== null;
  }

  isOk() {
    return this.getOk() === true;
  }

  getOk() {
    if (!this.hasResponse()) {
      return this.getItem('ok') ?? false;
    }

    return this.getResource().ok ?? false;
  }

  getMessage() {
    if (!this.hasResponse()) {
      return this.getItem('message') ?? '';
    }

    return this.getResource().message ?? '';
  }
}