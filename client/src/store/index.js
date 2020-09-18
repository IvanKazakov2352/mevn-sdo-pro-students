import Vue from "vue";
import Vuex from "vuex";
import ListenerCourseModule from "./Modules/ListenerCourse";
import ListenerAuthModule from "./Modules/UserAuth";
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ListenerCourseModule,
    ListenerAuthModule,
  },
  plugins: [createPersistedState()]
});
