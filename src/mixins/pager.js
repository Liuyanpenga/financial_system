import { deepClone } from "@/utils"

export default {
  data() {
    return {
      pager: {
        currentPage: 1,
        pageSizes: [10, 20, 30, 40],
        pageSize: 10,
        layout: "total, sizes, prev, pager, next, jumper",
        total: 100,
        query: ''
      }
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pager.pageSize = val
      this.pager.currentPage = 1
      this.load()
    },
    handleCurrentChange(val) {
      this.pager.currentPage = val
      this.load()
    },
    setTotal(total) {
      this.pager.total = total
    },
    setQuery(query) {
      this.pager.query = query
      this.pager.currentPage = 1
      this.load()
    }
  },
  computed: {
    // 前端数据
    frontPager() {
      return deepClone(this.$data.pager)
    },
    // 后端参数
    apiPager() {
      let params = {
        pageNo: this.pager.currentPage,
        pageSize: this.pager.pageSize,
      }
      // 附加查询参数 name
      if (this.pager.query && this.pager.query.trim() !== '') {
        params.name = this.pager.query
      }
      return params
    }
  },
}