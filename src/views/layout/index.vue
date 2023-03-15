<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          :default-active="defaultActive"
          unique-opened
          background-color="#282d2f"
          text-color="#fff"
          active-text-color="#64c5b1"
        >
          <EMenu :item="item" v-for="item in userMenu" :key="item.path" />
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <EBread />

          <div>admin</div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Layout",
  created() {
    this.defaultActive = this.$route.path;
  },
  computed: {
    ...mapGetters("user", {
      userMenu: "userMenu",
    }),
  },
};
</script>

<style scoped>
.el-container {
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-header {
  background-color: #64c5b1;
}
.el-aside {
  background-color: #282d2f;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-menu {
  border-right: none;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
