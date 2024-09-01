const fs = require('fs');
const path = require('path');
const JavaScriptObfuscator = require('javascript-obfuscator');
const { transformSync } = require('@babel/core');
const typescript = require('typescript');

const distPath = path.join(__dirname, '../dist');

// Function to transpile TypeScript or JSX to JavaScript
const transpileCode = (code, filePath) => {
  const babelOptions = {
    filename: filePath,
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    plugins: ['@babel/plugin-transform-runtime']
  };

  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    return typescript.transpileModule(code, {
      compilerOptions: { module: typescript.ModuleKind.CommonJS }
    }).outputText;
  } else if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
    return transformSync(code, babelOptions).code;
  }
  return code;
};

const obfuscateFiles = (dir) => {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      obfuscateFiles(fullPath);
    } else if (['.js', '.jsx', '.ts', '.tsx'].includes(path.extname(file))) {
      const code = fs.readFileSync(fullPath, 'utf8');
      const transpiledCode = transpileCode(code, fullPath);
      const obfuscatedCode = JavaScriptObfuscator.obfuscate(transpiledCode, {
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
