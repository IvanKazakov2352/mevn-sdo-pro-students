<template>
  <v-row class="fill-height">
    <v-col>
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>
          Результат прохождения тестирования: {{ result.nameTest }} -
          {{ result.percent }}%
        </v-toolbar-title>
      </v-toolbar>
      <div class="flex">
        <v-card
          width="650"
          v-for="question in result.testQues"
          :key="question.id"
          class="mb-2 mt-2"
          :color="question.otvet === question.answer ? `green` : `red`"
        >
          <v-card-text>
            <p class="display-1 text--primary">
              {{ question.question }}
            </p>
            <div class="text--primary">Ваш ответ: {{ question.otvet }}</div>
            <div class="text--primary">
              Правильный ответ: {{ question.answer }}
            </div>
            <div class="text--primary">
              Комментарий к вопросу: {{ question.comment }}
            </div>
          </v-card-text>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  metaInfo: {
    title: "Результат прохождения тестирования | СДО PRO",
  },
  computed: {
    ...mapGetters(["result"]),
  },
};
</script>
<style scoped>
@import "../assets/index.css";
</style>
