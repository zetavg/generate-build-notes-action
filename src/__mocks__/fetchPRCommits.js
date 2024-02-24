/**
 * Fetch PR commits.
 *
 * @param {import('@actions/github').context} githubContext
 * @param {number} prNumber
 * @param {Object} options - An options object.
 * @param {string} options.githubToken - The GitHub token.
 */
module.exports = function fetchPRCommits() {
  return new Promise((resolve) => {
    resolve([
      {
        sha: '8500749533fb229cf439d62067a769447711196c',
        node_id:
          'C_kwDOLVHO0toAKDg1MDA3NDk1MzNmYjIyOWNmNDM5ZDYyMDY3YTc2OTQ0NzcxMTE5NmM',
        commit: {
          author: {
            name: 'User One',
            username: 'user1',
            email: 'user1@example.com',
            date: '2024-01-01T00:00:00Z',
          },
          committer: {
            name: 'User One',
            username: 'user1',
            email: 'user1@example.com',
            date: '2024-01-01T00:00:00Z',
          },
          message: 'commit 1',
          tree: {
            sha: 'd026d1269783bc81de14b76fea7cd062312ee2d8',
            url: 'https://api.github.com/repos/user/repo/git/trees/d026d1269783bc81de14b76fea7cd062312ee2d8',
          },
          url: 'https://api.github.com/repos/user/repo/git/commits/8500749533fb229cf439d62067a769447711196c',
          comment_count: 0,
          verification: {
            verified: false,
            reason: 'no_user',
            signature: '',
            payload: '',
          },
        },
        url: 'https://api.github.com/repos/user/repo/commits/8500749533fb229cf439d62067a769447711196c',
        html_url:
          'https://github.com/user/repo/commit/8500749533fb229cf439d62067a769447711196c',
        comments_url:
          'https://api.github.com/repos/user/repo/commits/8500749533fb229cf439d62067a769447711196c/comments',
        author: null,
        committer: null,
        parents: [
          {
            sha: '3157a3fa10ff5e4a28ad0ad4d7fe98ce437195a9',
            url: 'https://api.github.com/repos/user/repo/commits/3157a3fa10ff5e4a28ad0ad4d7fe98ce437195a9',
            html_url:
              'https://github.com/user/repo/commit/3157a3fa10ff5e4a28ad0ad4d7fe98ce437195a9',
          },
        ],
      },
      {
        sha: 'b8124acdf21f1449371d76792d8b7f1a95d7b858',
        node_id:
          'C_kwDOLVHO0toAKGI4MTI0YWNkZjIxZjE0NDkzNzFkNzY3OTJkOGI3ZjFhOTVkN2I4NTg',
        commit: {
          author: {
            name: 'User Two',
            email: 'user2@example.com',
            date: '2024-01-01T00:00:00Z',
          },
          committer: {
            name: 'User Two',
            email: 'user2@example.com',
            date: '2024-01-01T00:00:00Z',
          },
          message: 'commit 2',
          tree: {
            sha: '269ae3febe8225ca978eabdd3c9be362247d6802',
            url: 'https://api.github.com/repos/user/repo/git/trees/269ae3febe8225ca978eabdd3c9be362247d6802',
          },
          url: 'https://api.github.com/repos/user/repo/git/commits/b8124acdf21f1449371d76792d8b7f1a95d7b858',
          comment_count: 0,
          verification: {
            verified: false,
            reason: 'no_user',
            signature: '',
            payload: '',
          },
        },
        url: 'https://api.github.com/repos/user/repo/commits/b8124acdf21f1449371d76792d8b7f1a95d7b858',
        html_url:
          'https://github.com/user/repo/commit/b8124acdf21f1449371d76792d8b7f1a95d7b858',
        comments_url:
          'https://api.github.com/repos/user/repo/commits/b8124acdf21f1449371d76792d8b7f1a95d7b858/comments',
        author: null,
        committer: null,
        parents: [
          {
            sha: '8500749533fb229cf439d62067a769447711196c',
            url: 'https://api.github.com/repos/user/repo/commits/8500749533fb229cf439d62067a769447711196c',
            html_url:
              'https://github.com/user/repo/commit/8500749533fb229cf439d62067a769447711196c',
          },
        ],
      },
      {
        sha: '992841f20914ea18a178bc5f9fc0d10fe3470ca3',
        node_id:
          'C_kwDOLVHO0toAKDk5Mjg0MWYyMDkxNGVhMThhMTc4YmM1ZjlmYzBkMTBmZTM0NzBjYTM',
        commit: {
          author: {
            name: 'User One',
            username: 'user1',
            email: 'user1@example.com',
            date: '2024-01-01T00:00:00Z',
          },
          committer: {
            name: 'User One',
            username: 'user1',
            email: 'user1@example.com',
            date: '2024-01-01T00:00:00Z',
          },
          message: 'commit 3',
          tree: {
            sha: '52060fa771926d4297dcf982ccc1cc45fd0605ae',
            url: 'https://api.github.com/repos/user/repo/git/trees/52060fa771926d4297dcf982ccc1cc45fd0605ae',
          },
          url: 'https://api.github.com/repos/user/repo/git/commits/992841f20914ea18a178bc5f9fc0d10fe3470ca3',
          comment_count: 0,
          verification: {
            verified: false,
            reason: 'no_user',
            signature: '',
            payload: '',
          },
        },
        url: 'https://api.github.com/repos/user/repo/commits/992841f20914ea18a178bc5f9fc0d10fe3470ca3',
        html_url:
          'https://github.com/user/repo/commit/992841f20914ea18a178bc5f9fc0d10fe3470ca3',
        comments_url:
          'https://api.github.com/repos/user/repo/commits/992841f20914ea18a178bc5f9fc0d10fe3470ca3/comments',
        author: null,
        committer: null,
        parents: [
          {
            sha: 'b8124acdf21f1449371d76792d8b7f1a95d7b858',
            url: 'https://api.github.com/repos/user/repo/commits/b8124acdf21f1449371d76792d8b7f1a95d7b858',
            html_url:
              'https://github.com/user/repo/commit/b8124acdf21f1449371d76792d8b7f1a95d7b858',
          },
        ],
      },
    ]);
  });
};
