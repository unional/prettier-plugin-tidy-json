const cp = require('child_process')

cp.execSync('yarn tsc-silent -p tsconfig.cjs.json --suppress @')
