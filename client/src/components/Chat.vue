<template>
  <v-row class="fill-height">
    <v-col>
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Чат с преподавателями</v-toolbar-title>
      </v-toolbar>
      <v-alert type="info">
        Внимание данный раздел находится в разработке
      </v-alert>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
export default {
  metaInfo: {
    title: "Чат с преподавателями | СДО PRO",
  },
  data: () => ({
    admins: [],
    admin: {},
    messages: [],
  }),
  methods: {
    async getAdmins() {
      const res = await axios.get("/api/getAdmin");
      this.admins = res.data;
    },
  },
  mounted() {
    this.getAdmins();
  },
};
</script>
