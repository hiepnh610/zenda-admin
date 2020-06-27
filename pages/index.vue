<template>
  <div class="middle-box text-center loginscreen animated fadeInDown">
    <form class="m-t" role="form" @submit.prevent="login">
      <div class="form-group">
        <input
          v-model="username"
          type="text"
          class="form-control"
          placeholder="Username"
        >
      </div>

      <div class="form-group">
        <input
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Password"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary block full-width m-b"
        :disabled="loading"
      >
        Login

        <i v-if="loading" class="fa fa-spinner fa-spin fa-fw" />
      </button>
    </form>
  </div>
</template>

<script>
import { STATUS_TOAST } from '@/constants/constants'
import showToast from '@/utils/toast'

export default {
  name: 'Login',

  middleware: ['notAuthenticated'],

  layout: 'login',

  data () {
    return {
      username: '',
      password: '',
      loading: false
    }
  },

  methods: {
    async login () {
      this.loading = true
      try {
        const payload = {
          username: this.username,
          password: this.password
        }

        await this.$auth.loginWith('local', {
          data: payload
        })

        const token = this.$auth.getToken('local')

        this.$store.commit('setToken', token)

        this.loading = false
        showToast(STATUS_TOAST.SUCCESS, 'Welcome!')
      } catch (error) {
        this.loading = false

        showToast(STATUS_TOAST.ERROR, error)
      }
    }
  }
}
</script>
