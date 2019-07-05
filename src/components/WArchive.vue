<template>
  <div>
    <h3>DATA:</h3>
    <div
      v-for="item in meter_data"
      :key="item.date"
    >
      {{ item.date }} : {{ item.meter }}
    </div>
    <hr>
  </div>
</template>

<script>
import { items } from '@/stitch'

export default {
  'name': 'WArchive',
  data () {
    return {
    }
  },
  'computed': {
    meter_data () {
      return this.$store.state.records
    },
  },
  created () {
    this.$store.dispatch('fetchRecords')
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
