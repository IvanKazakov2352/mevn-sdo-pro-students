<template>
  <v-row justify="center">
    <v-col cols="12" sm="8" md="4">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Войти в СДО PRO Студенты</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-alert v-model="errorAlert" type="error">
            Пользователь с логином {{ this.login }} не найден
          </v-alert>
          <v-form v-model="valid">
            <v-text-field
              v-model="login"
              label="Логин"
              :rules="loginRules"
              prepend-icon="mdi-account"
              type="text"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Пароль"
              prepend-icon="mdi-lock"
              :rules="passwordRules"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" :disabled="!valid" @click="loginListener"
            >Войти</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";
import sweetalert from "sweetalert";
import { mapGetters } from "vuex";
export default {
  data: () => ({
    login: null,
    password: null,
    errorAlert: false,
    show1: false,
    valid: false,
    loginRules: [
      (v) => !!v || "Введите Логин",
      (v) => (v && v.length == 7) || "Логин должен состоять из 7 символов",
    ],
    passwordRules: [
      (v) => !!v || "Введите пароль",
      (v) => (v && v.length == 15) || "Пароль должен состоять из 15 символов",
    ],
  }),
  methods: {
    loginListener() {
      this.$store.dispatch("findListener", {
        login: this.login,
        password: this.password,
      });
      this.$store.commit("setAuthhenticated");
      if (this.isAuthenticated) {
        this.$router.push("/profiles");
      } else {
        this.errorAlert = true
      }
    },
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>
