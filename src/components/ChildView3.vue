<template>
  <h1>자식화면3</h1>
  <p>부모에게서 받은 과일: {{ fruit }}</p>
  <button @click="changeFruit">자식창에 있는 과일 변경 버튼</button>
</template>

<script>
export default {
  props: ['fruit'],
  emits: ['update:fruit'],
  data() {
    return {
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  beforeMount() {
  },
  mounted() {
  },
  beforeUnmount() {
  },
  methods: {
    changeFruit() {
      this.$emit('update:fruit', '사과');
    }
  }
}
</script>

<style scoped>

</style>