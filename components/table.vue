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
            <tr>
              <th class="text-center">
                User
              </th>
              <th class="text-center">
                Give Bag
              </th>
              <th class="text-center">
                Receive Bag
              </th>
              <th class="text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Nguyen Van A</td>
              <td>10</td>
              <td>50</td>
              <td>
                <button class="btn btn-xs btn-primary">
                  View
                </button>

                <button class="btn btn-xs btn-danger">
                  Deleted
                </button>
              </td>
            </tr>

            <tr>
              <td>Nguyen Van A</td>
              <td>10</td>
              <td>50</td>
              <td>
                <button class="btn btn-xs btn-primary">
                  View
                </button>

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
  name: 'Table'
}
</script>
