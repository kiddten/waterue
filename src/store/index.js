import Vue from 'vue'
import Vuex from 'vuex'

import { items } from '@/stitch'

Vue.use(Vuex)

export default new Vuex.Store({
  'state': {
    'records': [],
  },
  'mutations': {
    saveRecords (state, records) {
      state.records = records
    },
    addRecord (state, record) {
      if (state.records) { state.records.push(record) }
    },
  },
  'getters': {
    'last': (state) => {
      console.log('trigged')
      if (state.records.length > 0) {
        return [...state.records[state.records.length - 1].meter]
      }
      return [...'000000']
    },
  },
  'actions': {
    async fetchRecords ({ commit }) {
      const records = await items.find().toArray()
      commit('saveRecords', records)
      return records
    },
    async addRecord ({ commit }, data) {
      await items.insertOne(data)
      commit('addRecord', data)
      return data
    },
  },
})
