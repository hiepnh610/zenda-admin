<template>
  <div class="ibox float-e-margins">
    <div class="ibox-title">
      <h5>
        Reset Points Quantity
      </h5>
    </div>

    <div class="ibox-content">
      <div class="row">
        <div class="col-sm-4">
          <form role="form" @submit.prevent="updatePoints">
            <div class="form-group">
              <label>Quantity</label>

              <input
                v-model="quantity"
                type="number"
                placeholder="Quantity Points"
                class="form-control"
              >
            </div>

            <div>
              <button
                class="btn btn-sm btn-primary m-t-n-xs"
                type="submit"
              >
                <strong>Reset</strong>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ACTION } from '@/constants/name-space'

export default {
  name: 'Settings',

  data () {
    return {
      quantity: null
    }
  },

  methods: {
    updatePoints () {
      this.$store.dispatch(ACTION.SETTINGS, this.quantity)
    }
  }
}
</script>

<style></style>
