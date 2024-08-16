<template>
  <h1>이벤트핸들러</h1>
  <div>
    <h4>숫자: {{ count }}</h4>
    <button @click="upCount">숫자 증가 버튼</button>
    <button @click="downCount">숫자 감소 버튼</button>
  </div>
  <div>-------------------------------------</div>
  <div v-for="fruit in fruits" :key="fruit">
    <h4>{{ fruit }}</h4>
    <p>가격: {{ price }}원</p>
    <button @click="upPrice">가격 증가 버튼</button>
    <button @click="downPrice">가격 감소 버튼</button>
  </div>
  <br>
  <div>-------------------------------------</div>
  <div v-for="(fruit, i) in fruits" :key="fruit">
    <h4>{{ fruit }}</h4>
    <p>가격: {{ prices[i] }}원</p>
    <button @click="upPrices(i)">가격 증가 버튼</button>
    <button @click="downPrices(i)">가격 감소 버튼</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      price: 0,
      fruits: ['바나나', '사과', '포도'],
      prices: [0, 0, 0]
    };
  },
  methods: {
    upCount() {
      this.count += 1;
    },
    downCount() {
      this.count -= 1;
    },
    upPrice() {
      this.price += 1000;
    },
    downPrice() {
      this.price -= 1000;
    },
    upPrices(i) {
      this.prices[i] += 1000;
    },
    downPrices(i) {
      this.prices[i] -= 1000;
    }
  }
}
</script>

<style scoped>

</style>