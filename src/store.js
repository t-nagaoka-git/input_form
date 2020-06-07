import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sex: '',
    year: '1990',
    month: '1',
    day: '1',
    consultation1: '',
    consultation2: '',
    consultation3: '',
    questionnaire1: '',
  },
  mutations: {
    setSex(state, sex) {
      state.sex = sex;
    },
    setYear(state, year) {
      state.year = year;
    },
    setMonth(state, month) {
      state.month = month;
    },
    setDay(state, day) {
      state.day = day;
    },
    setConsultation1(state, consultation1) {
      state.consultation1 = consultation1;
    },
    setConsultation2(state, consultation2) {
      state.consultation2 = consultation2;
    },
    setConsultation3(state, consultation3) {
      state.consultation3 = consultation3;
    },
    setQuestionnaire1(state, questionnaire1) {
      state.questionnaire1 = questionnaire1;
    },
  },
  actions: {},
});
