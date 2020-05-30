<template>
  <div class="ibox">
    <div class="ibox-content">
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
