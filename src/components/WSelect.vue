<template>
  <div>
    <el-select
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

</style>
