import axios from "axios";

export default {
  state: {
    listeners: [],
    listener: {},
    isAuthenticatedListener: false,
    user: JSON.parse(localStorage.getItem("listenerProfile")),
  },
  mutations: {
    setListeners(state, data) {
      state.listeners = data;
      if (localStorage.getItem("listenerProfile") !== null) {
        state.isAuthenticatedListener = true;
      }
    },
    setAuthhenticated(state) {
      if (localStorage.getItem("listenerProfile") !== null) {
        state.isAuthenticatedListener = true;
      }
    },
    findListener(state, payload) {
      state.listeners.find((listener) => {
        if (listener.login === payload.login && listener.password === payload.password) {
          state.listener = listener;
          localStorage.setItem("listenerProfile", JSON.stringify(state.listener));
        } else {
          return new Error(`Пользователь с логином ${payload.login} не найден`);
        }
      });
    },
  },
  actions: {
    async getListeners({ commit }) {
      const { data } = await axios.get("/api/listeners");
      commit("setListeners", data);
    },
    findListener({ commit }, payload) {
      commit("findListener", payload);
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.isAuthenticatedListener;
    },
    isUser(state) {
      return state.user;
    },
  },
};
