<template>
  <!-- 头部 -->
  <div class="header_wrap">
    <div class="header_main">
      <div class="header_main_left">LOGO</div>
      <div class="header_main_center">
        <ul>
          <li v-for="(item, index) in headerNav" :key="index">
            <router-link
              :to="item.path"
              :class="{ header_active: $route.path.indexOf(item.path) !== -1 }"
              >{{ item.navName }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="header_main_right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      headerNav: [
        {
          navName: "首页",
          path: "/home",
        },
        {
          navName: "产品服务",
          path: "/service",
        },
        {
          navName: "解决方案",
          path: "/solution",
        },
        {
          navName: "资讯",
          path: "/news",
        },
        {
          navName: "关于我们",
          path: "/related",
        },
      ],
    };
  },
  created() {},
  methods: {},
  computed: {},
};
</script>

<style lang="less" scoped>
@import "../../common/less/mixins.less";
// 头部
.header_wrap {
  // width: 1920px;
  height: 113px;
  background: #1d1d1d;
  // width: 100%;
  .header_main {
    width: 1170px;
    height: 113px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    color: #fff;
    border-bottom: 1px solid #2a2b2e;
    .header_main_left {
      font-size: 40px;
      line-height: 113px;
    }
    .header_main_center {
      padding: 0 0 0 350px;
      ul {
        line-height: 113px;
        li {
          margin: 0 20px;
          height: 113px;
          width: 65px;
          float: left;
          text-align: center;
          a {
            color: #fff;
          }
        }
      }
    }
    .header_main_right {
      width: 52px;
      height: 52px;
      background: #fff;
      border-radius: 50%;
      margin: auto 0;
    }
  }
}

// header导航栏----文字激活样式
.header_active {
  background-image: linear-gradient(269deg, #0985f9 0%, #6809dc 100%),
    linear-gradient(#0aadeb, #0aadeb);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /*需要文字透明*/
}

// header导航栏激活时---下边的线条
.active_border_bottom {
  border-bottom: 1px solid;
  // border-image: linear-gradient(red, yellow) 10;
  border-image: linear-gradient(269deg, #0985f9 0%, #6809dc 100%) 10;
}
</style>