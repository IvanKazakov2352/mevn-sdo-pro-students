import Vue from "vue";
import VueRouter from "vue-router";
import { mapGetters } from "vuex";

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
    component: () => import("@/components/Profiles.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id",
    name: "profileItem",
    component: () => import("@/components/ProfileItem.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/examen/:examenID",
    name: "examen",
    component: () => import("@/components/TestsExamen.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/category/:categoryID",
    name: "categoryItem",
    component: () => import("@/components/CategoryItem.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/category/:categoryID/subcategory/:subcategoryID",
    name: "subcategoryItem",
    component: () => import("@/components/SubCategoryItem.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/category/:categoryID/subcategory/:subcategoryID/module/:moduleID",
    name: "moduleItem",
    component: () => import("@/components/ModuleItem.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/category/:categoryID/subcategory/:subcategoryID/module/:moduleID/lection/:lectionID",
    name: "lectionItem",
    component: () => import("@/components/LectionItem.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/category/:categoryID/subcategory/:subcategoryID/module/:moduleID/lectiontests/:lectionID",
    name: "lectionTest",
    component: () => import("@/components/LectionTests.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile/:id/category/:categoryID/subcategory/:subcategoryID/module/:moduleID/lectiontests/:lectionID/test/:testID",
    name: "lectionTestItem",
    component: () => import("@/components/Tests.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/test_result",
    name: "result",
    component: () => import("@/components/TestResult.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/examen_result",
    name: "examen",
    component: () => import("@/components/ExamenResult.vue"),
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
