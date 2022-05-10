<template>
  <div class="common-table">
    <!-- stripe 斑马纹 -->
    <el-table :data="tableData" height="90%" stripe>
      <!-- 表头 -->
      <el-table-column
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 125"
        show-overflow-tooltip
      >
        <!-- 
          <template slot-scope="scope"> 是个插件, 是 element-ui 封装的内容 
          可简单理解为拿到每一行数据        
        -->
        <template slot-scope="scope">
          <!-- <span>{{ item }}</span> -->
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <el-pagination
      class="pager"
      layout="prev, pager, next"
      :total="config.total"
      :current-page.sync="config.page"
      @current-change="changePage"
      :page-size="20"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "CommonTable",
  props: {
    // 当前页表格数据
    tableData: Array,
    // 表头 对象列表 每个对象包含 label 和 prop 属性
    tableLabel: Array,
    // 配置对象 1.loading 2.page 3.total
    config: Object,
  },
  date() {
    return {};
  },
  methods: {
    handleEdit(row) {
      this.$emit("edit", row);
    },
    handleDelete(row) {
      this.$emit("del", row);
    },
    changePage(page) {
      // 触发自定义事件 changePage
      this.$emit("changePage", page);
    },
  },
};
</script>

<style lang="less" scoped>
.common-table {
  height: calc(100% - 62px);
  background-color: white;
  position: relative;
  .pager {
    position: absolute;
    bottom: 0;
    right: 20px;
  }
}
</style>