export default {
  state: {
    errors: new Map()
  },
  mutations: {
    ADD_ERROR(state, payload) {
      state.errors.set(payload.targetId, payload.message);
    },
    REMOVE_ERROR(state, payload) {
      state.errors.delete(payload);
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
    }
  }
};
