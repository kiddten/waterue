<template>
  <div class="login-page">
    <h3 id="header">
      waterue
    </h3>
    <div class="login-form">
      <el-form>
        <el-form-item
          label="email"
        >
          <el-input
            v-model="email"
            type="text"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item
          label="password"
        >
          <el-input
            v-model="password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <div class="buttons">
          <el-form-item>
            <el-button
              class="login-button"
              type="primary"
              @click="login"
            >
              Login
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login-button"
              @click="reguser"
            >
              Register
            </el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
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
      try {
        await registerEmailPasswordUser(this.email, this.password)
      } catch (error) {
        this.$message.error(error)
        return
      }
      this.$message.success(`Sent a registration email to ${this.email}`)
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
.login-page {
  border: 1px solid black;
  border-radius: 5px;
  width: 300px;
}

.login-page > .login-form {
  padding: 1em;
}

.login-button {
  width: 100%;
}

.buttons {
  width: 100%;
  margin: 0 auto;
}

#header {
  text-align:center;
}
</style>
