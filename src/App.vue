<template>
  <div id="app">
    <div v-for="(item, index) in counter" :key="index">
      <WSelect v-model="counter[index]"/>
    </div>
    <h3> {{ counter.join('') }}</h3>
    <button @click="send">send</button>
  </div>
</template>

<script>

import WSelect from "@/components/WSelect.vue";

export default {
  name: 'app',
  components: {WSelect},
  data() {
    return {
    counter: Array(6).fill(7),
    }
  },
  methods: {
    send() {
      alert(this.counter.join(''))
    }
  }
}
</script>

<style>
</style>
