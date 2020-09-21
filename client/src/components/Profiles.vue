<template>
  <v-row class="fill-height">
    <v-col>
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>
          Профили обучения: ({{ userGroups.length }})
        </v-toolbar-title>
      </v-toolbar>
      <div v-for="group in userGroups" :key="group._id">
        <v-card
          max-width="auto"
          v-for="profile in group.course"
          :key="profile._id"
        >
          <v-card-text>
            <p class="display-1 text--primary">
              {{ profile.nameProfile }}
            </p>
            <div class="text--primary">
              Период обучения: {{ group.starttraining }} -
              {{ group.endtraining }}
            </div>
            <div class="text--primary">
              Дата экзамена: {{ group.dateexamen }}
            </div>
            <div class="text--primary">
              Доступ группы до сдачи экзамена:
              {{ !group.dostup ? "заблокирован" : "разрешен" }}
            </div>
          </v-card-text>
          <v-card-actions>
            <router-link tag="button" :to="{name: 'profileItem', params: {id: profile._id}}">
              <v-btn text color="deep-purple accent-4">
                Начать обучение
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    title: "Профили обучения | СДО PRO",
  },
  data: () => ({
    listener: {}
  }),
  computed: {
    ...mapGetters(["groups"]),
    userGroups() {
      return this.groups.filter((group) => {
        if (group.user.find((u) => u._id === this.listener._id)) {
          return [group];
        }
      });
    },
  },
  mounted() {
    this.listener = JSON.parse(localStorage.getItem("listenerProfile"))
    this.$store.dispatch("fetchGroups")
  },
};
</script>