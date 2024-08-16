<template>
  <h1>화면 이동</h1>
  <router-link to="/">Home으로 바로 이동</router-link>
  <br>
  <br>
  <button @click="navigateTo">버튼으로 이동</button>
  <br>
  <br>
  <button @click="navigateToWithDataQuery">버튼으로 이동(데이터 query)</button>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      no: 11111111111
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  methods: {
    navigateTo() {
      this.$router.push("/");
    },
    navigateToWithDataQuery() {
      this.$router.push({path : `/WatchView`, query : {no : this.no}});
    },
  }
}
</script>

<style scoped>

</style>