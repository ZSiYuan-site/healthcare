<template>
  <div id="app">
    <TopNav v-show="$route.meta.show" />
    <Header v-show="$route.meta.show" />
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less" scoped>
</style>
