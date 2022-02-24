<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active"
                class="nave">
      <van-tabbar-item name="one"
                       icon="home-o"
                       @click="handleClick(1)">首页</van-tabbar-item>
      <van-tabbar-item name="two"
                       icon="search"
                       @click="handleClick(3)">用户查询</van-tabbar-item>
      <van-tabbar-item name="three"
                       @click="handleClick(4)"
                       icon="flower-o">收藏</van-tabbar-item>
      <van-tabbar-item name="four"
                       @click="handleClick(2)"
                       icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      active: 'one',
    }
  },
  mounted() {},
  methods: {
    handleClick(val) {
      switch (val) {
        case 1:
          this.$router.push('/home/index')
          break
        case 2:
          this.$router.push('/home/mine')
          break
        case 3:
          this.$router.push('/home/search')
          break
        case 4:
          this.$router.push('/home/collection')
          break
        default:
          break
      }
    },
  },
}
</script>
<style lang="less" scoped>
#app {
  box-sizing: border-box;
  margin-bottom: 40px;
  height: 100%;
  width: 100%;
  position: relative;
}
.nave {
  position: fixed;
  bottom: 0;
  // background: linear-gradient(90deg, rgb(169, 119, 242), rgb(129, 112, 242));
}
/deep/.van-tabbar-item {
  // color: #fff;
}
/deep/.van-tabbar-item--active {
  background: transparent;
  color: #f38031;
}
</style>