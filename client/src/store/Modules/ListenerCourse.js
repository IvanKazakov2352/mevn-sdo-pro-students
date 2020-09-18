import axios from "axios";

export default {
  state: {
    groups: [],
    profile: {},
  },
  mutations: {
    setGroups(state, data) {
      state.groups = data;
    },
    setProfile(state, data) {
      state.profile = data
    },
  },
  actions: {
    async fetchGroups({ commit }) {
      const { data } = await axios.get("/api/groups/");
      commit("setGroups", data);
    },
    async fetchProfile({ commit }, payload) {
      const { data } = await axios.get("/api/course/" + payload);
      commit("setProfile", data)
    },
  },
  getters: {
    groupsCount(state) {
      return state.groups.length;
    },
    groups(state) {
      return state.groups;
    },
    profile(state) {
      return state.profile
    },
    category: (state) => (categoryID) => {
      return state.profile.categories.find(cat => cat.id === categoryID)
    },
    subCategory: (state) => (categoryID, subcategoryID) => {
      const category = state.profile.categories.find(cat => cat.id === categoryID)
      return category.subCategories.find(subcats => subcats.id === subcategoryID)
    },
    module: (state) => (categoryID, subcategoryID, moduleID) => {
      const category = state.profile.categories.find(cat => cat.id === categoryID)
      const subCategory = category.subCategories.find(subcats => subcats.id === subcategoryID)
      return subCategory.modules.find(modul => modul.id === moduleID)
    },
    lection: (state) => (categoryID, subcategoryID, moduleID, lectionID) => {
      const category = state.profile.categories.find(cat => cat.id === categoryID)
      const subCategory = category.subCategories.find(subcats => subcats.id === subcategoryID)
      const module = subCategory.modules.find(modul => modul.id === moduleID)
      return module.lections.find(lection => lection.id === lectionID)
    }
  },
};
