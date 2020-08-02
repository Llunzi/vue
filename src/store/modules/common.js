import Fetch from '@pandora/fetch';
import Vue from 'vue';

// initial state
const initState = {
  type: 1,
  count: 2,
};

// getters
const getters = {
  getType: (state, getters) =>
    state.type,
};

// actions
const actions = {
  increment({ commit }, payload) {
    commit('increment', payload);
  },
};

// mutations
const mutations = {
  increment(state, payload) {
    state.count = payload;
  },
};

export default {
  namespaced: true,
  state: initState,
  getters,
  actions,
  mutations,
};
