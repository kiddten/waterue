import Vue from 'vue'
import Vuex from "vuex"

import { items  } from "@/stitch/index";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    records: []
  },
  mutations: {
    saveRecords(state, records) {
      state.records = records
    },
    addRecord(state, record) {
      if (state.records) { state.records.push(record)}
    }
  },
  actions: {
    async fetchRecords({ commit }) {
      const records = await items.find().toArray()
      commit('saveRecords', records)
      return records
    },
    async addRecord({ commit }, data) {
      await items.insertOne(data)
      commit('addRecord', data)
      return data
    }
  }
})
