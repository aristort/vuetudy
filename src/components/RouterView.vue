<template>
  <h1>화면 이동</h1>
  <router-link to="/">Home으로 바로 이동</router-link>
  <br>
  <br>
  <button @click="navigateTo">버튼으로 이동</button>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
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
    }
  }
}
</script>

<style scoped>

</style>