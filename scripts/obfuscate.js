const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

const distPath = path.join(__dirname, '../dist');

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
      console.log(`Obfuscated: ${fullPath}`);
    }
  });
};

if (fs.existsSync(distPath)) {
  obfuscateFiles(distPath);
  console.log('Obfuscation completed.');
} else {
  console.log(`Dist path not found: ${distPath}`);
}
