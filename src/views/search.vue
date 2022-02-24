<template>
  <div class="login">
    <van-search class="search"
                v-model="filter.relaname"
                shape="round"
                background="linear-gradient(90deg, rgb(169, 119, 242), rgb(129, 112, 242))"
                placeholder="请输入搜索关键词" />
    <van-list :finished="finished"
              finished-text="没有更多了">
      <van-cell v-for="(item,index) in dataList"
                :key="index">
        <van-card @click="handleClick(item)"
                  :desc="item.house"
                  :title="item.realname"
                  :thumb="item.upper">
          <template #tags
                    class="m-t-20">
            <van-tag plain
                     type="danger"
                     class="m-r-20">{{item.age}}岁</van-tag>
            <van-tag plain
                     class="m-r-20"
                     type="danger">
              {{item.education}}</van-tag>
            <van-tag plain
                     class="m-r-20"
                     type="danger">
              {{item.profession}}</van-tag>
            <van-tag plain
                     class="m-r-20"
                     type="danger">
              {{item.income}}</van-tag>
            <div class="m-t-20 main">
              择偶标准：{{item.monologue?item.monologue:'合适就好'}}
            </div>
          </template>
          <template #footer>
            <van-button size="mini">查看详情</van-button>
          </template>
        </van-card>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
import { getUserList } from '@/api/index'
export default {
  name: 'login',
  data() {
    return {
      loading: false,
      finished: false,
      dataList: [],
      filter: {
        pageSize: 10,
        current: 1,
        relaname: '',
      },
    }
  },
  mounted() {
    // this.getData()
  },
  methods: {
    // onLoad() {
    //   this.filter.current = this.filter.current + 1
    //   this.getData()
    // },
    handleClick(value) {
      this.$router.push(`/home/detail?id=${value.id}`)
    },
    async getData() {
      let res = await getUserList(this.filter)
      this.dataList = [...this.dataList, ...res.data.data]
    },
  },
}
</script>
<style lang="less" scoped>
.m-r-20 {
  margin-right: 20px;
}
.m-t-20 {
  margin-top: 20px;
}
.main {
  line-height: 30px;
}
.login {
  position: relative;
  padding-top: 120px;
}
.search {
  position: fixed;
  top: 0;
  z-index: 10000;
  width: 100%;
}
</style>