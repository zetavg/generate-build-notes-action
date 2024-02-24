/** @type {import('@actions/core')} */
const core = require('@actions/core');

/** @type {import('@actions/github')} */
const github = require('@actions/github');

const generateBuildNotes = require('./generateBuildNotes');

(async () => {
  try {
    const debug = core.getInput('debug') === 'true';
    const prNumberStr = core.getInput('pr-number');
    const prNumber = prNumberStr ? parseInt(prNumberStr, 10) : undefined;
    const githubToken = core.getInput('github-token', { required: true });

    if (debug) {
      console.log('');

      if (prNumber) {
        console.log('PR number:', prNumber);
        console.log('');
      }

      console.log('GitHub context:');
      console.log(JSON.stringify(github.context, undefined, 2));
      console.log('');
      console.log('GITHUB_WORKSPACE:', process.env.GITHUB_WORKSPACE);
      console.log('');
    }

    const buildNotes = await generateBuildNotes(github.context, {
      githubToken,
      prNumber,
      debug,
    });
    core.setOutput('build-notes', buildNotes);

    console.log(
      '----------------------------------------------------------------',
    );
    console.log(buildNotes);
    console.log(
      '----------------------------------------------------------------',
    );
  } catch (error) {
    core.setFailed(error.message);
  }
})();
