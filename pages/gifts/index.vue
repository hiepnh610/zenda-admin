<template>
  <div class="ibox">
    <div class="ibox-content">
      <div class="row m-b-sm">
        <div class="col-sm-3">
          <n-link
            v-if="gifts.count < 10"
            to="/gifts/create"
            class="btn btn-sm btn-primary"
          >
            <i class="fa fa-plus m-r-xs" />
            Create
          </n-link>
        </div>
      </div>

      <div v-if="gifts.rows && gifts.rows.length" class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr v-if="columns">
              <th v-for="(column, index) in columns" :key="index">
                {{ column }}
              </th>
            </tr>
          </thead>

          <tbody v-if="gifts.rows">
            <tr v-for="gift in gifts.rows" :key="gift.id">
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
                {{ gift.createdAt | moment('DD/MM/YYYY HH:mm:ss') }}
              </td>

              <td>
                <n-link :to="'/gifts/' + gift.id" class="btn btn-sm btn-warning">
                  <i class="fa fa-pencil m-r-xs" />

                  Edit
                </n-link>
              </td>
            </tr>
          </tbody>

          <tfoot v-if="gifts.rows">
            <tr>
              <td colspan="6" class="footable-visible">
                <div class="m-t-md form-inline dt-bootstrap">
                  <div class="pull-left">
                    <p>
                      Show

                      <select
                        v-model="limit"
                        class="form-control m-l-xs m-r-xs"
                        @change="onChangeLimit($event)"
                      >
                        <option
                          v-for="number in listLimit"
                          :key="number"
                          :value="number"
                        >
                          {{ number }}
                        </option>
                      </select>

                      entries
                    </p>
                  </div>

                  <ul class="pagination pull-right m-n">
                    <li
                      v-for="index in getLengthPagination()"
                      :key="index"
                      :class="{ active: index === (offset + 1) }"
                      class="footable-page"
                    >
                      <a
                        href="#"
                        :disabled="index === (offset + 1)"
                        @click.prevent="
                          index !== (offset + 1) && changePagination(index)
                        "
                      >
                        {{ index }}
                      </a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div v-else>
        <p class="text-center h3">
          NO DATA
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { ACTION, GETTER } from '@/constants/name-space'

export default {
  name: 'Gifts',

  middleware: ['authenticated'],

  data () {
    return {
      columns: ['Image', 'Gift Name', 'Quantity', 'Points', 'Created At', ''],
      listLimit: [5, 10, 25, 50, 100],
      limit: 5,
      offset: 0
    }
  },

  computed: {
    ...mapGetters({
      gifts: GETTER.GIFTS
    })
  },

  mounted () {
    const payload = {
      offset: this.offset,
      limit: this.limit
    }

    this.$store.dispatch(ACTION.GIFTS, payload)
  },

  methods: {
    changePagination (value) {
      this.offset = value - 1

      const payload = {
        offset: this.offset * this.limit,
        limit: this.limit
      }

      this.$store.dispatch(ACTION.GIFTS, payload)
    },

    getLengthPagination () {
      return Math.ceil(this.gifts.count / this.limit)
    },

    onChangeLimit () {
      const payload = {
        offset: this.offset,
        limit: this.limit
      }

      this.$store.dispatch(ACTION.GIFTS, payload)
    }
  }
}
</script>

<style></style>
