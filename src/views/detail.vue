<template>
  <div class="main">
    <div class="logo">

    </div>
    <div class="photo">
      <van-image class="headImg one"
                 width="120"
                 height="120"
                 :src="userInfo.headimgurl" />
      <van-image class="headImg"
                 width="80"
                 height="80"
                 :src="userInfo.upper" />
      <van-image class="headImg"
                 width="80"
                 height="80"
                 :src="userInfo.body" />
    </div>
    <div class="title">
      <div class="left">
        <div class="left_title">{{userInfo.realname}}</div>
        <div class="m-t-10">
          <van-tag class="m-r-20"
                   color="#b4b6fa">{{userInfo.profession}}</van-tag>
          <van-tag color="#ffb8c4">{{userInfo.age}}岁</van-tag>
        </div>
      </div>
      <div class="right"></div>
    </div>
    <div class="main_wrap">
      <div class="wrap">
        <div class="bgTitle">个人资料</div>
        <div class="tag_wrap">
          <div class="tag">
            {{userInfo.sex}}
          </div>
          <div class="tag">
            {{userInfo.profession}}
          </div>
          <div class="tag">
            {{userInfo.weight}}
          </div>
          <div class="tag">
            {{userInfo.smoke}}
          </div>
          <div class="tag">
            {{userInfo.marry_date}}
          </div>
          <div class="tag">
            {{userInfo.height}}
          </div>
          <div class="tag">
            {{userInfo.education}}
          </div>
          <div class="tag">
            {{userInfo.marriage}}
          </div>
          <div class="tag">
            {{userInfo.age}}岁
          </div>
        </div>
      </div>
      <div class="wrap m-t-20">
        <div class="bgTitle">内心独白</div>
        <div class="tag_wrap">
          <span>
            {{userInfo.monologue?userInfo.monologue:content}}
          </span>

        </div>
      </div>
    </div>
    <div class="zhanwei"></div>
    <div class="footer">
      <van-button class="btn"
                  color="linear-gradient(0deg, #271a80, #3542b1)"
                  type="primary"
                  round
                  size="large">获取微信</van-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {
      userInfo: {
        id: 211156,
        unionid: '',
        nickname: '',
        sex: '女',
        language: '',
        area: '管城回族区',
        city: '郑州市',
        province: '河南省',
        country: '',
        headimgurl:
          'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLpSwG8Qg23TbKz9f66EQhH3lI6sze5T9IAZbRL67OicPnMo1pGkT9jdibs9IjOE3Y7ENSujKaXPS0g/132',
        upper:
          'http://oss.yijiehunlian.com/upload_zz/uploads/base/upper_oVyGO6sl9DktOjUisMbWVr51F3U0.jpg?x-oss-process=image/resize,m_fill,h_200,w_200',
        body: 'http://oss.yijiehunlian.com/upload_zz/uploads/base/body_oVyGO6sl9DktOjUisMbWVr51F3U0.jpg?x-oss-process=image/resize,m_fill,h_200,w_200',
        monologue: '',
        avatar:
          'http://oss.yijiehunlian.com/upload_zz/uploads/base/avatar_oVyGO6sl9DktOjUisMbWVr51F3U0.jpg?x-oss-process=image/resize,m_fill,h_200,w_200',
        complaint_num: null,
        deleted: 0,
        recommend: 1,
        subscribe: 0,
        want_child: null,
        profession: '电商',
        house: '有房-有车',
        car: null,
        born_province: '',
        born_city: '',
        born_area: '',
        weight: '50kg',
        bodily: null,
        smoke: '不抽烟不喝酒',
        drink: null,
        constellation: null,
        nation: '汉族',
        marry_date: '一年内结婚',
        create_time: 1641184823,
        update_time: null,
        rec_time: 1645403769,
        birthday: '1988-04-19',
        work_data: '河南省,郑州市,管城回族区',
        height: '165cm',
        income: '5K-8K',
        education: '大专',
        marriage: '未婚',
        have_child: null,
        born_data: '河南省,郑州市,中牟县',
        age: 33,
        tousu: 0,
        realname: '孟金萍',
        mobile: null,
        uname: null,
        vip_start: null,
        vip_end: null,
        vip: null,
        maxcouple_age: 37,
        mincouple_age: 34,
        couple_marriage: '未婚',
        status: '1',
        show_counts: 2,
        action_conuts: 13,
        external_get: 16,
        today_getwx: 0,
        all_getwx: 0,
      },
      content:
        '本人非颜控，不是外貌协会，偏爱年纪大点会照顾人的大叔型。我爱运动爱旅游爱美食，稀饭舒适的家居，希望遇到一个三观合，阅历丰富的你，带我一起游览这个世界的美好，不问过往，只争未来！ 自我感觉太好觉得家里有王位要继承的请绕道；妈宝男凤凰男请绕道；小肚鸡肠斤斤计较的请绕道；生活习惯不好不会自洁的（比如家里乱七八糟不会整理不爱干净的，本人轻微洁癖）请绕道；爱运动坚持健身的加分；喜欢摄影会做饭好吃的加分；会滑雪潜水等户外活动的加分；有爱心喜欢小动物的加分；唱歌好听的也可以加点分，其他想到加分减分的聊到再补充。',
    }
  },
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
}
.logo {
  background-image: url('~@/assets/title.jpg');
  width: 100%;
  height: 200px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.photo {
  padding: 10px;
}
.headImg {
  margin: 0 20px 0 0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px 0 rgb(35 35 35 / 20%);
}
.one {
  margin-top: -70px;
  margin-left: 20px;
}
.title {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  .left {
    .left_title {
      font-size: 32px;
      font-weight: 700;
    }
  }
}
.main_wrap {
  background: #f7f8fa;
  width: 100%;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  .wrap {
    background: #fff;
    border-radius: 20px;
    padding: 10px;
    box-sizing: border-box;
    .bgTitle {
      margin-top: 10px;
    }
    .bgTitle::before {
      content: '..';
      width: 20px;
      background: linear-gradient(0deg, #271a80, #3542b1);
      height: 100%;
      border-radius: 5px;
      margin-right: 6px;
    }
    .tag_wrap {
      // display: flex;
      margin-top: 30px;
      margin-bottom: 20px;
      .tag {
        display: inline-block;
        padding: 10px;
        margin-right: 10px;
        margin: 5px 10px 5px 0;
        border-radius: 10px;
        color: #666978;
        background-color: #f2f3ff;
      }
      span {
        color: #666978;
        line-height: 22px;
      }
    }
  }
}
.zhanwei {
  height: 140px;
  width: 100%;
  background: #f7f8fa;
}
.footer {
  position: fixed;
  height: 140px;
  bottom: 0;
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  width: 80%;
}
</style>