<template>
  <Story
    id="api"
    title="API Reference"
    docs-only
    icon="carbon:bookmark"
    :actions="{ disable: true }"
  />
</template>

<docs lang="md">
# 📘 API Reference

---

### AppAlert

| Prop            | Type                    | Description          |
| --------------- | ----------------------- | -------------------- |
| `title`         | `string`                | Title text           |
| `text`          | `string`                | Description text     |
| `visible`       | `boolean`               | Show/hide visibility |
| `styleStrategy` | `'primary' \| 'danger'` | Visual style variant |

#### Events:

- `@close` — emitted when the "Close" button is clicked

---

### AppButton

| Prop            | Type                                              | Description          |
| --------------- | ------------------------------------------------- | -------------------- |
| `type`          | `'button' \| 'submit' \| 'reset'`                 | HTML button type     |
| `class`         | `string`                                          | Custom CSS class     |
| `styleStrategy` | `'primary' \| 'danger' \| 'neutral' \| 'confirm'` | Visual style variant |

#### Events:

- `@click` — emitted on click

---

### AppInput

| Prop           | Type      | Description                                    |
| -------------- | --------- | ---------------------------------------------- |
| `modelValue`   | `string`  | Input value                                    |
| `placeholder`  | `string`  | Placeholder text                               |
| `type`         | `string`  | Input type (`text`, `password`, etc.)          |
| `autocomplete` | `string`  | Browser autocomplete value                     |
| `error`        | `string`  | Error message                                  |
| `withError`    | `boolean` | Force error block display even without message |

#### Events:

- `@update:modelValue` — emitted when the input value changes

---

### AppTextarea

| Prop          | Type      | Description                                    |
| ------------- | --------- | ---------------------------------------------- |
| `modelValue`  | `string`  | Textarea value                                 |
| `disabled`    | `boolean` | Disable input                                  |
| `placeholder` | `string`  | Placeholder text                               |
| `error`       | `string`  | Error message                                  |
| `withError`   | `boolean` | Force error block display even without message |

#### Events:

- `@update:modelValue` — emitted on value change
- `@focus` — emitted when focused

---

### AppModal

| Prop      | Type      | Description                        |
| --------- | --------- | ---------------------------------- |
| `visible` | `boolean` | Controls visibility (via `v-show`) |

#### Events:

- `@close` — emitted when clicking outside the modal

---

### AppSelect

| Prop         | Type                                    | Description               |
| ------------ | --------------------------------------- | ------------------------- |
| `modelValue` | `string`                                | ID of selected option     |
| `options`    | `{ id: string; displayName: string }[]` | List of available options |

#### Events:

- `@update:modelValue` — emitted on option change

---

### AppTable

| Prop                 | Type      | Description                           |
| -------------------- | --------- | ------------------------------------- |
| `table`              | `ITable`  | Table data                            |
| `emptyText`          | `string`  | Message when table is empty           |
| `emptyHeightInRows`  | `number`  | Height of empty block in row units    |
| `initialRowHeight`   | `number`  | Height of a table row in pixels       |
| `debugComputedTable` | `boolean` | Enable console logging for table data |

---

### AppDropdown

| Prop         | Type                | Description              |
| ------------ | ------------------- | ------------------------ |
| `modelValue` | `string \| null`    | ID of selected option    |
| `options`    | `IDropdownOption[]` | List of dropdown options |
| `zIndex`     | `number`            | Custom z-index value     |

#### Events:

- `@update:modelValue` — emitted on selection change

---

### AppCheckbox

| Prop         | Type      | Description                        |
| ------------ | --------- | ---------------------------------- |
| `modelValue` | `boolean` | Checkbox state (checked/unchecked) |
| `disabled`   | `boolean` | Disable interaction                |

#### Events:

- `@update:modelValue` — emitted on toggle

---

### AppRadio

| Prop         | Type      | Description              |
| ------------ | --------- | ------------------------ |
| `modelValue` | `string`  | Currently selected value |
| `value`      | `string`  | Value of the radio       |
| `disabled`   | `boolean` | Disable interaction      |

#### Events:

- `@update:modelValue` — emitted on selection
</docs>

<style>
.histoire-toolbar-open-in-editor {
  display: none;
}
</style>
