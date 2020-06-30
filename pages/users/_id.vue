<template>
  <div class="ibox float-e-margins">
    <div class="ibox-title">
      <h5>
        User Detail
      </h5>
    </div>

    <div class="ibox-content">
      <div class="row">
        <div class="col-md-2">
          <img v-if="userDetail.image_192" :src="userDetail.image_192" alt="">
        </div>

        <div class="col-md-10">
          <div class="row">
            <div class="col-md-6 m-b-lg">
              <strong class="m-b-sm inline">Real Name</strong>

              <p>{{ userDetail.real_name }}</p>
            </div>

            <div class="col-md-6 m-b-lg">
              <strong class="m-b-sm inline">Display Name</strong>

              <p>{{ userDetail.display_name }}</p>
            </div>

            <div class="clearfix" />

            <div class="col-md-6 m-b-lg">
              <strong class="m-b-sm inline">Email</strong>

              <p>{{ userDetail.email }}</p>
            </div>

            <div class="col-md-6 m-b-lg">
              <strong class="m-b-sm inline">Give Bag</strong>

              <p>{{ userDetail.give_bag }} points</p>
            </div>

            <div class="clearfix" />

            <div class="col-md-6 m-b-lg">
              <strong class="m-b-sm inline">Receive Bag</strong>

              <p>{{ userDetail.receive_bag }} points</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { ACTION, GETTER } from '@/constants/name-space'

export default {
  name: 'UserDetail',

  middleware: ['authenticated'],

  data () {
    return {
      userId: this.$route.params.id
    }
  },

  computed: {
    ...mapGetters({
      userDetail: GETTER.USER_DETAIL
    })
  },

  mounted () {
    this.$store.dispatch(ACTION.USER_DETAIL, this.userId)
  }
}
</script>

<style></style>
