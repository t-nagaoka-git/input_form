<template>
  <div class="container">
    <div class="message is-info">
      <div class="message-header">
        <p>以下の内容をご確認ください</p>
      </div>
      <div class="message-body">
        <div class="sex">
          <p>- 性別 -</p>
          <p>{{ sex }}</p>
        </div>
        <div class="birthday">
          <p>- 生年月日 -</p>
          <p>{{ year }}年{{ month }}月{{ day }}日</p>
        </div>
        <div class="consultation">
          <p>- 現在、生命保険に加入されていますか？ -</p>
          <p>{{ consultation1 }}</p>
        </div>
        <div class="consultation">
          <p>- 現在入院中ですか。または、最近3ヶ月以内に医師の診療・検査の結果、入院・手術をすすめられたことはありますか？ -</p>
          <p>{{ consultation2 }}</p>
        </div>
        <div class="consultation">
          <p>- 過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？ -</p>
          <p>{{ consultation3 }}</p>
        </div>
        <div class="lifeInsurance">
          <p>- ご相談内容 -</p>
          <p>{{ questionnaire1 }}</p>
        </div>
      </div>
    </div>
    <router-link to="/questionnaire" class="button is-primary">前へ戻る</router-link>
    <router-link to="#" class="button is-primary">送信</router-link>
  </div>
</template>

<script>
export default {
  name: 'ConfirmForm',
  computed: {
    sex: {
      get() {
        return this.$store.getters.sex;
      },
    },
    year: {
      get() {
        return this.$store.getters.year;
      },
    },
    month: {
      get() {
        return this.$store.getters.month;
      },
    },
    day: {
      get() {
        return this.$store.getters.day;
      },
    },
    consultation1: {
      get() {
        return this.$store.getters.consultation1;
      },
    },
    consultation2: {
      get() {
        return this.$store.getters.consultation2;
      },
    },
    consultation3: {
      get() {
        return this.$store.getters.consultation3;
      },
    },
    questionnaire1: {
      get() {
        return this.$store.getters.questionnaire1;
      },
    },
  },
};
</script>

<style scoped>
p + p {
  color: #000;
  text-indent: 1em;
}
</style>
