<template>
  <div class="ibox">
    <div class="ibox-content">
      <div class="row m-b-sm">
        <div class="col-sm-3">
          <n-link to="/gifts/create" class="btn btn-primary">
            <i class="fa fa-plus m-r-xs" />
            Create
          </n-link>
        </div>

        <div class="col-sm-3 pull-right">
          <div class="input-group">
            <input
              type="text"
              placeholder="Search"
              class="input-sm form-control"
            >

            <span class="input-group-btn">
              <button type="button" class="btn btn-sm btn-primary">Go!</button>
            </span>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr v-if="columns">
              <th v-for="(column, index) in columns" :key="index">
                {{ column }}
              </th>
            </tr>
          </thead>

          <tbody v-if="gifts">
            <tr v-for="gift in gifts" :key="gift.id">
              <td>
                <img v-if="gift.image" :src="gift.image" alt="">
              </td>

              <td>
                {{ gift.name }}
              </td>

              <td>
                {{ gift.quantity }}
              </td>

              <td>
                {{ gift.points }}
              </td>

              <td>
                {{ gift.createdAt }}
              </td>

              <td>
                <button
                  class="btn btn-xs btn-danger"
                  @click.prevent="deleteGift(gift.id)"
                >
                  Deleted
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { ACTION, GETTER } from '@/constants/name-space'

export default {
  name: 'Gifts',

  data () {
    return {
      columns: ['ID', 'Image', 'Name', 'Quantity', 'Points', 'Created At', '']
    }
  },

  computed: {
    ...mapGetters({
      gifts: GETTER.GIFTS
    })
  },

  mounted () {
    this.$store.dispatch(ACTION.GIFTS)
  },

  methods: {
    deleteGift (id) {
      this.$store.dispatch(ACTION.DELETE_GIFT, id)
    }
  }
}
</script>

<style></style>
