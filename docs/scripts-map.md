# 🧭 Scripts Map

Documentation of npm scripts defined in `package.json`.

---

## 🔨 Build

| Script             | Description                                          |
| ------------------ | ---------------------------------------------------- |
| `package:build`    | Builds the library using Vite (`src/vite.config.ts`) |
| `prepackage:build` | Runs clean install and index generation before build |
| `story:build`      | Builds Histoire (docs/dev environment)               |
| `preview:build`    | Runs clean install and then builds Histoire          |

---

## 🚀 Development & Preview

| Script             | Description                                       |
| ------------------ | ------------------------------------------------- |
| `story:dev`        | Launches Histoire dev server                      |
| `prestory:dev`     | Runs clean install and kills dev port in parallel |
| `story:preview`    | Opens preview of Histoire from `/dist`            |
| `prestory:preview` | Builds preview and kills preview port in parallel |

---

## 🧹 Utilities & Autogeneration

| Script         | Description                                          |
| -------------- | ---------------------------------------------------- |
| `cleanInstall` | Cleans and reinstalls dependencies                   |
| `prepare`      | Initializes Husky hooks                              |
| `generate`     | Auto-generates `index.ts` with all component imports |

---

## 💄 Linting & Formatting

| Script          | Description                                                   |
| --------------- | ------------------------------------------------------------- |
| `lint`          | Runs ESLint after `prelint` setup                             |
| `prelint`       | Runs clean install before linting                             |
| `lintOnly`      | Runs ESLint directly (no pre-step)                            |
| `postlintOnly`  | Prints confirmation message after linting                     |
| `format`        | Formats files in `src/` using Prettier                        |
| `prettierCheck` | Checks formatting in `src/` without making changes            |
| `typecheck`     | Runs TypeScript compiler in type-check mode only (`--noEmit`) |
| `posttypecheck` | Prints confirmation message after type check                  |

---

## 🧯 Port Utilities

| Script         | Description           |
| -------------- | --------------------- |
| `kill:dev`     | Kills dev server port |
| `kill:preview` | Kills preview port    |

---

## 📦 Publishing

| Script           | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `prepublishOnly` | Builds the package before publishing (`npm publish`) |

---

## 📝 Notes

- Uses `run-s` and `run-p` from [`npm-run-all2`](https://www.npmjs.com/package/npm-run-all2) for sequential and parallel execution.
- `cleanInstall` is the core environment setup step before most workflows.

---
