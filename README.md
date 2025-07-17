# UI Framework for Vue

A minimalistic UI Framework for Vue 3, built with Tailwind CSS and VueUse.

## 🚀 Installation

`npm install @maikovskii-danil/ui-framework-vue`

Also add scaning of Tailwind from a package (example @source for path /src/\*.css):

`@source '../node_modules/@maikovskii-danil/ui-framework-vue/dist/ui-framework-vue.css';`

## 🤝 peerDependencies

- "@vueuse/core": "^13.2.0",
- "tailwindcss": "^4.1.11",
- "vue": "^3.5.16"

## 🛠 About Enviroment

🖥️ Developed and tested on macOS/Linux (Chrome)

⚙️ Node.js: 22.17.0

📦 npm: 11.4.2

❗ Windows is not officially supported.

💡 However, you can still try running it on Windows. To do so, delete the "os" field in package.json, or change it to:

```json
{
  "os": ["darwin", "linux", "win32"]
}
```

## 📦 Build of a package

`npm run package:build`

###### The bundle will be located at dist/index.js

## 📚 Available Components

- `<AppAlert />`
- `<AppButton />`
- `<AppInput />`
- `<AppModal />`
- `<AppSelect />`
- `<AppTable />`
- `<AppDropdown />`
- `<AppTextarea />`
- `<AppCheckbox />`
- `<AppRadio />`

## ✨ Features

- Support of v-model
- Type definitions included (.d.ts)
- TailwindCSS Dark Mode

## 🧪 Example of usage

`<AppInput
  v-model="username"
  placeholder="Enter name"
  :error="hasError && 'Required name'"
/>`

`<AppButton @click="submit">Save</AppButton>`

## 🔗 Useful links

#### 📘 Interactive component documentation (Histoire) hosted on Vercel:

###### [ui-framework-vue.vercel.app](https://ui-framework-vue.vercel.app/)

#### 📝 Version history and changelog:

###### [🕒 CHANGELOG.md](https://github.com/maikovskii-danil/ui-framework-vue/blob/main/docs/CHANGELOG.md)

#### ⚙️ ⚙️ Development scripts:

###### [Script documentation of all npm run-commands, with comments](https://github.com/maikovskii-danil/ui-framework-vue/blob/main/docs/scripts-map.md)
