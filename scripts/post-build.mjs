import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixImports(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
            fixImports(fullPath);
        } else if (file.name.endsWith('.js')) {
            let content = fs.readFileSync(fullPath, 'utf8');

            // 修复相对导入，添加.js扩展名
            content = content.replace(
                /(import\s+.*?\s+from\s+['"])(\..+?)(['"])/g,
                (match, start, importPath, end) => {
                    if (!importPath.endsWith('.js') && !importPath.endsWith('.json')) {
                        return `${start}${importPath}.js${end}`;
                    }
                    return match;
                }
            );

            fs.writeFileSync(fullPath, content);
        }
    }
}

// 修复ESM构建的导入
const esmDir = path.join(__dirname, '..', 'dist', 'esm');
if (fs.existsSync(esmDir)) {
    fixImports(esmDir);
    console.log('✅ ESM imports fixed');
}

// 为CJS构建创建package.json
const cjsDir = path.join(__dirname, '..', 'dist', 'cjs');
if (fs.existsSync(cjsDir)) {
    const cjsPackageJson = {
        type: "commonjs"
    };
    fs.writeFileSync(
        path.join(cjsDir, 'package.json'),
        JSON.stringify(cjsPackageJson, null, 2)
    );
    console.log('✅ CJS package.json created');
}

console.log('🎉 Post-build processing completed');
