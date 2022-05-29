const execSync = require('child_process').execSync;
const output = execSync('python3 chain.py', { encoding: 'utf-8' });
console.log('Output was:\n', output);