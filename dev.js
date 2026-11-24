const { spawn } = require('child_process');
const isWin = process.platform === 'win32';
const npmCmd = isWin ? 'npm.cmd' : 'npm';

console.log('====================================================');
console.log('Starting Yugantar Technologies Full-Stack Environment');
console.log('Backend Port: 5000 | Frontend Port: 3000');
console.log('====================================================');

// Start Express Backend Server
const server = spawn('node', ['server.js'], { stdio: 'inherit', shell: true });

// Start React Frontend Client
const client = spawn(npmCmd, ['run', 'client'], { stdio: 'inherit', shell: true });

const cleanup = () => {
  try { server.kill(); } catch (e) {}
  try { client.kill(); } catch (e) {}
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

