<template>
  <div>
    <ETable
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :data="tableData"
      border
      :columns="columns"
      :config="tableConfig"
    >
    <template #reg_time="{ row }">
        <span>{{ row.reg_time | date }}</span>
      </template>

       <template #role_name="{ row }">
        <span>{{ row.role_name | role }}</span>
      </template>

    </ETable>
  </div>
</template>

<script>
import crud from "@/mixins/crud";
import pager from "@/mixins/pager";
import { columns, tableConfig } from "./list.js";

export default {
  mixins: [pager, crud],
  data() {
    return {
      columns,
      tableConfig,
      tableData: [],
    };
  },
  created() {
    this.load();
  },
  methods: {
    beforeInit() {
      this.loadUrl = "/user/list?type=new";
      return true;
    }
  },
};
</script>

<style></style>
