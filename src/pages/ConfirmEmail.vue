<template>
  <div>
    <h3>EMAIL CONFIRMATION</h3>
  </div>
</template>

<script>
import { confirmEmailPasswordUser } from '@/stitch'

export default {
  async mounted () {
    await confirmEmailPasswordUser()
  },
}
</script>

<style>

</style>
