<template>
  <div>
    <select v-bind:value="value" @input="$emit('input', $event.target.value)"  selected="index==value">
      <option v-for="(val, index) in 10" v-bind:key="val">
        {{ index }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
    name: "WSelect",
    props: ['value']
}
</script>

<style>

</style>
