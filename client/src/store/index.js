import Vue from "vue";
import Vuex from "vuex";
import ListenerCourseModule from "./Modules/ListenerCourse";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ListenerCourseModule,
  },
  plugins: [createPersistedState()]
});
