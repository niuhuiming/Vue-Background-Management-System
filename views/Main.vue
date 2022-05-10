<template>
  <el-container style="height: 100%">
    <!-- 导航区 -->
    <el-aside width="auto">
      <common-aside></common-aside>
    </el-aside>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <common-header></common-header>
      </el-header>
      <!-- tag -->
      <common-tag></common-tag>
      <!-- 页面内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "../src/components/CommonAside.vue";
import CommonHeader from "../src/components/CommonHeader.vue";
import CommonTag from "../src/components/CommonTag.vue";
export default {
  name: "Home",
  components: {
    CommonAside,
    CommonHeader,
    CommonTag,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
}
.el-main {
  padding-top: 0;
}
</style>