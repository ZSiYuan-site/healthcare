<template>
  <div style="margin: 100px">
    <span>登录页面</span>

    <div class="loginForm">
      <input type="text" placeholder="用户名" v-model="loginForm.username" />
      <input type="password" placeholder="密码" v-model="loginForm.password" />
      <button style="margin: 100px" @click="login">登录</button>
    </div>

    <div class="registerForm">
      <input type="text" placeholder="用户名" />
      <input type="password" placeholder="密码" />
      <button>注册</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  created() {},
  methods: {
    // 点击登录按钮进行登录
    login() {
      this.$store.dispatch("getUserInfoAction", this.loginForm);
    },
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.user.userInfo,
    }),
  },
};
</script>

<style lang="less" scoped>
input {
  border: 1px solid;
  margin: 10px;
}
</style>