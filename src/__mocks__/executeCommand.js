module.exports = function executeCommand(command) {
  switch (command) {
    case 'git rev-parse HEAD':
      return '5964e4b0c9b91d85ba5b99d29d07a1be78f776b7';
    case 'git log -1 --pretty=%B':
      return 'this is a commit message';
    case 'git log -1 --pretty=%an':
      return 'User';
    default:
      throw new Error(`Unhandled command: ${command}`);
  }
};
