<template>
  <v-row class="fill-height">
    <v-col>
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>{{ profile.nameProfile }}</v-toolbar-title>
      </v-toolbar>
      <v-row>
        <v-card
          class="mt-4 mb-4 mr-4 ml-4"
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
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    title: "Профиль обучения | СДО PRO",
  },
  computed: {
    ...mapGetters(["profile"]),
  },
  mounted() {
    this.$store.dispatch("fetchProfile", this.$route.params.id);
  },
};
</script>
