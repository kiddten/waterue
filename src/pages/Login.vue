<template>
  <div>
    <input
      v-model="email"
      type="text"
    >
    <input
      v-model="password"
      type="text"
    >
    <button @click="reguser">
      register
    </button>
    <button @click="login">
      login
    </button>
  </div>
</template>

<script>
import { registerEmailPasswordUser, loginEmailPassword } from '@/stitch'

export default {
  data () {
    return {
      'email': '',
      'password': '',
    }
  },
  'methods': {
    async reguser () {
      await registerEmailPasswordUser(this.email, this.password)
    },
    async login () {
      // TODO move to separate function
      await loginEmailPassword(this.email, this.password)
      this.$store.dispatch('login')
      this.$router.push('/board')
    },
  },
}
</script>

<style>

</style>
