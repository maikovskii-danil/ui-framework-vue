# UI Framework for Vue

## 🔧 Что это?

Минималистичный UI Framework для Vue 3, написанный с использованием Tailwind CSS и VueUse. Предназначен для быстрой интеграции с возможностью кастомизации. Использует v-model, defineProps, defineEmits и декларации типов TypeScript.

## 🚀 Установка

`npm install @maikovskii-danil/ui-framework-vue`

## ⚙️ Настройка
Добавьте сканирование классов Tailwind из пакета (показан пример @source для путя /src/*.css):

`@source '../node_modules/@maikovskii-danil/ui-framework-vue/dist/index.js';`

## 🤝 Зависимости (peerDependencies)

- "@vueuse/core": "^13.2.0",
- "tailwindcss": "^4.1.11",
- "vue": "^3.5.16"

## 📦 Сборка пакета

`npm run build`

###### Бандл находится в dist/index.js, предназначен для использования в @source директиве Tailwind.

## 📚 Компоненты

- `<AppAlert />`
- `<AppButton />`
- `<AppInput />`
- `<AppModal />`
- `<AppSelect />`
- `<AppTable />`

###### ✨ Особенности

- Поддержка v-model
- Типизация на уровне пакета (.d.ts файлы)
- Тёмная тема через Tailwind

## 🧪 Пример использования:

`<AppInput
  v-model="username"
  placeholder="Введите имя"
  :error="hasError && 'Имя обязательно'"
/>`

`<AppButton @click="submit">Сохранить</AppButton>`

## 📘 API Reference

### AppAlert

| Название         | Тип                 | Описание                    |
|------------------|---------------------|-----------------------------|
| `title`          | `string`            | Заголовок                   |
| `text`           | `string`            | Основной текст              |
| `visible`        | `boolean`           | Отображение/скрытие         |
| `styleStrategy`  | `primary \| danger` | Визуальный стиль            |

#### События:
`@close` — вызывается при нажатии на кнопку "Закрыть"

### AppButton

| Название        | Тип                                  | Описание         |
|-----------------|--------------------------------------|------------------|
| `type`          | `'button' \| 'submit' \| 'reset'`    | Тип HTML-кнопки  |
| `class`         | `string`                             | Основной текст   |
| `styleStrategy` | `'primary' \| 'danger' \| 'neutral'` | Визуальный стиль |

#### События:
`@click` — вызывается при клике

### AppInput

| Название       | Тип       | Описание                              |
| -------------- | --------- | ------------------------------------- |
| `modelValue`   | `string`  | Значение поля                         |
| `placeholder`  | `string`  | Текст-подсказка                       |
| `type`         | `string`  | Тип поля (`text`, `password`, и т.д.) |
| `autocomplete` | `string`  | Подсказки автозаполнения браузера     |
| `error`        | `string`  | Текст ошибки                          |
| `withError`    | `boolean` | Отображение блока с ошибкой           |

#### События:
`@update:modelValue` — вызывается при изменении значения

`@focus` — вызывается при фокусе на поле

### AppModal

| Название  | Тип       | Описание                    |
| --------- | --------- | --------------------------- |
| `visible` | `boolean` | Отображение модального окна |

#### События:
`@close` — вызывается при нажатии на кнопку "Закрыть"

### AppSelect

| Название     | Тип                                     | Описание               |
| ------------ | --------------------------------------- | ---------------------- |
| `modelValue` | `string`                                | ID выбранного значения |
| `options`    | `{ id: string; displayName: string }[]` | Список доступных опций |

#### События:
`@update:modelValue` — вызывается при выборе опции

### AppTable

| Название            | Тип                     | Описание                       |
| ------------------- | ----------------------- | ------------------------------ |
| `table`             | `ITable \| ITableProps` | Табличные данные               |
| `emptyText`         | `string`                | Текст при отсутствии данных    |
| `emptyHeightInRows` | `number`                | Высота пустого блока в строках |
| `initialRowHeight`  | `number`                | Высота строки таблицы (в px)   |
