<template>
  <div id="board">
    <WCounter :wvalue="local_last_value" />
    <h3> {{ local_last_value.join('') }}</h3>
    <el-button @click="send">
      send
    </el-button>
    <el-button @click="clear">
      clear
    </el-button>
    <el-button @click="logoutUser">
      logout
    </el-button>
    <WArchive />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import WCounter from '@/components/WCounter.vue'
import WArchive from '@/components/WArchive.vue'
import { items, logout } from '@/stitch'
import { counterLength } from '@/store'

export default {
  'name': 'Board',
  'components': { WCounter, WArchive },
  data () {
    return {
      // We need this due to we can not mutate
      //  computed prop which comes from vuex)
      // https://github.com/vuejs/vuex/issues/1085
      'local_last_value': [...'0'.repeat(counterLength)],
    }
  },
  'computed': {
    ...mapGetters({
      'last_value': 'last',
    }),
  },
  async created () {
    await this.$store.dispatch('fetchRecords')
    this.local_last_value = [...this.last_value]
  },
  'methods': {
    async send () {
      const meter = Number(this.local_last_value.join(''))
      if (meter < this.last_value) {
        alert('Current value can\'t be lower than last one')
        return
      }
      const date = new Date().toJSON()
      const delta = meter - this.last_value
      const payload = { date, meter, delta }
      this.$store.dispatch('addRecord', payload)
    },
    async clear () {
      await items.deleteMany()
      alert('Clean done!')
    },
    async logoutUser () {
      await logout()
      this.$store.dispatch('logout')
      this.$router.push('/login')
    },
  },
}
</script>

<style>
</style>
