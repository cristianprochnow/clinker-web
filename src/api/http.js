import { Config } from './config.js';

export class Http {
  response;
  content;
  uri;
  path;

  async get() {
    await this.requestUrl();
    await this.buildContent();

    return this.content;
  }

  post(body) {}

  put(body, id) { }

  delete(id) {

  }

  async buildContent() {
    this.content = await this.response.json();
  }

  async requestUrl() {
    this.response = await fetch(this.uri);

    return this;
  }

  setPath(path) {
    if (!path) {
      path = '/';
    }

    this.path = path;

    return this.serializePath().setUri();
  }

  setUri() {
    this.uri = `${Config.getBaseUrl()}${this.path}`;

    return this;
  }

  serializePath() {
    if (this.path[0] !== '/') {
      this.path = `/${this.path}`;
    }

    return this;
  }
}