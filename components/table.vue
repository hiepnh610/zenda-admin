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
        <table class="table table-striped text-center">
          <thead class="text-center">
            <tr v-if="columns">
              <th
                v-for="(column, index) in columns"
                :key="index"
                class="text-center"
              >
                {{ column }}
              </th>
            </tr>
          </thead>

          <tbody v-if="data">
            <tr v-for="(item, index) in data" :key="index">
              <td>
                {{ item.display_name }}
              </td>

              <td>
                {{ item.give_bag }}
              </td>

              <td>
                {{ item.receive_bag }}
              </td>

              <td>
                <button class="btn btn-xs btn-danger">
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
export default {
  name: 'Table',

  props: {
    columns: {
      type: Array,
      required: true
    },

    data: {
      type: Array,
      required: true
    }
  }
}
</script>
