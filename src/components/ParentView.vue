<template>
  <h1>부모화면</h1>
  <p>자식에게 줄 이름: {{ name }}</p>
  <p>자식에게 줄 과일: {{ fruit }}</p>
  <p>=====================================</p>
  <child-view></child-view>
  <p>=====================================</p>
  <child-view2 :name="name" @custom-event="fromChildClick"></child-view2>
  <p>=====================================</p>
  <child-view3 v-model:fruit="fruit"></child-view3>
</template>

<script>
import ChildView from "@/components/ChildView.vue";
import ChildView2 from "@/components/ChildView2.vue";
import ChildView3 from "@/components/ChildView3.vue";

export default {
  components: {
    ChildView3,
    ChildView2,
    ChildView,
  },
  data() {
    return {
      name: '홍길동',
      fruit: '바나나',
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
    fromChildClick() {
      alert("자식 창에서 클릭 누름");
    }
  }
}
</script>

<style scoped>

</style>