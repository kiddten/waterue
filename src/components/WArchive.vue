<template>
  <div>
    <h3>DATA:</h3>
    <div
      v-for="item in meter_data"
      :key="item.date"
    >
      {{ item.date }} : {{ item.meter.toString().padStart(counterLength, '0') }} (+{{ item.delta }})
    </div>
    <hr>
  </div>
</template>

<script>
import { items } from '@/stitch'
import { counterLength } from '@/store'

export default {
  'name': 'WArchive',
  data () {
    return {
      counterLength,
    }
  },
  'computed': {
    meter_data () {
      return this.$store.state.records
    },
  },
  created () {
  },
  'methods': {
    async meter_values () {
      return await items.find().toArray()
    },
  },
}
</script>

<style>
</style>
