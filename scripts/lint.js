
const { execSync } = require('child_process');

try {
  execSync('eslint src --fix', { stdio: 'inherit' });
  console.log('Linting completed');
} catch (error) {
  console.error('Linting failed');
  process.exit(1);
}
