<template>
  <v-row class="fill-height">
    <v-col>
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>{{ subCategory.nameSubcategory }}</v-toolbar-title>
      </v-toolbar>
      <v-row>
        <v-card
          class="mt-4 mb-4 mr-4 ml-4"
          max-width="344"
          v-for="modul in subCategory.modules"
          :key="modul.id"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ modul.nameModule }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-img :src="modul.photoModule" height="194"></v-img>
          <v-card-actions>
            <router-link
              tag="button"
              :to="{
                name: 'moduleItem',
                params: { moduleID: modul.id },
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
                <span>Войти в модуль обучения</span>
              </v-tooltip>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
export default {
  metaInfo: {
    title: "Подкатегория обучения | СДО PRO",
  },
  computed: {
    subCategory() {
      return this.$store.getters.subCategory(
        this.$route.params.categoryID,
        this.$route.params.subcategoryID
      );
    },
  },
};
</script>
