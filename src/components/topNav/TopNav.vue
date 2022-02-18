<template>
  <!-- 最顶部的导航条 -->
  <div class="top_nav_wrap">
    <div class="top_nav_main">
      <div class="top_nav_main_left">
        <div class="mail_icon"></div>
        <div class="top_nav_mail">Mail: xxxxxxxxxx@qq.com</div>
        <div class="line"></div>
        <div class="phone_icon"></div>
        <div class="top_nav_phone">phone：xxxxx</div>
      </div>
      <div class="top_nav_main_right">
        <div></div>
        <div class="line"></div>
        <div><span class="iconfont icon-facebookfacebook11"></span></div>
        <div class="line"></div>
        <div><span class="iconfont icon-tuitetwitter43"></span></div>
        <div class="login_box" @click="login">注册/登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  methods:{
    login(){
      this.$router.push('/login')
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../common/less/mixins.less";
// 最顶部的导航条
.top_nav_wrap {
  // width: 1920px;
  width: 100%;
  height: 55px;
  //   background-color: red;
  .top_nav_main {
    width: 1170px;
    height: 55px;
    margin: 0 auto;
    // background: red;
    display: flex;
    justify-content: space-between;
    .top_nav_main_left {
      .mail_icon {
        width: 18px;
        height: 14px;
        background: url("./image/mail_icon.png") no-repeat;
        margin-right: 10px;
      }
      .phone_icon {
        width: 15px;
        height: 15px;
        background: url("./image/phone_icon.png") no-repeat;
        margin: 0 10px 0 20px;
      }
      line-height: 55px;
      display: flex;
      align-items: center;
    }
    .top_nav_main_right {
      display: flex;
      align-items: center;
      .login_box {
        width: 160px;
        height: 55px;
        background-image: @themeColor;
        line-height: 55px;
        text-align: center;
        font-size: 14px;
        color: #ffffff;
        font-family: Jost-SemiBold;
        margin-left: 15px;
      }
    }
  }
}

// 最顶部的一条竖线
.line {
  width: 1px;
  height: 55px;
  background-color: #dcdcdc;
  margin: 0 15px;
}
</style>