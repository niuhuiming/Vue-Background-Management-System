<template>
  <div class="tabs">
    <!-- 加载保存在 vuex 中的 tag -->
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.name"
      :closable="tag.name !== 'home'"
      :effect="$route.name === tag.name ? 'dark' : 'plain'"
      @click="changeMenu(tag)"
      @close="handleClose(tag, index)"
      size="small"
      >{{ tag.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "CommonTag",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList,
    }),
  },
  methods: {
    ...mapMutations({
      close: "closeTag",
    }),
    // 跳转路由
    changeMenu(item) {
      this.$router.push({
        name: item.name,
      });
    },
    // 删除 tag, 并判断是否需要跳转路由
    handleClose(tag, index) {
      const length = this.tags.length - 1;
      // 调用 vuex 的 closeTag 删除 tag
      this.close(tag);
      if (tag.name !== this.$route.name) {
        return;
      }
      // 删除的是最后一个向左移动一位，否则向右移动一位
      if (index === length) {
        this.$router.push({
          name: this.tags[index - 1].name,
        });
      } else {
        this.$router.push({
          name: this.tags[index].name,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>