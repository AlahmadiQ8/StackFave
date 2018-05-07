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

  _objToQuery(obj = {}) {
    const entries = Object.entries(obj);
    if (entries.length === 0) {
      return '';
    }
    return entries.map(([key, val]) => `${key}=${val}`).join('&');
  }

  async _fetch(endpoint, queriesObj = {}) {
    const url = this._buildURL(endpoint, this._objToQuery(queriesObj));
    return fetch(url).then(res => {
      return res.json();
    });
  }

  async getFavorites(queriesObj = {}) {
    let favorites = [];
    let hasMore = false;
    const mergedQuery = Object.assign({ page: 1 }, queriesObj);
    do {
      if (hasMore) {
        mergedQuery.page += 1;
      }
      const { items, has_more } = await this._fetch(
        '/me/favorites',
        mergedQuery
      );
      favorites = favorites.concat(items);
      hasMore = has_more;
    } while (hasMore);
    return favorites;
  }
}
