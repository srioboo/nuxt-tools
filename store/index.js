// import { Action, Mutation } from 'vuex-module-decorators';
import Vue from 'vue';
import Vuex from 'vuex';

import { dataService } from '../shared';
import { GET_BOOKMARKS, SET_BKMS } from './mutation-types';

Vue.use(Vuex);

// TODO: es necesario completar el acceso por stores para acceder a los bookmarks
export const state = () => ({
  bookmarks: [],
});

export const mutations = {
  [GET_BOOKMARKS](state, bookmarks) {
    // state.bookmarks.push(bookmarks);
    state.bookmarks = bookmarks;
  },
  [SET_BKMS](state, response) {
    state.bookmarks = response;
  },
};

export const actions = {
  async getBookmarksAction(context) {
    console.log('SRN getBookmarksAction');
    const bookmarks = await dataService.getBookmarks();
    // context.commit('getBookmarks', bookmarks);
    context.commit(GET_BOOKMARKS, bookmarks);
  },
};

/* export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
  actions,
  modules: {},
}); */
