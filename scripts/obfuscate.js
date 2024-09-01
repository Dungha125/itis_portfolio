const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');

const buildPath = path.join(__dirname, '../.next/static');

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

if (fs.existsSync(buildPath)) {
  obfuscateFiles(buildPath);
} else {
  console.log(`Build path not found: ${buildPath}`);
}
