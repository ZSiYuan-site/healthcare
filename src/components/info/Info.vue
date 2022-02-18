<template>
  <div style="margin: 100px">
    <span>舌诊的信息页面</span>
    <button style="margin: 100px" @click="gotoApiInterface">Api文档</button>
  </div>
</template>

<script>
export default {
  name: "Info",
  methods: {
    gotoApiInterface() {
      const apiDiagnosticType = "Tongue";
      this.$router.push(`/service/apIInterface/${apiDiagnosticType}`);
    },
  },
};
</script>

<style lang="less" scoped>
</style>