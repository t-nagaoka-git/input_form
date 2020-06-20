<template>
  <div class="container">
    <div class="message is-info">
      <div class="message-header">
        <p>お客様の情報を入力してください</p>
      </div>
      <div class="message-body">
        <div class="sex">
          <p>- 性別 -</p>
          <label class="radio"><input type="radio" value="男性" v-model="sex" />男性</label>
          <label class="radio"><input type="radio" value="女性" v-model="sex" />女性</label>
        </div>
        <div class="birthday">
          <p>- 生年月日 -</p>
          <div class="select">
            <select v-model="year">
              <option v-for="n in 100" v-bind:value="1970 + n" :key="n">{{ 1970 + n }}</option>
            </select>
          </div>
          年
          <div class="select">
            <select v-model="month">
              <option v-for="n in 12" v-bind:value="n" :key="n">{{ n }}</option>
            </select>
          </div>
          月
          <div class="select">
            <select v-model="day">
              <option v-for="n in days" v-bind:value="n" :key="n">{{ n }}</option>
            </select>
          </div>
          日
        </div>
      </div>
    </div>
    <router-link to="/consultation" class="button is-primary">次へ進む</router-link>
  </div>
</template>

<script>
export default {
  name: 'BasicInformationForm',
  computed: {
    sex: {
      get() {
        return this.$store.getters.sex;
      },
      set(value) {
        this.$store.commit('setSex', value);
      },
    },
    year: {
      get() {
        return this.$store.getters.year;
      },
      set(value) {
        this.$store.commit('setYear', value);
      },
    },
    month: {
      get() {
        return this.$store.getters.month;
      },
      set(value) {
        this.$store.commit('setMonth', value);
      },
    },
    day: {
      get() {
        return this.$store.getters.day;
      },
      set(value) {
        this.$store.commit('setDay', value);
      },
    },
    days: {
      get() {
        return new Date(this.$store.getters.year, this.$store.getters.month, 0).getDate();
      },
    },
  },
};
</script>
