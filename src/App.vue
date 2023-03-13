<template>
  <div id="app">
    <!-- <button @click="testProxy">测试代理</button> -->
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    testProxy() {
      this.$ajax.post("/api/user/login", {
          account: "admin",
          password: "approve123456.",
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
};
</script>
<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
