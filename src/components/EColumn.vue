<script>
export default {
  name: "EColumn",
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  methods: {
    // 渲染表头列（含多级)
    renderColumn(column,scopedSlots) {
      return (
        <el-table-column label={column.label} prop={column.prop} width={column.width} align={column.align} scopedSlots={scopedSlots}>
          {
            column?.children?.length > 0 &&
            column.children.map((c) => {
              return this.renderColumn(c);
            })
          }
        </el-table-column>
      );
    },
  },

  render() {
    const { item: column, $scopedSlots:tableSlots } = this;
    let scopedSlots
    // 从上传下来的插槽函数
    let slots = tableSlots[column.prop]
    if(slots){
      // 把内部组件数据暴露给外部调用者，然后外部调用者进行定制或加工
      scopedSlots = {
        default:(prop) => {
          // 通过 prop 就可以访问组件定义时的作用域插槽的数据
          return slots(prop)
        }
      }
    }
    return this.renderColumn(column,scopedSlots);
  },
};
</script>

<style scoped></style>
