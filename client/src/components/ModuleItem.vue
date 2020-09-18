<template>
  <v-row class="fill-height">
    <v-col>
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>{{ module.nameModule }}</v-toolbar-title>
      </v-toolbar>
      <v-card class="mx-auto" max-width="auto">
        <v-card-text>
          <div>Дополнительная информация</div>
          <p class="display-1 text--primary">
            {{ module.descriptionModule }}
          </p>
        </v-card-text>
      </v-card>
      <v-row>
        <v-card
          class="mt-4 mb-4 mr-4 ml-4"
          max-width="344"
          v-for="lection in module.lections"
          :key="lection.id"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ lection.nameLection }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-img :src="lection.photoLection" height="194"></v-img>
          <v-card-actions>
            <router-link
              tag="button"
              :to="{
                name: 'lectionItem',
                params: { lectionID: lection.id },
              }"
            >
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-polaroid
                    </v-icon>
                  </v-btn>
                </template>
                <span>Читать лекцию</span>
              </v-tooltip>
            </router-link>
            <router-link
              tag="button"
              :to="{
                name: 'lectionTest',
                params: { lectionID: lection.id },
              }"
            >
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon>
                      mdi-alpha-t-box-outline
                    </v-icon>
                  </v-btn>
                </template>
                <span>Список тестирований к данной лекции</span>
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
    title: "Модуль обучения | СДО PRO",
  },
  computed: {
    module() {
      return this.$store.getters.module(
        this.$route.params.categoryID,
        this.$route.params.subcategoryID,
        this.$route.params.moduleID
      );
    },
  },
};
</script>
