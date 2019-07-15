<template>
  <div>
    <h3>EMAIL CONFIRMATION</h3>
    <div v-if="message">
      <h4>
        {{ message }}
      </h4>
    </div>
    <a href="/#/login">Login</a>
  </div>
</template>

<script>
import { confirmEmailPasswordUser } from '@/stitch'

export default {
  data () {
    return {
      'message': '',
    }
  },
  async mounted () {
    try {
      await confirmEmailPasswordUser()
    } catch (error) {
      this.message = `Failed to confirm your account - ${error.message}`
      return
    }
    this.message = 'Successfully confirmed your account! You can now log in.'
  },
}
</script>

<style>

</style>
