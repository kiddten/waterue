<template>
  <div id="app">
    <WCounter :wvalue="counter"/>
    <h3> {{ counter.join('') }}</h3>
    <button @click="send">send</button>
  </div>
</template>

<script>

import WCounter from "@/components/WCounter.vue";

export default {
  name: 'app',
  components: {WCounter},
  data() {
    return {
    counter: Array(6).fill(5),
    }
  },
  methods: {
    send() {
      const num = Number(this.counter.join(''))
      const date = new Date().toJSON()
      alert(date)
    },
    oninput(val) {
      alert(val)
    }
  }
}
</script>

<style>
</style>
