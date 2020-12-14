export default {
  state: {
    errors: new Map()
  },
  mutations: {
    ADD_ERROR(state, payload) {
      state.errors.set(payload.targetId, payload.options);
    },
    REMOVE_ERROR(state, payload) {
      state.errors.delete(payload);
    },
    CLEAR_MAP(state) {
      state.errors.clear();
    }
  },
  getters: {
    getErrorsList: (state) => {
      return state.errors;
    }
  },
  actions: {
    addError({ commit }, payload) {
      commit("ADD_ERROR", payload);
    },
    removeError({ commit }, payload) {
      commit("REMOVE_ERROR", payload);
    },
    clearMap({ commit }) {
      commit("CLEAR_MAP");
    }
  }
};
