import Vue from "vue";
import Vuex from "vuex";
import ListenerCourseModule from "./Modules/ListenerCourse";
import ListenerAuthModule from "./Modules/UserAuth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ListenerCourseModule,
    ListenerAuthModule,
  },
});
