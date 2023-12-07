<script setup lang='ts'>
import Menu from './components/Menu.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside >
        <Menu />
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </div>
</template>

<style lang='scss' scoped>
.common-layout{
  width:100%;
  height:100%;
}
.el-container{
  height:100%;
  width:100%;
}
// .el-aside{
//   height:100%;
// }
</style>