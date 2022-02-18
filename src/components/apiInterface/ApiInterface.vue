<template>
  <div class="ApiInterface">
    <div class="goback">
      <div class="goback_main">
        <span>icon </span>
        <span class="gobackText"> 返回</span>
      </div>
    </div>
    <div class="apiIntroduce">
      <div class="apiIntroduce_main">
        <div class="apiIntroduce_main_left">
          <ul>
            <li><a href="#">产品介绍</a></li>
            <li><a href="#">购买指南</a></li>
            <li><a href="#">API文档</a></li>
          </ul>
        </div>
        <div class="apiIntroduce_main_right">
          <div class="product_presentation">
            <div class="product_presentation_title largeTitle">产品简介</div>
            <div class="product_presentation_content">
              以海量的舌象大数据为基础，研究了舌象的预处理、舌象颜色代表色的提取、舌象的颜色和纹理特征的提取、舌象的苔质分割以及舌体图像的分类模型的设计，来辅助诊断及鉴别身体健康状况，并给出相应的病症调理方案。
            </div>
          </div>
          <div class="purchase_guide largeTitle">
            <div class="purchase_guide_title largeTitle">购买指南</div>
            <div class="purchase_guide_content"></div>
          </div>
          <div class="api_document largeTitle">
            <div class="api_document_title largeTitle">API文档</div>
            <div class="api_document_content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApiInterface",
};
</script>

<style lang="less" scoped>
.ApiInterface {
  background: #f5f5f5;
}

// 上边的返回
.goback {
  .goback_main {
    padding-left: 10px;
    width: 1170px;
    height: 60px;
    background: #fff;
    margin: 0 auto;
    line-height: 60px;
    .gobackText {
      background-image: linear-gradient(269deg, #0985f9 0%, #6809dc 100%),
        linear-gradient(#0aadeb, #0aadeb);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      /*需要文字透明*/
    }
  }
}
// api文档说明
.apiIntroduce {
  .apiIntroduce_main {
    width: 1170px;
    margin: 0 auto;
    margin-top: 30px;
    height: 1000px;
    // background: green;
    display: flex;
    .apiIntroduce_main_left {
      width: 200px;
      background: #fff;
      > ul {
        font-size: 18px;
        > li {
          height: 60px;
          text-align: center;
          line-height: 60px;
          > a {
            background-image: linear-gradient(269deg, #0985f9 0%, #6809dc 100%),
              linear-gradient(#0aadeb, #0aadeb);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            /*需要文字透明*/
          }
        }
      }
    }
    .apiIntroduce_main_right {
      padding: 0px 30px 30px 30px;
      margin-left: 25px;
      background: #fff;
      flex: 1;
      .product_presentation {
        margin-top: 50px;
        .product_presentation_title {
          padding: 15px 0;
          border-bottom: 1px solid #ebebeb;
        }
      }
      .purchase_guide {
        margin-top: 50px;
        .purchase_guide_title {
          padding: 15px 0;
          border-bottom: 1px solid #ebebeb;
        }
      }
      .api_document {
        margin-top: 50px;
        .api_document_title {
          padding: 15px 0;
          border-bottom: 1px solid #ebebeb;
        }
      }
    }
  }
}

// 最大的那个标题文字
.largeTitle {
  font-size: 30px;
  font-weight: 700;
}
</style>