<template>
  <el-form ref="form" label-width="100px" :model="form" :inline="inline">
    <!-- 封装表单，v-for 加载所需的组件 -->
    <el-form-item
      v-for="item in formLabel"
      :key="item.label"
      :label="item.label"
    >
      <!-- 双向绑定 prop 数据 -->
      <!-- 输入框 -->
      <el-input
        v-if="item.type === 'input'"
        :placeholder="`请输入${item.label}`"
        v-model="form[item.model]"
      ></el-input>
      <!-- switch 开关 -->
      <el-switch
        v-if="item.type === 'switch'"
        v-model="form[item.model]"
      ></el-switch>
      <!-- 日期选择器 -->
      <el-date-picker
        v-if="item.type === 'date'"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="选择日期"
        v-model="form[item.model]"
      ></el-date-picker>
      <!-- select 选择器 -->
      <el-select
        v-if="item.type === 'select'"
        placeholder="请选择"
        v-model="form[item.model]"
      >
        <el-option
          v-for="item in item.opts"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <!-- 插槽，可自定义组件 -->
    <el-form-item>
      <slot></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "CommonForm",
  props: {
    // 所需的组件，对象列表，每个对象要包含 type, label 属性
    formLabel: Array,
    // 双向绑定父组件传来的 prop 数据，有待商榷
    form: Object,
    inline: Boolean,
  },
  data() {
    return {};
  },
};
</script>