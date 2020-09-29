<template>
  <v-row class="fill-height">
    <v-col>
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>{{ profile.nameProfile }}</v-toolbar-title>
      </v-toolbar>
      <v-card width="auto" height="auto">
        <v-card-text class="headline">Категории обучения</v-card-text>
        <v-row>
          <v-card
            class="mt-5 mb-5 mr-5 ml-5"
            max-width="344"
            v-for="category in profile.categories"
            :key="category.id"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">
                  {{ category.nameCategory }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-img :src="category.linkPhotoCategory" height="194"></v-img>
            <v-card-actions>
              <router-link
                tag="button"
                :to="{
                  name: 'categoryItem',
                  params: { categoryID: category.id },
                }"
              >
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon v-bind="attrs" v-on="on">
                      <v-icon>
                        mdi-exit-to-app
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>Войти в категорию обучения</span>
                </v-tooltip>
              </router-link>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-card>
      <v-card class="mt-5" width="auto" height="auto">
        <v-card-text class="headline">
          Список экзаменационных тестов
        </v-card-text>
        <v-row>
          <v-card
            class="mt-5 mb-5 mr-5 ml-5"
            max-width="344"
            v-for="examen in profile.examens"
            :key="examen.id"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="headline">
                  {{ examen.nameExamen }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{
                    group.dostupExamen
                      ? "Тестирование доступно для прохождения"
                      : "Тестирование недоступно для прохождения"
                  }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  Количество попыток сдачи экзамена: {{ group.attemptExamen }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  Количество ваших попыток сдачи экзамена:
                  {{ attemptUserExamen }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-img :src="examen.photoExamen" height="194"></v-img>
            <v-card-actions>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on"
                    :disabled="!group.dostupExamen"
                    @click="redirectToExamenTests(examen)"
                  >
                    <v-icon>
                      mdi-apple-keyboard-command
                    </v-icon>
                  </v-btn>
                </template>
                <span>Тестирование доступно для прохождения</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-information-outline
                    </v-icon>
                  </v-btn>
                </template>
                <span>Дополнительная информация о экзамене</span>
              </v-tooltip>
            </v-card-actions>
          </v-card>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    title: "Профиль обучения | СДО PRO",
  },
  data: () => ({
    user: {},
  }),
  methods: {
    redirectToExamenTests(examen) {
      this.$router.push({ name: "examen", params: { examenID: examen.id } });
    },
  },
  computed: {
    ...mapGetters(["profile", "group", "attemptUserExamen"]),
  },
  mounted() {
    this.$store.dispatch("fetchProfile", this.$route.params.id);
    this.$store.dispatch("fetchGroup", this.$route.query.group_id);
    this.user = JSON.parse(localStorage.getItem("listenerProfile"));
  },
};
</script>
