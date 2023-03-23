import req from "@/utils/request";
export default {
  data() {
    return {
      showLoading:false
    }
  },
  methods: {
    // 请求开关
    beforeInit(){
      return false
    },
    async load() {
      if(!this.beforeInit()) return;
      // 请求数据
      this.showLoading = true
      let res = await req(this.loadUrl, {
        params: this.apiPager
      });
      this.showLoading = false
      // 放数据
      this.tableData = res.data.data;
      // 数据总数 
      this.setTotal(res.data.pager.rows)
    }
  },
}