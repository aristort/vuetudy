<template>
  <h1>조건문</h1>
  <div>
    <!-- v-if는 조건이 true일 때만 해당 엘리먼트를 렌더링합니다.
         여기서는 항상 true이므로 '보임'이라는 텍스트가 항상 표시됩니다. -->
    <h4 v-if="true">보임</h4>
    <!-- v-if는 조건이 false일 때 해당 엘리먼트를 렌더링하지 않습니다.
         여기서는 항상 false이므로 '안보임'이라는 텍스트는 표시되지 않습니다. -->
    <h4 v-if="false">안보임</h4>
  </div>
  <div>-------------------------------------</div>
  <div>
    <!-- v-if 디렉티브는 조건이 true일 때만 해당 엘리먼트를 렌더링합니다.
         여기서는 isOnIf가 true일 때만 이 엘리먼트가 화면에 표시됩니다. -->
    <h4 v-if="isOnIf">============v-if=================</h4>
    <button @click="toggleIsOnIf">v-if 토글버튼</button>
  </div>
  <br>
  <div>-------------------------------------</div>
  <div>
    <!-- v-show 디렉티브는 조건이 true일 때 엘리먼트를 보이고, false일 때 숨깁니다.
         다만, v-if와는 달리 DOM에서 완전히 제거되지 않고, display 속성만 변경됩니다. -->
    <h4 v-show="isOnShow">============v-show=================</h4>
    <button @click="toggleIsOnShow">v-show 토글버튼</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOnIf: false,
      isOnShow: false,
    };
  },
  methods: {
    toggleIsOnIf() {
      this.isOnIf = !this.isOnIf;
    },
    toggleIsOnShow() {
      this.isOnShow = !this.isOnShow;
    }
  }
}
</script>

<style scoped>

</style>