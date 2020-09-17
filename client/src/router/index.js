import Vue from "vue";
import VueRouter from "vue-router";
import {mapGetters} from "vuex"

Vue.use(VueRouter);

const routes = [
  {
    path: "/calendar",
    name: "calendar",
    component: () => import("@/components/CalendarEvent.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("@/components/Contacts.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("@/components/Chat.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profiles",
    name: "courses",
    component: () => import("@/components/Courses.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: () => import("@/components/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("listenerProfile") == null) {
      next({
        path: "/signin",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
