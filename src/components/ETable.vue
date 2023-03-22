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
    }
  },
  methods:{
    renderTable() {
      const { $attrs:attrs, columns, config: { multipleSelection, index }, $scopedSlots:tableSlots} = this;
      // jsx指令写法 {...{directives:directives}}
      const directives = [{name:'drag'}]
      
      return (
        <el-table attrs={attrs}  {...{directives}}>
          // 渲染索引情况
          {index && <el-table-column label="序号" type="index" width="55" align="center"/>}
          // 渲染多选情况
          {multipleSelection && <el-table-column type="selection" width="55" align="center"/>}
          // 渲染列
          {columns && columns.map(col=>{
            return <EColumn item={col} scopedSlots={tableSlots}/>
          })}
        </el-table>
      );
    },
  },
  render() {
    return this.renderTable();
  },
};
</script>

<style scoped></style>
