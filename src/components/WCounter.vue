<template>
  <div class="wcounter">
    <WSelect
      v-for="(item, index) in wvalue.slice(0, -3)"
      :key="index"
      v-model="wvalue[index]"
    />
    <WSelect
      v-for="(item, index) in wvalue.slice(-3)"
      :key="wvalue.length -1 - index"
      v-model="wvalue[wvalue.length -1 - index]"
      class="red"
    />
  </div>
</template>

<script>

import WSelect from '@/components/WSelect.vue'

export default {
  'name': 'WCounter',
  'components': { WSelect },
  'props': ['wvalue'],
}
</script>

<style>

.wcounter {
    width: 360px;
    height: 40px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin-top: 30px;
}

</style>
