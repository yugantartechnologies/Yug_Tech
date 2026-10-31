const { spawn } = require('child_process');

console.log('====================================================');
console.log('Starting Yugantar Technologies Full-Stack Environment');
console.log('Backend Port: 5000 | Frontend Port: 3000');
console.log('====================================================');

// Start Express Backend Server
const server = spawn('node', ['server.js'], { stdio: 'inherit', shell: true });

// Start React Frontend Client
const client = spawn('npx', ['react-scripts', 'start'], { stdio: 'inherit', shell: true });

const cleanup = () => {
  try { server.kill(); } catch (e) {}
  try { client.kill(); } catch (e) {}
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);

