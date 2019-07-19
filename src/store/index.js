import Vue from 'vue'
import Vuex from 'vuex'

import { items, app, hasLoggedInUser } from '@/stitch'

Vue.use(Vuex)

const counterLength = 8
export { counterLength }

export default new Vuex.Store({
  'state': {
    'records': [],
    'authenticated': hasLoggedInUser(),
  },
  'mutations': {
    saveRecords (state, records) {
      state.records = records
    },
    addRecord (state, record) {
      if (state.records) { state.records.unshift(record) }
    },
    login (state) {
      state.authenticated = hasLoggedInUser()
    },
    logout (state) {
      state.authenticated = hasLoggedInUser()
    },
  },
  'getters': {
    'last': (state) => {
      const length = state.records.length
      if (length > 0) {
        return state.records[0].meter.toString().padStart(counterLength, '0')
      }
      return '0'.repeat(counterLength)
    },
    'isAuthenticated': (state) => {
      return state.authenticated
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
    login ({ commit }) {
      commit('login')
    },
    logout ({ commit }) {
      commit('logout')
    },
  },
})
