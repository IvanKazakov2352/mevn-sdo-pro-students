import axios from "axios";

export default {
  state: {
    groups: [],
    profile: {},
    testResult: {},
    examenResult: {}
  },
  mutations: {
    setGroups(state, data) {
      state.groups = data;
    },
    setProfile(state, data) {
      state.profile = data
    },
    setTestResult(state, payload) {
      state.testResult = payload
    },
    setExamenResult(state, payload) {
      state.examenResult = payload
    }
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
    async updateProfile({ commit, state }, payload) {
      const { data } = await axios.put("/api/course/" + payload, {...state.profile});
      commit("setProfile", data)
    }
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
    result(state) {
      return state.testResult
    },
    resultExamen(state) {
      return state.examenResult
    },
    testExamen: (state) => (examenID) => {
      return state.profile.examens.find(examen => examen.id === examenID)
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
    },
    test: (state) => (categoryID, subcategoryID, moduleID, lectionID, testID) => {
      const category = state.profile.categories.find(cat => cat.id === categoryID)
      const subCategory = category.subCategories.find(subcats => subcats.id === subcategoryID)
      const module = subCategory.modules.find(modul => modul.id === moduleID)
      const lection = module.lections.find(lection => lection.id === lectionID)
      return lection.tests.find(test => test.id === testID)
    }
  },
};
