<template>
  <div>
    <h3>DATA:</h3>
    <div v-for="item in meter_data" :key="item.date">
      {{ item.date }} : {{ item.meter }}
    </div>
    <hr>
  </div>
</template>

<script>
import { items } from "@/stitch/index"
import { constants } from 'crypto';

export default {
  name: "WArchive",
  data() {
    return {
      meter_data: [],
    }
  },
  async mounted() {
    this.meter_data = await this.meter_values()
  },
  methods: {
    async meter_values() {
      return await items.find().toArray()
    }
  }
}
</script>

<style>
</style>
