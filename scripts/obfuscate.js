const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

const directories = [
  path.join(__dirname, '../.next/static'),
  path.join(__dirname, '../.next/server'),  // Thêm thư mục server
  path.join(__dirname, '../.next/pages')  // Thêm thư mục pages
];

const obfuscateFiles = (dir) => {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      obfuscateFiles(fullPath);
    } else if (file.endsWith('.js')) {
      const code = fs.readFileSync(fullPath, 'utf8');
      const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
        compact: true,
        controlFlowFlattening: true
      }).getObfuscatedCode();
      fs.writeFileSync(fullPath, obfuscatedCode, 'utf8');
    }
  });
};

directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    obfuscateFiles(dir);
  } else {
    console.log(`Build path not found: ${dir}`);
  }
});
