import router from "@/router";
export default {
  state: {
    tags: [],
    defaultActive: ''
  },
  getters: {
    getTags(state) {
      return state.tags
    },
    getExclude(state) {
      return state.excludeCache
    },
    getDefaultActive(state) {
      return state.defaultActive
    }
  },
  mutations: {
    addTags(state, tag) {
      if (state.tags.some(ele => ele.name === tag.name)) return;
      state.tags.push(tag)
    },
    deleteTags(state, tag) {
      let index = state.tags.findIndex(ele => ele.name === tag.name)
      if (index !== -1) {
        state.tags.splice(index, 1);

        if (state.tags.length === 0) {
          return router.push('/home')
        }

        if (router.currentRoute.name !== tag.name) return;
        // 路由导向
        let nexTag = state.tags[index - 1] || state.tags[index]
        nexTag && router.push(nexTag)

      }
    },
    cleanTags(state) {
      state.tags.length = 0;
    },
    changeDefaultActive(state, path) {
      state.defaultActive = path
    }
  }
}