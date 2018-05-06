const baseURL = 'https://api.stackexchange.com/2.2';
const site = 'stackoverflow';
const key = '1WP26yIS*3APRVewJHDjww((';

export default class Api {
  constructor(token) {
    this.token = token;
  }

  _buildURL(endpoint, queries) {
    const baseQuery = `?key=${key}&access_token=${this.token}&site=${site}`;
    const url = `${baseURL}${endpoint}${baseQuery}`;
    if (queries) {
      return url + `&${queries}`;
    }
    return url;
  }

  async _fetch(endpoint, queries) {
    const url = this._buildURL(endpoint, queries);
    return fetch(url).then(res => {
      return res.json();
    });
  }

  async getUser() {
    return this._fetch('/me');
  }
}
