<template>
  <div id="app">
    <WCounter :wvalue="counter" />
    <h3> {{ counter.join('') }}</h3>
    <el-button @click="send">
      send
    </el-button>
    <el-button @click="get_data">
      get_data
    </el-button>
    <el-button @click="clear">
      clear
    </el-button>
    <WArchive />
  </div>
</template>

<script>

import WCounter from '@/components/WCounter.vue'
import WArchive from '@/components/WArchive.vue'
import { loginAnonymous, items } from '@/stitch'

export default {
  'name': 'App',
  'components': { WCounter, WArchive },
  data () {
    return {
      'counter': new Array(6).fill(1),
    }
  },
  async created () {
    await loginAnonymous()
  },
  'methods': {
    async send () {
      const meter = this.counter.join('')
      const date = new Date().toJSON()
      const payload = { date, meter }
      this.$store.dispatch('addRecord', payload)
    },
    async get_data () {
      const x = await items.find().toArray()
      console.log(x)
    },
    async clear () {
      await items.deleteMany()
      alert('Clean done!')
    },
  },
}
</script>

<style>
</style>
