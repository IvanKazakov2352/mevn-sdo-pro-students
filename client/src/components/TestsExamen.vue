<template>
  <v-row class="fill-height">
    <v-col>
      <v-toolbar class="mb-2" color="indigo darken-5" dark flat>
        <v-toolbar-title>{{ testing.nameExamen }}</v-toolbar-title>
      </v-toolbar>
      <v-card class="fill-height" height="auto">
        <v-col cols="12">
          <v-card
            class="mx-auto mb-2"
            max-width="700"
            v-for="question in testing.questions.slice(
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
                >Закончить попытку</v-btn
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
  metaInfo: {
    title: "Экзаменационный тест | СДО PRO",
  },
  data() {
    return {
      courses: [],
      checkedQuestions: false,
      finalOtvets: [],
      questions: [],
      userAttempts: [],
      user: {},
      attemp: 0,
      page: 1,
      perPage: 1,
      plus: 0,
      testPercent: 0,
    };
  },
  methods: {
    next(change, question) {
      this.page = Math.max(1, Math.min(this.numPages, this.page + change));
      this.testing.questions.forEach((ques) => {
        if (this.checkedQuestions === ques.answer) {
          this.plus++;
        }
      });
      this.testPercent = (this.plus / this.testing.questions.length) * 100;
      const questionAssign = Object.assign(question, {
        otvet: this.checkedQuestions,
      });
      this.finalOtvets.push(questionAssign);
    },
    test(question) {
      this.next(+1, question);
      this.attemp++;
      this.$store.commit("setExamenResult", {
        id: this.$uuid.v4(),
        percent: this.testPercent,
        testQues: this.testing.questions,
        nameTest: this.testing.nameExamen,
        attemp: this.attemp,
      });
      this.$router.push("/examen_result");
    },
  },
  computed: {
    numPages() {
      return Math.ceil(this.testing.questions.length / this.perPage);
    },
    testing() {
      return this.$store.getters.testExamen(this.$route.params.examenID);
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("listenerProfile"));
  },
};
</script>
<style scoped>
@import "../assets/index.css";
</style>
