<template>
  <!-- 底部  -->
  <footer>
    <div class="footer_main">
      <div class="footer_main_one">LOGO</div>
      <div class="footer_main_two">LOGO</div>
      <div class="footer_main_three">LOGO</div>
      <div class="footer_main_four">LOGO</div>
      <div class="footer_main_five">LOGO</div>
    </div>
    <div class="footer_copy">
      <p>
        声明：本平台部分图片来源于其他合作方，如有侵犯您的版权或隐私的，请及时联系我们，我们会尽快删除
      </p>
      <p>©2022 深延科技（北京）有限公司 版权所有 | 京ICP备2020048479号</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
// 底部
footer {
  width: 100%;
  height: 350px;
  background-color: #151515;
  position: relative;
  .footer_main {
    width: 1170px;
    // height: 580px;
    margin: 0 auto;
    padding-top: 100px;
    display: flex;
    color: #ffffff;
    justify-content: space-between;
    .footer_main_one {
      font-size: 34px;
      letter-spacing: -2px;
    }
  }
  .footer_copy {
    color: #464646;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
    margin-bottom: 40px;
    line-height: 20px;
  }
}
</style>