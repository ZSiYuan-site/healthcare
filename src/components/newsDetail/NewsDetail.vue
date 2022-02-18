<template>
  <div class="news_detail_wrap">
    <div class="news_detail_left">
      <div class="news_detail_left_title">
        百度AICA再添57位“首席AI架构师”，人工智能与产业场景结合愈发深入
      </div>
      <div class="news_detail_left_date">
        <span
          >发布日期：<span class="publish_date">2022-01-27 02:34</span></span
        >

        <span>浏览量：<span class="page_view">246</span>次</span>
      </div>
      <div class="news_detail_left_content">
        近日，由深度学习技术及应用国家工程实验室与百度联合发起的 AICA｜首席 AI
        架构师培养计划第五期正式结业。经过为期半年的学习，最终来自中国石油、中国四维测绘、中国石化、霍尼韦尔、中国海油、法国电信、中国东方航空、中国铁塔等企业的57位学员顺利通过答辩获得结业证书。截至目前，累计有247名首席
        AI 架构师从 AICA 毕业深入到产业界，成为中国产业智能化变革的中坚力量。
      </div>
    </div>
    <div class="news_detail_right">
      <div class="news_detail_right_title">相关动态</div>
      <div class="news_detail_right_list">
        <ul>
          <li><a href="#">飞桨中国行——生产制造专场</a></li>
          <li><a href="#">飞桨中国行——生产制造专场</a></li>
          <li><a href="#">飞桨中国行——生产制造专场</a></li>
          <li><a href="#">飞桨中国行——生产制造专场</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsDetail",
};
</script>

<style lang="less" scoped>
.news_detail_wrap {
  width: 1170px;
  height: 300px;
  // background: red;
  margin: 50px auto;
  display: flex;
  .news_detail_left {
    width: 870px;
    padding-right: 50px;
    .news_detail_left_title {
      font-size: 34px;
      color: #000;
      line-height: 45px;
    }
    .news_detail_left_date {
      margin-top: 20px;
      .publish_date {
        margin-right: 25px;
      }
    }
    .news_detail_left_content {
      margin-top: 50px;
      line-height: 30px;
    }
  }

  .news_detail_right {
    width: 300px;
    padding-top: 10px;
    .news_detail_right_title {
      font-size: 16px;
      margin-bottom: 40px;
    }
    .news_detail_right_list {
      > ul {
        li {
          height: 50px;
          a {
            color: #333;
          }
        }
      }
    }
  }
}
</style>