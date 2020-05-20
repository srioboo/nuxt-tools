import axios from 'axios';

import { API } from './config';

const getBookmarks = async function () {
  try {
    const response = await axios.get(`${API}/bookmarks`);

    let data = parseList(response);

    const bookmarks = data.map((b: any) => {
      console.log(b.nombre);
      return b;
    });
  } catch (error) {
    console.log(error);
    return [];
  }
};

const parseList = (response: any) => {
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
