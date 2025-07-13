# UI Framework for Vue

Минималистичный UI Framework для Vue 3, написанный с использованием Tailwind CSS и VueUse.

## Storybook-like deploy

##### [Ссылка на Vercel deploy](https://ui-framework-vue.vercel.app/)

## 🚀 Установка

`npm install @maikovskii-danil/ui-framework-vue`

## ⚙️ Настройка

Добавьте сканирование классов Tailwind из пакета (показан пример @source для путя /src/\*.css):

`@source '../node_modules/@maikovskii-danil/ui-framework-vue/dist/ui-framework-vue.css';`

## 🤝 Зависимости (peerDependencies)

- "@vueuse/core": "^13.2.0",
- "tailwindcss": "^4.1.11",
- "vue": "^3.5.16"

## 🛠 About Enviroment

🖥️ Проект разработан и протестирован для macOS/linux для Chrome

⚙️ Node.js: 22.17.0

📦 npm: 11.4.2

❗ Поддержка Windows не гарантируется

##### Но Вы можете попробовать его запустить на Windows.

##### Для этого удалите поле "os" в package.json или измените на значение ниже:

```json
{
  "os": ["darwin", "linux", "win32"]
}
```

## 📦 Сборка пакета

`npm run package:build`

###### Бандл находится в dist/index.js

## 📚 Компоненты

- `<AppAlert />`
- `<AppButton />`
- `<AppInput />`
- `<AppModal />`
- `<AppSelect />`
- `<AppTable />`
- `<AppDropdown />`

## ✨ Особенности

- Поддержка v-model
- Типизация на уровне пакета (.d.ts файлы)
- Тёмная тема через Tailwind

## 🧪 Пример использования

`<AppInput
  v-model="username"
  placeholder="Введите имя"
  :error="hasError && 'Имя обязательно'"
/>`

`<AppButton @click="submit">Сохранить</AppButton>`

## 📚 Документация

[API Reference](https://ui-framework-vue.vercel.app/story/api)

[CHANGELOG.md](https://github.com/maikovskii-danil/ui-framework-vue/blob/main/docs/CHANGELOG.md)

[npm scripts map](https://github.com/maikovskii-danil/ui-framework-vue/blob/main/docs/scripts-map.md)
