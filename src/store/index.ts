import Vue from 'vue';
import Vuex from 'vuex';

import { dataService } from '../shared';
import { GET_BOOKMARKS } from './mutation-types';

Vue.use(Vuex);

// TODO: es necesario completar el acceso por stores para acceder a los bookmarks
const state = () => ({
  bookmarks: [],
});

const mutations = {
  [GET_BOOKMARKS](state: any, bookmarks: object) {
    state.bookmarks.push(bookmarks);
  },
};

const actions = {
  async getBookmarksAction(context: any) {
    const bookmarks = await dataService.getBookmarks();
    context.commit('getBookmarks', bookmarks);
  },
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  modules: {},
});
