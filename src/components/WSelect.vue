<template>
  <div class="wselect">
    <el-select
      size="small"
      :value="value"
      @change="$emit('input', $event)"
    >
      <el-option
        v-for="(val, index) in 10"
        :key="val"
        :value="index"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  'name': 'WSelect',
  'props': ['value'],
}
</script>

<style>

.wselect {
  flex-grow: 1;
  flex-basis: 0;
}

.el-input__suffix {
  display: none;
}

input.el-input__inner {
  text-align: center;
}

.el-input--suffix > input.el-input__inner {
  padding: 0;
}

.el-select-dropdown__wrap {
  max-height: unset;
}

.red > .el-select > .el-input > input.el-input__inner {
  color: red;
}
</style>
