<template>
  <v-row class="fill-height">
    <v-col>
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>{{ category.nameCategory }}</v-toolbar-title>
      </v-toolbar>
      <v-row>
        <v-card
          class="mt-4 mb-4 mr-4 ml-4"
          max-width="344"
          v-for="subCategory in category.subCategories"
          :key="subCategory.id"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ subCategory.nameSubcategory }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-img :src="subCategory.photoSubcategory" height="194"></v-img>
          <v-card-actions>
            <router-link
              tag="button"
              :to="{
                name: 'subcategoryItem',
                params: { subcategoryID: subCategory.id },
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
                <span>Войти в подкатегорию обучения</span>
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
    title: "Категория обучения | СДО PRO",
  },
  computed: {
    category() {
      return this.$store.getters.category(this.$route.params.categoryID);
    },
  },
};
</script>
