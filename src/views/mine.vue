<template>
  <div class="main">
    <van-cell-group>
      <van-row class="header"
               justify="center"
               align="center">
        <van-col>
          <van-image round
                     width="80px"
                     height="80px"
                     src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
        </van-col>
        <van-col class="content m-t-20"
                 offset="1">
          <!-- <div>
            <div class="content blod">名称：韦先生</div>
            <div class="content m-t-20">账号：15395833823</div>
            <div class="content m-t-20">心动指数：
              <van-rate v-model="value"
                        icon="like"
                        readonly
                        size="14px"
                        void-icon="like-o" />
            </div>
          </div> -->
          <div class="login">
            <van-button class="btn"
                        round
                        @click="goToLogin"
                        plain>登录</van-button>
          </div>
        </van-col>
      </van-row>
    </van-cell-group>
    <div class="m-t-40">
      <van-cell title="我的相亲卡"
                is-link />
      <van-cell title="我的收藏"
                is-link />
      <van-cell title="我的VIP"
                is-link />
      <van-cell title="联系客服"
                is-link />

    </div>

  </div>
</template>
<script>
import { setRem } from '@/utils'
export default {
  name: 'home',
  data() {
    return {
      value: 1,
    }
  },
  mounted() {
    setRem()
  },
  methods: {
    goToLogin() {},
  },
}
</script>
<style lang="less" scoped>
.main {
  background: #fafafa;
  width: 100%;
  height: 100%;
}
.header {
  padding: 60px;
  display: flex;
  align-content: center;
  background-image: url('~@/assets/title.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  color: #fff;
}
.content {
  font-size: 20px;
}
.blod {
  font-weight: 700;
}
.m-t-40 {
  margin-top: 40px;
}
.login {
  width: 400px;
  .btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>