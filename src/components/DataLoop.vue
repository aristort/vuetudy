<template>
  <h1>반복문</h1>
  <div>
    <h4>전체</h4>
    <p>{{ fruits }}</p>
  </div>
  <div>
    <h4>첫 번째 과일</h4>
    <p>{{ fruits[0] }}</p>
  </div>
  <div>
    <h4>두 번째 과일</h4>
    <p>{{ fruits[1] }}</p>
  </div>
  <div>
    <h4>세 번째 과일</h4>
    <p>{{ fruits[2] }}</p>
  </div>

  <!-- 반복문 -->
  <div v-for="fruit in fruits" :key="fruit">
    <p>{{ fruit }}</p>
  </div>
  <!-- 반복문 index -->
  <div v-for="(fruit, i) in fruits" :key="i">
    <h4>{{ i }}</h4>
    <p>{{ fruit }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: ['바나나', '사과', '포도'],
    };
  },
}
</script>

<style scoped>

</style>