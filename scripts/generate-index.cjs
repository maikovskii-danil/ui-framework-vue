const fs = require('fs');
const path = require('path');

const componentsDir = path.resolve(__dirname, '../src/uikit');
const outputFile = path.resolve(__dirname, '../src/index.ts');

function toPascalCase(fileName) {
  return fileName
    .replace(/\.vue$/, '')
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function generateExports() {
  const files = fs.readdirSync(componentsDir).filter((f) => f.endsWith('.vue'));

  const exports = files.map((file) => {
    const pascalName = toPascalCase(file);
    const importPath = `./uikit/${file}`;
    return `export { default as ${pascalName} } from '${importPath}';`;
  });

  return [
    "import './style.css';",
    '// ⚠️ Auto-generated file. Do not edit manually.',
    '// Run `npm run generate` to regenerate.',
    '',
    ...exports,
    '',
  ].join('\n');
}

fs.writeFileSync(outputFile, generateExports());

console.log(
  `✅ index.ts сгенерирован: ${path.relative(process.cwd(), outputFile)}`,
);
