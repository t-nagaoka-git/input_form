import Vue from 'vue';
import Router from 'vue-router';
import BasicInformationForm from './components/BasicInformationForm.vue';
import ConsultationForm from './components/ConsultationForm.vue';
import QuestionnaireForm from './components/QuestionnaireForm.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: BasicInformationForm,
    },
    {
      path: '/consultation',
      component: ConsultationForm,
    },
    {
      path: '/questionnaire',
      component: QuestionnaireForm,
    },
  ],
});
