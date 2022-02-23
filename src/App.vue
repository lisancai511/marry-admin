<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  mounted() {},
}
</script>
<style lang="less" scoped>
#app {
  box-sizing: border-box;
  margin-bottom: 40px;
  height: 100%;
  width: 100%;
}
</style>