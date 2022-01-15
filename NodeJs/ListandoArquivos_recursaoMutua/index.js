const fs = require('fs').promises;
const path = require('path');

async function readdir(rootDir) {
    rootDir ||= path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    await walk(files, rootDir);
}

async function walk(files, rootDir) {
    for( let fileName of files) {
        const file = path.resolve(rootDir, fileName);
        const status = await fs.stat(file);
        if(/\.git/g.test(file)) continue;
        if(/node_modules/g.test(file)) continue;
        if(status.isDirectory()) {
            await readdir(file);
            continue;
        }
        if(!/.css$/.test(file) && !/.html$/.test(file)) continue;
        console.log(file);
    };
}

readdir('../');

