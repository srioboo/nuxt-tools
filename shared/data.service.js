import axios from 'axios';
import { API } from './config';

const getBookmarks = async function() {
  try {
    const response = await axios.get(`${API}/bookmarks`);
    const data = parseList(response);

    const bookmarks = data.map(b => {
      return b;
    });
    return bookmarks;
  } catch (error) {
    /* eslint-disable no-console */
    console.log(error);
    /* eslint-disable no-console */
    /* eslint-disable unicorn/throw-new-error */
    return [];
  }
};

const parseList = response => {
  if (response.status !== 200) throw Error(response.message);
  if (!response.data) return [];
  let list = response.data;
  if (typeof list !== 'object') {
    list = [];
  }
  return list;
};

export const dataService = {
  getBookmarks,
};
