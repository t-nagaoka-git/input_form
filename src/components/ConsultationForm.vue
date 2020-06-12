<template>
  <div class="container">
    <div class="message is-info">
      <div class="message-header">
        <p>以下にお答えください</p>
      </div>
      <div class="message-body">
        <div class="consultation">
          <p>現在、生命保険に加入されていますか？</p>
          <label><input type="radio" value="はい" v-model="consultation1" />はい</label>
          <label><input type="radio" value="いいえ" v-model="consultation1" />いいえ</label>
        </div>
        <div class="consultation" v-if="consultation1 !== ''">
          <p>
            現在入院中ですか。または、最近3ヶ月以内に医師の診療・検査の結果、入院・手術をすすめられたことはありますか？
          </p>
          <label><input type="radio" value="はい" v-model="consultation2" />はい</label>
          <label><input type="radio" value="いいえ" v-model="consultation2" />いいえ</label>
        </div>
        <div class="consultation" v-if="consultation2 !== ''">
          <p>
            過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？
          </p>
          <label><input type="radio" value="はい" v-model="consultation3" />はい</label>
          <label><input type="radio" value="いいえ" v-model="consultation3" />いいえ</label>
        </div>
      </div>
    </div>
    <router-link to="/" class="button is-primary">前へ進む</router-link>
    <router-link to="/questionnaire" class="button is-primary">次へ進む</router-link>
  </div>
</template>

<script>
export default {
  name: 'ConsultationForm',
  computed: {
    consultation1: {
      get() {
        return this.$store.getters.consultation1;
      },
      set(value) {
        this.$store.commit('setConsultation1', value);
      },
    },
    consultation2: {
      get() {
        return this.$store.getters.consultation2;
      },
      set(value) {
        this.$store.commit('setConsultation2', value);
      },
    },
    consultation3: {
      get() {
        return this.$store.getters.consultation3;
      },
      set(value) {
        this.$store.commit('setConsultation3', value);
      },
    },
  },
};
</script>
