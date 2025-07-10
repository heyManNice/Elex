import type { Plugin } from 'vite';
import fs from 'fs'
import path from 'path'

//vite插件，处理.elex文件
export function elex(): Plugin {
    return {
        name: 'elex',
        enforce: 'pre',
        transform(code, id) {
            if (!id.endsWith('.elex')) {
                return { code };
            }
            return _transform(code, id);
        },
        generateBundle(options, outputBundle) {
            let js = "";
            for (const key in outputBundle) {
                //console.log(outputBundle[key]);
                const file = outputBundle[key];
                if (file.type === 'chunk') {
                    const chunk = file;
                    js += chunk.code;
                }
            }

            const outDir = options.dir || 'dist';
            const htmlContent = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
</body>
<script>${js}</script>
</html>
      `.trim();
            const htmlFilePath = path.join(outDir, 'index.html');
            fs.writeFileSync(htmlFilePath, htmlContent);
            console.log(`Generated ${htmlFilePath}`);
            Object.keys(outputBundle).forEach(key => {
                delete outputBundle[key];
            });
        }

    }
}

function _transform(code, id) {
    if (id.endsWith('main.elex')) {
        return {
            code: `window.addEventListener('load',()=>{alert('ok')})`,
            map: null
        }
    }
    return {
        code: code,
        map: null
    }
}