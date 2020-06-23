<template>
  <div class="ibox float-e-margins">
    <div class="ibox-title">
      <h5>
        Edit Gift
      </h5>
    </div>

    <div class="ibox-content">
      <div class="row">
        <form role="form" @submit.prevent="updateGift">
          <div class="col-sm-6">
            <div class="form-group">
              <label>Gift Name</label>

              <input v-model="name" type="text" class="form-control">
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label>Gift Image</label>

              <input v-model="image" type="text" class="form-control">
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label>Gift Quantity</label>

              <input v-model="quantity" type="text" class="form-control">
            </div>
          </div>

          <div class="col-sm-6">
            <div class="form-group">
              <label>Gift Points</label>

              <input v-model="points" type="text" class="form-control">
            </div>
          </div>

          <div class="col-sm-12">
            <button class="btn btn-sm btn-primary" type="submit">
              <strong>Save</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { ACTION, GETTER } from '@/constants/name-space'

export default {
  name: 'GiftEdit',

  middleware: ['authenticated'],

  data () {
    return {
      giftId: this.$route.params.id,
      image: null,
      name: null,
      points: null,
      quantity: null
    }
  },

  computed: {
    ...mapGetters({
      giftDetail: GETTER.GIFT_DETAIL
    })
  },

  watch: {
    giftDetail (data) {
      this.image = data.image || ''
      this.name = data.name || ''
      this.points = data.points || 0
      this.quantity = data.quantity || 0
    }
  },

  mounted () {
    this.$store.dispatch(ACTION.GIFT_DETAIL, this.giftId)
  },

  methods: {
    updateGift () {
      const payload = {
        id: this.giftId,
        image: this.image,
        name: this.name,
        points: this.points,
        quantity: this.quantity
      }

      this.$store.dispatch(ACTION.UPDATE_GIFT, payload)
    }
  }
}
</script>

<style></style>
