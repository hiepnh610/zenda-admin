<template>
  <div class="ibox">
    <div class="ibox-content">
      <div class="row m-b-sm">
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
                {{ gift.id }}
              </td>

              <td>
                {{ gift.display_name }}
              </td>

              <td>
                {{ gift.gift_name }}
              </td>

              <td>
                {{ gift.createdAt }}
              </td>

              <td>
                <button class="btn btn-sm btn-danger">
                  <i class="fa fa-trash-o m-r-xs" />

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
  name: 'Exchange',

  middleware: ['authenticated'],

  data () {
    return {
      columns: ['ID', 'Image', 'Gift', 'Created At', '']
    }
  },

  computed: {
    ...mapGetters({
      gifts: GETTER.GIFT_REQUEST
    })
  },

  mounted () {
    this.$store.dispatch(ACTION.GIFT_REQUEST)
  }
}
</script>
