<template>
  <h1>자식화면2</h1>
  <p>부모에게서 받은 이름: {{ name }}</p>
  <button @click="toParent">자식창에 있는 클릭 버튼</button>
</template>

<script>
export default {
  props: ['name'],
  emits: ['custom-event'],
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
    toParent() {
      this.$emit('custom-event');
    }
  }
}
</script>

<style scoped>

</style>