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
      <div class="p-8 rounded bg-white dark:bg-gray-700">
        <AppTable
          :table="{
            headers: [
              { id: '1', displayName: 'header 1', twStyle: 'w-full' },
              { id: '2', displayName: 'header 2', twStyle: 'w-full' },
              { id: '3', displayName: 'header 3', twStyle: 'w-full' },
            ],
            rows: [
              {
                id: 'row1',
                cells: [
                  { id: '1', value: 'cell 1', twStyle: 'w-full' },
                  { id: '2', value: 'cell 2', twStyle: 'w-full' },
                  { id: '3', value: 'cell 3', twStyle: 'w-full' },
                ],
              },
              {
                id: 'row2',
                cells: [
                  { id: '1', value: 'cell 1', twStyle: 'w-full' },
                  { id: '2', value: 'cell 2', twStyle: 'w-full' },
                  { id: '3', value: 'cell 3', twStyle: 'w-full' },
                ],
              },
              {
                id: 'row3',
                cells: [
                  { id: '1', value: 'cell 1', twStyle: 'w-full' },
                  { id: '2', value: 'cell 2', twStyle: 'w-full' },
                  { id: '3', value: 'cell 3', twStyle: 'w-full' },
                ],
              },
            ],
          }"
        />
      </div>
    </Variant>
  </Story>
</template>
