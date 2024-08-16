<template>
  <h1>watcher 데이터감시</h1>
  <input type="text" v-model="message" placeholder="메시지를 입력하세요.">
  <p>현재 메시지: {{ message }}</p>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message: '',
    };
  },
  computed: {},
  watch: {
    message(newVal, oldVal) {
      console.log(`메시지가 변경되었습니다: '${oldVal}' -> '${newVal}'`);
    }
  },
  created() {
  },
  mounted() {
    const no = this.$route.query.no;
    if (no) {
      alert(no);
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>