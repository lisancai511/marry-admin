<template>
  <div class="main_wrap">
    <van-cell-group inset>
      <van-image class="m-t-20 shadow"
                 :src="require('../assets/vip.png')" />

    </van-cell-group>
    <van-cell-group inset>
      <div class="m-t-30">
        <div class="m-t-20">
          <div class="title">
            选择充值套餐
          </div>
        </div>
      </div>
      <div class="price m-t-20">
        <van-row>
          <van-col span="12">
            <div @click="activePrice=1"
                 :class="activePrice==1?'wrap shadow active':'wrap shadow'">
              <div class="one">单次获取</div>
              <div class="two">9.9元/次</div>
            </div>
          </van-col>
          <van-col span="12">
            <div @click="activePrice=2"
                 :class="activePrice==2?'wrap shadow active':'wrap shadow'">
              <div class="one">7日会员</div>
              <div class="two">99元/7日</div>
            </div>
          </van-col>

        </van-row>
        <van-row class="m-t-20">
          <van-col span="12">
            <div @click="activePrice=3"
                 :class="activePrice==3?'wrap shadow active':'wrap shadow'">
              <div class="one">3个月会员</div>
              <div class="two">299元/3月</div>
            </div>
          </van-col>
          <van-col span="12">
            <div @click="activePrice=4"
                 :class="activePrice==4?'wrap shadow active':'wrap shadow'">
              <div class="one">12个月会员</div>
              <div class="two">599元/12月</div>
            </div>
          </van-col>
        </van-row>
        <div class="footer">
          <van-button class="btn"
                      color="linear-gradient(to bottom right, #d3b581, #e5d0b1)"
                      round
                      block
                      type="primary">确认开通</van-button>
        </div>
        <div class="note">本平台只是为用户有偿提供微信联系方式（VIP会员每日获取上限次数为5次），不保证用户的完全真实性，请仔细阅读协议，慎重支付。若用户已经支付平台服务费用不予退回</div>

      </div>
    </van-cell-group>
  </div>
</template>
<script>
import { setRem } from '@/utils'
export default {
  name: 'home',
  data() {
    return {
      activePrice: '4',
    }
  },
  mounted() {
    setRem()
  },
  methods: {},
}
</script>
<style scoped lang="less">
.main_wrap {
  height: 100%;
  width: 100%;
  /* background-image: url('~@/assets/vip.png');
  background-size: 100% auto;
  background-repeat: no-repeat; */
  /* background: radial-gradient(
      92.81% 48.44% at -24.53% -16.02%,
      rgb(60, 237, 255) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      75.78% 68.16% at 56.74% -24.02%,
      rgb(242, 253, 82) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      160.86% 46.39% at 177.14% -15.62%,
      rgb(221, 69, 69) 9.06%,
      rgba(255, 255, 255, 0) 100%
    ),
    rgb(247, 250, 252); */
}
.title {
  font-size: 30px;
  font-weight: 600;
}
.price {
}
// .wrap {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
.wrap {
  margin: 10px 20px 10px;
  padding: 30px;

  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: #fff;
  div {
    line-height: 28px;
  }
  .one {
    font-size: 16px;
    color: #a39357;
  }
  .two {
    font-size: 14px;
    color: #d1c1b1;
  }
}
.shadow {
  box-shadow: 0 2px 12px 0 #ccc;
}
.active {
  background: linear-gradient(to bottom right, #d3b581, #e5d0b1);
  .one {
    color: #6b5a3e;
  }
  .two {
    color: #7e694e;
  }
}
.note {
  margin-top: 29px;
  text-align: center;
  padding: 0 40px;
  font-size: 12px;
  line-height: 28px;
  color: #dcdee0;
}
.footer {
  width: 100%;
  margin: 20px 0 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .btn {
    width: 60%;
  }
}
</style>