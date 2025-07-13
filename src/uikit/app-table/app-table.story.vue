<script lang="ts" setup>
import AppTable from './app-table.vue';
</script>

<template>
  <Story
    id="AppTable"
    responsive-disabled
    title="AppTable"
  >
    <Variant title="AppTable">
      <AppTable
        :table="{
          headers: [
            { id: '1', displayName: 'header 1', twStyle: 'w-full' },
            { id: '2', displayName: 'header 2', twStyle: 'w-full' },
            { id: '3', displayName: 'header 3', twStyle: 'w-full' },
          ],
          rows: [
            {
              id: 'row 1',
              cells: [
                { id: '1', value: 'cell 1', twStyle: 'w-full' },
                { id: '2', value: 'cell 2', twStyle: 'w-full' },
                { id: '3', value: 'cell 3', twStyle: 'w-full' },
              ],
            },
            {
              id: 'row 2',
              cells: [
                { id: '1', value: 'cell 1', twStyle: 'w-full' },
                { id: '2', value: 'cell 2', twStyle: 'w-full' },
                { id: '3', value: 'cell 3', twStyle: 'w-full' },
              ],
            },
            {
              id: 'row 3',
              cells: [
                { id: '1', value: 'cell 1', twStyle: 'w-full' },
                { id: '2', value: 'cell 2', twStyle: 'w-full' },
                { id: '3', value: 'cell 3', twStyle: 'w-full' },
              ],
            },
          ],
        }"
      />
    </Variant>
  </Story>
</template>
