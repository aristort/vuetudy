<template>
  <h1>데이터바인딩</h1>
  <div>
    <h4>바나나</h4>
    <p>50 만원</p>
  </div>
  <div>
  <!-- 데이터바인딩 -->
  <!-- {{ 데이터이름 }} -->
    <h4>{{ fruit }}</h4>
    <p>{{ price }} 만원</p>
  </div>
  <!-- 속성에 데이터바인딩 -->
  <div :style="style">스타일</div>
</template>

<script>
export default {
  data() {
    return {
      fruit: '바나나',
      price: 50,
      style: 'color: red',
    };
  },
}
</script>

<style scoped>

</style>