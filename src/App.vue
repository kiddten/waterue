<template>
  <div id="app">
    <WCounter :wvalue="counter"/>
    <h3> {{ counter.join('') }}</h3>
    <button @click="send">send</button>
    <button @click="get_data">get_data</button>
  </div>
</template>

<script>

import WCounter from "@/components/WCounter.vue";
import { loginAnonymous, items  } from "@/stitch/index";

export default {
  name: 'app',
  components: {WCounter},
  data() {
    return {
    counter: Array(6).fill(5),
    }
  },
  async created() {
    await loginAnonymous()
  },
  methods: {
    async send() {
      // const num = Number(this.counter.join(''))
      const date = new Date().toJSON()
      await items.insertOne({date})
      alert('sent!')
    },
    oninput(val) {
      alert(val)
    },
    async get_data() {
      const x = await items.find().toArray()
      console.log(x)
    }
  }
}
</script>

<style>
</style>
