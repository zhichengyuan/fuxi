<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app .el-input .el-input__inner,#app .el-textarea .el-textarea__inner,#app .is-disabled .el-input__inner{
  color:#666;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}
#app .el-form-item{
  margin-bottom: 16px;
}
#app .el-table td,#app .el-table th{
  color: #606266;
  padding:9px 0;
}
body .el-table th.gutter{
  display: table-cell !important;
}
body .el-table colgroup.gutter{
  display: table-cell !important;
}
</style>
