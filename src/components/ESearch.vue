<template>
  <el-row>
    <el-col :span="hasBtn ? 6 : 12">
      <el-input v-bind="$attrs" v-model="query" @keypress.enter.native="emitQuery"/>
    </el-col>
    <el-col v-if="hasBtn" :span="6">
      <slot name="btn" :query="query"/>
    </el-col>
  </el-row>
</template>

<script>
import { debounce } from '@/utils'

  export default {
    name:'ESearch',
    data() {
      return {
        query:''
      }
    },
    methods:{
      emitQuery:debounce(function(){
        this.$emit('setValue',this.query)
      })
    },
    computed: {
      hasBtn(){
        return this.$scopedSlots.btn
      }
    },
    watch: {
      query(){
        // 有按钮的按钮点击触发
        if(this.hasBtn) return;
        this.emitQuery()
      }
    },
  }
</script>

<style scoped>

</style>