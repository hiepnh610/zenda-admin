<template>
  <nav
    v-if="isAuthenticated"
    class="navbar-default navbar-static-side"
    role="navigation"
  >
    <div class="sidebar-collapse">
      <ul id="side-menu" class="nav metismenu">
        <li class="nav-header">
          <div class="dropdown profile-element">
            <a
              class="dropdown-toggle"
              href="#"
              @click.prevent="goToDashboard()"
            >
              <span class="clear">
                <span class="block m-t-xs">
                  <strong class="font-bold">Admin</strong>
                </span>
              </span>
            </a>

            <ul class="dropdown-menu animated fadeInRight m-t-xs">
              <li><a href="profile.html">Profile</a></li>
              <li><a href="contacts.html">Contacts</a></li>
              <li><a href="mailbox.html">Mailbox</a></li>
              <li class="divider" />
              <li><a href="login.html">Logout</a></li>
            </ul>
          </div>
          <div class="logo-element">
            BB
          </div>
        </li>

        <li>
          <nuxt-link to="/dashboard">
            <i class="fa fa-th-large" aria-hidden="true" />

            <span class="nav-label">Dashboards</span>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="/users">
            <i class="fa fa-user" aria-hidden="true" />

            <span class="nav-label">Users</span>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="/gifts">
            <i class="fa fa-gift" aria-hidden="true" />

            <span class="nav-label">Gifts</span>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="/gift-exchange">
            <i class="fa fa-gift" aria-hidden="true" />

            <span class="nav-label">Gift Exchange</span>
          </nuxt-link>
        </li>

        <li>
          <nuxt-link to="/transactions">
            <i class="fa fa-credit-card" aria-hidden="true" />

            <span class="nav-label">Transactions</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',

  computed: {
    ...mapGetters(['isAuthenticated'])
  },

  methods: {
    goToDashboard () {
      this.$router.push('/dashboard')
    }
  }
}
</script>
