import { Config } from './config.js';
import { Result } from './result.js';

export class Http {
  response;
  content;
  uri;
  path;
  method;

  to(path) {
    this.setPath(path);

    return this;
  }

  async get() {
    this.method = 'GET';

    await this.requestUrl();
    await this.buildContent();

    return new Result(this.content);
  }

  async post(body) {
    this.method = 'POST';

    await this.sendJson(body);
    await this.buildContent();

    return new Result(this.content);
  }

  put(body, id) {
    this.method = 'PUT';
  }

  delete(id) {
    this.method = 'DELETE';
  }

  async buildContent() {
    this.content = await this.response.json();
  }

  async requestUrl() {
    this.response = await fetch(this.uri, {
      method: this.method,
      mode: 'cors'
    });

    return this;
  }

  async sendJson(data) {
    this.response = await fetch(this.uri, {
      method: this.method,
      headers: Config.getDefaultHeaders(),
      mode: 'no-cors',
      body: JSON.stringify(data)
    });

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