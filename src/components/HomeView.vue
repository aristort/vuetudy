<template>
  <!-- 이 부분은 Vue 컴포넌트의 HTML 템플릿을 정의하는 곳입니다. -->
  <h1>Vuetudy Home</h1>
</template>

<script>
export default {
  components: {
    // components 객체는 이 컴포넌트에서 사용할 하위 컴포넌트를 등록하는 곳입니다.
  },
  data() {
    return {
      // data 함수는 컴포넌트의 상태(state)를 정의하고 반환합니다.
      // 이 상태는 템플릿에서 사용될 수 있으며, 반응형으로 동작합니다.
    };
  },
  computed: {
    // computed 객체는 컴포넌트 내에서 계산된 속성들을 정의합니다.
    // 이 속성들은 의존하는 데이터가 변경될 때 자동으로 다시 계산됩니다.
  },
  watch: {
    // watch 객체는 특정 데이터 속성을 감시하고, 해당 데이터가 변경될 때
    // 특정 동작을 수행할 수 있도록 합니다.
  },
  created() {
    // created 훅은 컴포넌트가 생성되었을 때 실행됩니다.
    // 주로 컴포넌트가 초기화될 때 필요한 작업을 여기에 정의합니다.
  },
  beforeMount() {
    // beforeMount 훅은 컴포넌트가 DOM에 마운트되기 직전에 호출됩니다.
    // DOM에 접근할 수 있는 상태가 되기 전입니다.
  },
  mounted() {
    // mounted 훅은 컴포넌트가 DOM에 마운트된 후에 호출됩니다.
    // 이 시점부터는 DOM에 접근할 수 있게 됩니다.
  },
  beforeUnmount() {
    // beforeUnmount 훅은 컴포넌트가 파괴되기 직전에 호출됩니다.
    // 이 훅에서 리소스를 해제하거나 클린업 작업을 수행할 수 있습니다.
  },
  methods: {
    // methods 객체는 이 컴포넌트에서 사용할 메서드를 정의하는 곳입니다.
  }
}
</script>

<style scoped>
/* 이 부분은 컴포넌트의 스타일을 정의하는 곳입니다.
   "scoped" 속성을 사용하면 이 스타일은 이 컴포넌트에만 적용됩니다. */
</style>