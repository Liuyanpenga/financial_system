<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          :default-active="getDefaultActive"
          unique-opened
          background-color="#282d2f"
          text-color="#fff"
          active-text-color="#0091ff"
        >
          <EMenu :item="item" v-for="item in userMenu" :key="item.path" />
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <EBread />
          <div>
            <EDropdown trigger="hover" :title="userInfo?.roleType" @command="onCommand" :items="dropdownArr"/>
          </div>
        </el-header>
        <el-main>
          <div class="tag-box">
            <el-tag v-for="tag in tags" :key="tag.name" @click="$router.push(tag)"  @close="tagClose(tag)" closable>
              {{ tag.title }}
            </el-tag>
          </div>
          <transition name="fade" mode="out-in">
            <keep-alive :include="getInclude" :max="30">
              <router-view />
            </keep-alive>
          </transition>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import { logout } from "@/api/user";
import { mapGetters,mapActions } from "vuex";
export default {
  name: "Layout",
  data() {
    return {
      dropdownArr: [{ key: "logout", icon: "el-icon-switch-button", text: "退出" }],
    };
  },
  methods: {
    ...mapActions('user',{
      doLogout:'doLogout'
    }),
    tagClose(tag){ 
      this.$store.commit('tags/deleteTags',tag)
    },
    async onCommand(e) {
      switch (e) {
        // 退出登录操作
        case "logout":
          // 粗暴写法
          // await logout();
          // window.sessionStorage.removeItem('token')
          // window.location.reload();

          // 交给Vuex来做
          await this.doLogout()
          // 跳转到登录页
          this.$router.push({name:'login'})
      }
    },
  },
  // 高亮
  // created() {
  //   this.defaultActive = this.$route.path;
  // },
  computed: {
    ...mapGetters("user", {
      userMenu: "userMenu",
      userInfo: "userInfo",
    }),
    ...mapGetters("tags",{
      tags:"getTags",
      getDefaultActive:"getDefaultActive"
    }),
    // 名称匹配的组件被缓存
    getInclude(){
      return this.tags.map((t) => t.name)
    }
  },
};
</script>

<style scoped>
.el-container {
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #2f3638;
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.el-header {
  background-color: #2f3638;
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
}
.tag-box{
  text-align: left;
}
.el-tag{
 margin-right: 8px;
 margin-bottom: 8px;
 cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active below version 2.1.8 */
{
    opacity: 0;
}

</style>
