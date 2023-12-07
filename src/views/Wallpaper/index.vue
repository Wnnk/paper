<script setup lang='ts'>
import { reactive } from 'vue'
const paper = reactive([
  {
    path:new URL('../../assets/img/pic1.jpg',import.meta.url).href
  }
])
</script>

<template>
  <div class="wallpaper">
    <el-container>
      <el-main>
        <img :src="paper[0].path"/> 
      </el-main>
      <el-footer>
        <el-button class="paperBtn" round>设为壁纸</el-button>
      </el-footer>
    </el-container>
  </div>
</template>

<style lang='scss' scoped>
.wallpaper {
  width: 100%;
  height: 100%;
  // background-color: #000;
}
.el-main{
  display:flex;
  justify-content: center;
  img{
    width: 100%;
    height: 100%;
  }
}
.el-footer{
  display:flex;
  justify-content:center;
  background-color:rgba(107, 105, 105, 0.667);
}
.el-button{
  width:90%;
  margin:10px;
  border-radius: 8px;
  background-color:#dfdcdc;
  color:#000;
}
</style>