<template>
  <div id="app">
    <WCounter :wvalue="local_last_value" />
    <h3> {{ local_last_value.join('') }}</h3>
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
import { mapGetters } from 'vuex'

import WCounter from '@/components/WCounter.vue'
import WArchive from '@/components/WArchive.vue'
import { loginAnonymous, items } from '@/stitch'

export default {
  'name': 'App',
  'components': { WCounter, WArchive },
  data () {
    return {
      // We need this due to we can not mutate
      //  computed prop which comes from vuex)
      // https://github.com/vuejs/vuex/issues/1085
      'local_last_value': [...'000000'],
    }
  },
  'computed': {
    ...mapGetters({
      'last_value': 'last',
    }),
  },
  async created () {
    await loginAnonymous()
    await this.$store.dispatch('fetchRecords')
    this.local_last_value = this.last_value
  },
  'methods': {
    async send () {
      const meter = this.local_last_value.join('')
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
