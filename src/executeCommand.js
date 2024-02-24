const { execSync } = require('child_process');

module.exports = function executeCommand(command) {
  const output = execSync(command, {
    encoding: 'utf-8',
    cwd: process.env.GITHUB_WORKSPACE,
  });
  return output.trim();
};
