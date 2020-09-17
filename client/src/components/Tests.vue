<template>
  <v-row class="fill-height">
    <v-col>
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>Тест по {{ testOBJ.nametest }}</v-toolbar-title>
      </v-toolbar>
      <v-card class="fill-height" height="auto">
        <v-col cols="12">
          <v-card
            class="mx-auto mb-2"
            max-width="700"
            v-for="question in testOBJ.questions.slice(
              (page - 1) * perPage,
              page * perPage
            )"
            :key="question.id"
          >
            <v-card-title>{{ question.question }}</v-card-title>
            <v-card-text>
              <div class="justify">
                <v-checkbox
                  :value="question.wronganswer"
                  v-model="checkedQuestions"
                ></v-checkbox>
                <h3>{{ question.wronganswer }}</h3>
              </div>
              <div class="justify">
                <v-checkbox
                  :value="question.wronganswer1"
                  v-model="checkedQuestions"
                ></v-checkbox>
                <h3>{{ question.wronganswer1 }}</h3>
              </div>
              <div class="justify">
                <v-checkbox
                  :value="question.answer"
                  v-model.lazy="checkedQuestions"
                ></v-checkbox>
                <h3>{{ question.answer }}</h3>
              </div>
              <div class="justify">
                <v-checkbox
                  :value="question.wronganswer2"
                  v-model="checkedQuestions"
                ></v-checkbox>
                <h3>{{ question.wronganswer2 }}</h3>
              </div>
              <div class="justify">
                <v-checkbox
                  :value="question.wronganswer3"
                  v-model="checkedQuestions"
                ></v-checkbox>
                <h3>{{ question.wronganswer3 }}</h3>
              </div>
            </v-card-text>
            <v-row justify="center">
              <v-btn
                @click="next(+1, question)"
                :disabled="page >= numPages"
                class="ma-2"
                outlined
                color="indigo"
                >Следующий вопрос</v-btn
              >
              <v-btn
                @click="test(question)"
                class="ma-2"
                outlined
                color="indigo"
                >Закончить тестирование</v-btn
              >
            </v-row>
          </v-card>
        </v-col>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import axios from "axios";
export default {
  props: {
    testID: {
      type: String,
      default: "",
      required: true,
    },
    group: {
      type: Object,
      default: {},
      required: true,
    },
    testOBJ: {
      type: Object,
      default: {},
      required: true,
    },
  },
  data() {
    return {
      courses: [],
      checkedQuestions: false,
      finalOtvets: [],
      questions: [],
      page: 1,
      perPage: 1,
      plus: 0,
      testPercent: 0,
    };
  },
  methods: {
    next(change, question) {
      this.page = Math.max(1, Math.min(this.numPages, this.page + change));
      this.questions = this.testOBJ.questions;
      this.questions.forEach((ques) => {
        if (this.checkedQuestions === ques.answer) {
          this.plus++;
        }
      });
      this.testPercent = (this.plus / this.questions.length) * 100;
      const questionAssign = Object.assign(question, {
        otvet: this.checkedQuestions,
      });
      this.finalOtvets.push(questionAssign);
    },
    test(question) {
      confirm(
        "Если вы закончите тест, то автоматически окажитесь на странице результатов"
      ) &&
        this.next(+1, question) &&
        this.$router.push({
          name: "testResult",
          params: {
            percent: this.testPercent,
            testQues: this.questions,
            nameTest: this.testOBJ.nametest,
            group: this.group,
          },
        });
    },
  },
  computed: {
    numPages() {
      return Math.ceil(this.testOBJ.questions.length / this.perPage);
    },
  },
};
</script>
<style scoped>
@import "../assets/index.css";
</style>
