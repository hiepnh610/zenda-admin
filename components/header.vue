<template>
  <div v-if="isAuthenticated" class="row border-bottom">
    <nav
      class="navbar navbar-static-top"
      role="navigation"
      style="margin-bottom: 0"
    >
      <div class="navbar-header">
        <a
          class="navbar-minimalize minimalize-styl-2 btn btn-primary"
          href="#"
          @click="toggleSidebar()"
        >
          <i class="fa fa-bars" />
        </a>
      </div>

      <ul class="nav navbar-top-links navbar-right">
        <li>
          <a href="#" @click.prevent="logout">
            <i class="fa fa-sign-out" />
            Log out
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',

  data () {
    return {
      isCollapse: false
    }
  },

  computed: {
    ...mapGetters(['isAuthenticated'])
  },

  methods: {
    toggleSidebar () {
      this.isCollapse = !this.isCollapse
    },

    logout () {
      localStorage.removeItem('auth._token.local')
      this.$store.commit('setAuth', false)
    }
  },

  head () {
    return {
      bodyAttrs: {
        class: this.isCollapse ? 'pace-done mini-navbar' : 'pace-done'
      }
    }
  }
}
</script>
