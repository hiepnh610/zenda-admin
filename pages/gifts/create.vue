<template>
  <div class="ibox float-e-margins">
    <div class="ibox-title">
      <h5>
        Create Gift
      </h5>
    </div>

    <div class="ibox-content">
      <div class="row">
        <form role="form" @submit.prevent="createGift">
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
            <button
              class="btn btn-sm btn-primary"
              type="submit"
              :disabled="loading"
            >
              <strong>Save</strong>

              <i v-if="loading" class="fa fa-spinner fa-spin fa-fw" />
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ACTION } from '@/constants/name-space'

export default {
  name: 'GiftCreate',

  middleware: ['authenticated'],

  data () {
    return {
      name: null,
      image: null,
      quantity: null,
      points: null,
      loading: false
    }
  },

  methods: {
    createGift () {
      this.loading = true

      const payload = {
        name: this.name,
        image: this.image,
        quantity: this.quantity,
        points: this.points
      }

      this.$store.dispatch(ACTION.CREATE_GIFT, payload)

      this.loading = false
    }
  }
}
</script>

<style></style>
