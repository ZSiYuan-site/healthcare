<template>
  <div>
    <div class="news_content">
      <div class="news_content_left">
        <div class="news_content_left_tabs">
          <ul>
            <li><a href="#">精彩活动</a></li>
            <li><a href="#">精彩活动</a></li>
            <li><a href="#">精彩活动</a></li>
          </ul>
        </div>

        <div class="news_content_left_subTitle">
          <ul>
            <li><a href="#">全部</a></li>
            <li><a href="#">全部</a></li>
            <li><a href="#">全部</a></li>
            <li><a href="#">全部</a></li>
            <li><a href="#">全部</a></li>
            <li><a href="#">全部</a></li>
            <li><a href="#">全部</a></li>
            <li><a href="#">全部</a></li>
            <li><a href="#">全部</a></li>
            <li><a href="#">全部</a></li>
            <li><a href="#">全部</a></li>
            <li><a href="#">全部</a></li>
            <li><a href="#">全部</a></li>
          </ul>
        </div>

        <div class="news_content_left_info_wrap">
          <div class="news_content_left_info">
            <div class="news_content_left_info_title">百度人脸实名认证</div>
            <div class="news_content_left_info_content">
              尊敬的百度智能云用户，
              感谢您长期以来对百度OCR的支持与关注！近日，出院小结识别新品上线，可结构化识别全国各地出院小结，返回10个关键字段信息，全面助力保险理赔智能化。申请即可免费试用，欢迎体验！
            </div>
            <div class="news_content_left_info_date">
              <span>发布日期：</span>
              <span>2022-01-25 07:56</span>
            </div>
          </div>
          <div class="news_content_left_info">
            <div class="news_content_left_info_title">百度人脸实名认证</div>
            <div class="news_content_left_info_content">
              尊敬的百度智能云用户，
              感谢您长期以来对百度OCR的支持与关注！近日，出院小结识别新品上线，可结构化识别全国各地出院小结，返回10个关键字段信息，全面助力保险理赔智能化。申请即可免费试用，欢迎体验！
            </div>
            <div class="news_content_left_info_date">
              <span>发布日期：</span>
              <span>2022-01-25 07:56</span>
            </div>
          </div>
          <div class="news_content_left_info">
            <div class="news_content_left_info_title">百度人脸实名认证</div>
            <div class="news_content_left_info_content">
              尊敬的百度智能云用户，
              感谢您长期以来对百度OCR的支持与关注！近日，出院小结识别新品上线，可结构化识别全国各地出院小结，返回10个关键字段信息，全面助力保险理赔智能化。申请即可免费试用，欢迎体验！
            </div>
            <div class="news_content_left_info_date">
              <span>发布日期：</span>
              <span>2022-01-25 07:56</span>
            </div>
          </div>
        </div>
      </div>
      <div class="news_content_right">
        <h3>小编推荐</h3>
        <ul>
          <li><a href="#">刷屏的"1620"有多难？3D+AI带你看懂！</a></li>
          <li><a href="#">刷屏的"1620"有多难？3D+AI带你看懂！</a></li>
          <li><a href="#">刷屏的"1620"有多难？3D+AI带你看懂！</a></li>
          <li><a href="#">刷屏的"1620"有多难？3D+AI带你看懂！</a></li>
          <li><a href="#">刷屏的"1620"有多难？3D+AI带你看懂！</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News",
};
</script>

<style lang="less" scoped>
.news_content {
  display: flex;
  width: 1170px;
  // height: 300px;
  // background: red;
  margin: 100px auto;
  .news_content_left {
    // flex: 9;
    width: 870px;
    // height: 200px;
    // background: greenyellow;
    padding-right: 50px;
    .news_content_left_tabs {
      > ul {
        height: 40px;
        border-bottom: 1px solid #f5f5f5;
        li {
          padding: 5px;
          float: left;
          font-size: 20px;
          font-weight: 500;
          margin-right: 60px;
          height: 40px;
          border-bottom: 2px solid;
        }
      }
    }
    .news_content_left_subTitle {
      margin-top: 20px;
      > ul {
        li {
          padding: 5px;
          float: left;
          margin-right: 50px;
          margin-top: 20px;
        }
      }
    }
    .news_content_left_info_wrap {
      .news_content_left_info {
        padding-top: 50px;
        clear: both;
        .news_content_left_info_title {
          font-size: 20px;
          color: #036fe2;
        }
        .news_content_left_info_content {
          padding: 20px 0;
          line-height: 25px;
        }
        .news_content_left_info_date {
        }
      }
    }
  }
  .news_content_right {
    width: 300px;
    h3 {
      margin: 10px 0 40px 0;
      font-size: 20px;
    }
    > ul {
      li {
        height: 50px;
        a {
          color: #090d0e;
        }
      }
    }
  }
}
</style>