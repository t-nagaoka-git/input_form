<template>
  <div class="container">
    <div class="message is-info">
      <div class="message-header">
        <p>ご相談内容をご記入ください</p>
      </div>
      <div class="message-body">
        <div class="lifeInsurance">
          <p>- ご相談内容 -</p>
          <textarea class="textarea" v-model="questionnaire1" rows="10"></textarea>
        </div>
      </div>
    </div>
    <router-link to="/consultation" class="button is-primary">前へ戻る</router-link>
    <router-link to="/confirm" class="button is-primary">次へ進む</router-link>
  </div>
</template>

<script>
export default {
  name: 'QuestionnaireForm',
  computed: {
    questionnaire1: {
      get() {
        return this.$store.getters.questionnaire1;
      },
      set(value) {
        this.$store.commit('setQuestionnaire1', value);
      },
    },
  },
};
</script>
