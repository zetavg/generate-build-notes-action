const https = require('https');

/**
 * Fetch PR details.
 *
 * @param {import('@actions/github').context} githubContext
 * @param {number} prNumber
 * @param {Object} options - An options object.
 * @param {string} options.githubToken - The GitHub token.
 */
module.exports = function fetchPRDetails(
  githubContext,
  prNumber,
  { githubToken },
) {
  return new Promise((resolve, reject) => {
    const hostname = new URL(githubContext.apiUrl).hostname;
    const path = `/repos/${githubContext.payload.repository.full_name}/pulls/${prNumber}`;
    const options = {
      hostname,
      path,
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
              `Failed to fetch PR details: ${res.statusCode} - ${data} (https://${hostname}${path})` +
                (() => {
                  if (res.statusCode === 403) {
                    return '\nPlease make sure that you have:\n\n```\npermissions:\n  contents: read\n  pull-requests: read\n```\n\nset on your job.';
                  }

                  return '';
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
