<template>
  <!-- open, close 多级菜单打开 / 关闭触发的回调 -->
  <el-menu
    @open="handleOpen"
    @close="handleClose"
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <!-- isCollapse: 控制侧边栏展开 / 收起 -->
    <h3>{{ !isCollapse ? "后台管理系统" : "后台" }}</h3>
    <!-- 一级菜单 -->
    <el-menu-item
      v-for="item in noChildren"
      :index="item.label"
      :key="item.label"
      @click="clickMenu(item)"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <!-- 二级菜单 -->
    <el-submenu
      v-for="item in hasChildren"
      :index="item.label"
      :key="item.label"
    >
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <el-menu-item @click="clickMenu(subItem)">
          {{ subItem.label }}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        // {
        //   path: "/",
        //   name: "home",
        //   label: "首页",
        //   icon: "s-home",
        //   url: "Home/Home",
        // },
        // {
        //   path: "/mall",
        //   name: "mall",
        //   label: "商品管理",
        //   icon: "video-play",
        //   url: "MallManage/MallManage",
        // },
        // {
        //   path: "/user",
        //   name: "user",
        //   label: "用户管理",
        //   icon: "user",
        //   url: "UserManage/UserManage",
        // },
        // {
        //   label: "其他",
        //   icon: "location",
        //   children: [
        //     {
        //       path: "/page1",
        //       name: "page1",
        //       label: "页面1",
        //       icon: "setting",
        //       url: "Other/PageOne",
        //     },
        //     {
        //       path: "/page2",
        //       name: "page2",
        //       label: "页面2",
        //       icon: "setting",
        //       url: "Other/PageTwo",
        //     },
        //   ],
        // },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log("handleOpen", "key", key, "keyPath", keyPath);
    },
    handleClose(key, keyPath) {
      console.log("handleClose", "key", key, "keyPath", keyPath);
    },
    clickMenu(item) {
      this.$router.push({
        name: item.name,
      });
      // 添加面包屑
      this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    noChildren() {
      return this.asyncMenu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.asyncMenu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
    asyncMenu() {
      return this.$store.state.tab.menu;
    },
  },
};
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>

