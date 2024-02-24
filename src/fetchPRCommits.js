const https = require('https');

/**
 * Fetch PR commits.
 *
 * @param {import('@actions/github').context} githubContext
 * @param {number} prNumber
 * @param {Object} options - An options object.
 * @param {string} options.githubToken - The GitHub token.
 */
module.exports = function fetchPRCommits(
  githubContext,
  prNumber,
  { githubToken },
) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: new URL(githubContext.apiUrl).hostname,
      path: `/repos/${githubContext.payload.repository.full_name}/pulls/${prNumber}/commits`,
      method: 'GET',
      headers: {
        Authorization: `token ${githubToken}`,
        'User-Agent': 'node/https',
      },
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          reject(
            new Error(
              `Failed to fetch PR commits: ${res.statusCode} - ${data}` +
                (() => {
                  if (res.statusCode === 403) {
                    return '\nPlease make sure that you have:\n\n```\npermissions:\n  contents: read\n  pull-requests: read\n```\n\nset on your job.';
                  }
                })(),
            ),
          );
          return;
        }

        resolve(JSON.parse(data));
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
};
