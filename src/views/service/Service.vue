<template>
  <div>
    <div class="demo">
      <div>产品服务页面</div>
      <button @click="gotoTonguePage">舌诊</button>
      <button>面诊</button>
      <button>手诊</button>
      <button>穴位识别</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppService",
  methods: {
    gotoTonguePage() {
      const diagnosticType = "Tongue";
      this.$router.push(`service/${diagnosticType}`);
    },
  },
};
</script>

<style lang="less" scoped>
.demo {
  margin: 100px;
  button {
    margin: 20px;
  }
}
</style>