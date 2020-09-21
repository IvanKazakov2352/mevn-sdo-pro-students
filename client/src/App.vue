<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="(item, i) in menu">
          <v-row v-if="item.heading" :key="`menu${i}`" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
          </v-row>
          <v-list-item v-else :key="item.text" link :to="item.route">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">СДО PRO Студенты</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="this.exit" text>
        <span class="hidden-sm-and-down">{{ listener.fiolistener }}</span>
      </v-btn>
      <v-btn v-if="this.exit" icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row align="start" justify="center" class="container">
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    listener: {},
    exit: localStorage.getItem("listenerProfile"),
  }),
  methods: {
    logout() {
      localStorage.removeItem("listenerProfile");
      this.$router.push("/signin");
      location.reload()
    },
  },
  computed: {
    menu() {
      if (!this.exit) {
        return [{ icon: "mdi-login", text: "Войти", route: "/signin" }];
      } else {
        return [
          { icon: "mdi-book", text: "Профили обучения", route: "/profiles" },
          {
            icon: "mdi-calendar",
            text: "Календарь событий",
            route: "/calendar",
          },
          { icon: "mdi-chat", text: "Чат с преподавателями", route: "/chat" },
          {
            icon: "mdi-card-account-details",
            text: "Контакты",
            route: "/contacts",
          },
        ];
      }
    },
  },
  mounted() {
    this.listener = JSON.parse(localStorage.getItem("listenerProfile"))
  }
};
</script>
