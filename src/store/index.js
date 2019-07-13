import Vue from 'vue'
import Vuex from 'vuex'

import { items, app } from '@/stitch'

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
      if (state.records) { state.records.unshift(record) }
    },
  },
  'getters': {
    'last': (state) => {
      const length = state.records.length
      if (length > 0) {
        return state.records[0].meter.toString().padStart(6, '0')
      }
      return '000000'
    },
  },
  'actions': {
    async fetchRecords ({ commit }) {
      const records = await items.find({}, { 'sort': { 'date': -1 } }).toArray()
      commit('saveRecords', records)
      return records
    },
    async addRecord ({ commit }, data) {
      // TODO move it to CRUD
      data.owner_id = app.auth.currentUser.id
      await items.insertOne(data)
      commit('addRecord', data)
      return data
    },
  },
})
