<script>
export default {
  name: "ETable",
  props: {
    columns: {
      type: Array,
      required: true,
    },
    config: {
      type: Object,
      required: true,
    },
    usePage: {
      type: Boolean,
    },
    pager: {
      type: Object,
      default: () => ({}),
    }
  },
  methods: {
    renderTable() {
      const { $attrs: attrs, columns, config: { multipleSelection, index }, $scopedSlots: tableSlots, showLoading} = this;
      console.log(showLoading)
      // jsx指令写法 {...{directives:directives}}
      const directives = [{ name: "drag" }];
      return (
        <el-table attrs={attrs} {...{ directives }}>
          // 渲染索引情况
          {index && (
            <el-table-column label="序号" type="index" width="55" align="center" />
          )}
          // 渲染多选情况
          {multipleSelection && (
            <el-table-column type="selection" width="55" align="center" />
          )}
          // 渲染列
          {columns &&
            columns.map((col) => {
              return <EColumn item={col} scopedSlots={tableSlots} />;
            })}
        </el-table>
      );
    },
    // 渲染分页
    renderPage() {
      const { pager } = this
      return (
        <el-pagination
          onSize-change={(e) => this.$emit('size-change',e)}
          onCurrent-change={(e) => this.$emit('current-change',e)}
          currentPage={pager.currentPage}
          pageSizes={pager.currentPages}
          pageSize={pager.pageSize}
          layout={pager.layout}
          total={pager.total}
        ></el-pagination>
      );
    },
  },
  render() {
    return (
      <div>
        {this.renderTable()}
        {this.usePage && this.renderPage()}
      </div>
    );
  },
};
</script>

<style scoped></style>
