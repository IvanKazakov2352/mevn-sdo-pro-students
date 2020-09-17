import axios from "axios";

export default {
  state: {
    groups: [],
  },
  mutations: {
    setGroups(state, data) {
      state.groups = data;
    },
  },
  actions: {
    async fetchGroups({ commit }) {
      const { data } = await axios.get("/api/groups/");
      commit("setGroups", data);
    },
  },
  getters: {
    groupsCount(state) {
      return state.groups.length;
    },
    groups(state) {
      return state.groups;
    },
  },
};
