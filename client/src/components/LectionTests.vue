<template>
  <v-row class="fill-height">
    <v-col>
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>
          Список тестов к лекции: {{ lection.nameLection }}
        </v-toolbar-title>
      </v-toolbar>
      <v-row>
        <v-card
          class="mt-4 mb-4 mr-4 ml-4"
          max-width="344"
          v-for="test in lection.tests"
          :key="test.id"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline">
                {{ test.nameTest }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-img :src="test.photoTest" height="194"></v-img>
          <v-card-actions>
            <router-link
              tag="button"
              :to="{
                name: 'lectionTestItem',
                params: { testID: test.id },
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
                <span>Пройти тестирование</span>
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
    title: "Тестирования к данной лекции | СДО PRO",
  },
  computed: {
    lection() {
      return this.$store.getters.lection(
        this.$route.params.categoryID,
        this.$route.params.subcategoryID,
        this.$route.params.moduleID,
        this.$route.params.lectionID
      );
    },
  },
};
</script>
