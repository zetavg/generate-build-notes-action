/**
 * Fetch PR details.
 *
 * @param {import('@actions/github').context} githubContext
 * @param {number} prNumber
 * @param {Object} options - An options object.
 * @param {string} options.githubToken - The GitHub token.
 */
module.exports = function fetchPRDetails(githubContext, prNumber) {
  if (!githubContext) throw new Error(`githubContext is ${githubContext}`);
  if (!prNumber) throw new Error(`prNumber is ${prNumber}`);

  return new Promise((resolve) => {
    resolve({
      url: 'https://api.github.com/repos/user/repo/pulls/1',
      id: 1,
      node_id: '',
      html_url: 'https://github.com/user/repo/pull/1',
      diff_url: 'https://github.com/user/repo/pull/1.diff',
      patch_url: 'https://github.com/user/repo/pull/1.patch',
      issue_url: 'https://api.github.com/repos/user/repo/issues/1',
      number: 1,
      state: 'open',
      locked: false,
      title: 'This is the title of the PR',
      user: {
        login: 'user',
        id: 1,
        node_id: '',
        avatar_url: '',
        gravatar_id: '',
        url: 'https://api.github.com/users/user',
        html_url: 'https://github.com/user',
        followers_url: 'https://api.github.com/users/user/followers',
        following_url:
          'https://api.github.com/users/user/following{/other_user}',
        gists_url: 'https://api.github.com/users/user/gists{/gist_id}',
        starred_url: 'https://api.github.com/users/user/starred{/owner}{/repo}',
        subscriptions_url: 'https://api.github.com/users/user/subscriptions',
        organizations_url: 'https://api.github.com/users/user/orgs',
        repos_url: 'https://api.github.com/users/user/repos',
        events_url: 'https://api.github.com/users/user/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/user/received_events',
        type: 'User',
        site_admin: false,
      },
      body: 'This is the description of the PR.\r\n\r\n## Changes\r\n\r\n* Add a feature.\r\n* Add another feature.\r\n\r\n## References\r\n\r\n* [A link](https://example.com)\r\n* https://example.com',
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z',
      closed_at: null,
      merged_at: null,
      merge_commit_sha: '883f2484e51c34a187f518ddb7239e93291c0e1f',
      assignee: null,
      assignees: [],
      requested_reviewers: [],
      requested_teams: [],
      labels: [],
      milestone: null,
      draft: false,
      commits_url: 'https://api.github.com/repos/user/repo/pulls/1/commits',
      review_comments_url:
        'https://api.github.com/repos/user/repo/pulls/1/comments',
      review_comment_url:
        'https://api.github.com/repos/user/repo/pulls/comments{/number}',
      comments_url: 'https://api.github.com/repos/user/repo/issues/1/comments',
      statuses_url:
        'https://api.github.com/repos/user/repo/statuses/03f1e0b9fedbe11102c1b0deb44c37fe50e1d70d',
      head: {
        label: 'user:example-branch',
        ref: 'example-branch',
        sha: '03f1e0b9fedbe11102c1b0deb44c37fe50e1d70d',
        user: {
          login: 'user',
          id: 1,
          node_id: '',
          avatar_url: '',
          gravatar_id: '',
          url: 'https://api.github.com/users/user',
          html_url: 'https://github.com/user',
          followers_url: 'https://api.github.com/users/user/followers',
          following_url:
            'https://api.github.com/users/user/following{/other_user}',
          gists_url: 'https://api.github.com/users/user/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/user/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/user/subscriptions',
          organizations_url: 'https://api.github.com/users/user/orgs',
          repos_url: 'https://api.github.com/users/user/repos',
          events_url: 'https://api.github.com/users/user/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/user/received_events',
          type: 'User',
          site_admin: false,
        },
        repo: {
          id: 1,
          node_id: '',
          name: 'repo',
          full_name: 'user/repo',
          private: true,
          owner: {
            login: 'user',
            id: 1,
            node_id: '',
            avatar_url: '',
            gravatar_id: '',
            url: 'https://api.github.com/users/user',
            html_url: 'https://github.com/user',
            followers_url: 'https://api.github.com/users/user/followers',
            following_url:
              'https://api.github.com/users/user/following{/other_user}',
            gists_url: 'https://api.github.com/users/user/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/user/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/user/subscriptions',
            organizations_url: 'https://api.github.com/users/user/orgs',
            repos_url: 'https://api.github.com/users/user/repos',
            events_url: 'https://api.github.com/users/user/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/user/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/user/repo',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/user/repo',
          forks_url: 'https://api.github.com/repos/user/repo/forks',
          keys_url: 'https://api.github.com/repos/user/repo/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/user/repo/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/user/repo/teams',
          hooks_url: 'https://api.github.com/repos/user/repo/hooks',
          issue_events_url:
            'https://api.github.com/repos/user/repo/issues/events{/number}',
          events_url: 'https://api.github.com/repos/user/repo/events',
          assignees_url:
            'https://api.github.com/repos/user/repo/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/user/repo/branches{/branch}',
          tags_url: 'https://api.github.com/repos/user/repo/tags',
          blobs_url: 'https://api.github.com/repos/user/repo/git/blobs{/sha}',
          git_tags_url: 'https://api.github.com/repos/user/repo/git/tags{/sha}',
          git_refs_url: 'https://api.github.com/repos/user/repo/git/refs{/sha}',
          trees_url: 'https://api.github.com/repos/user/repo/git/trees{/sha}',
          statuses_url: 'https://api.github.com/repos/user/repo/statuses/{sha}',
          languages_url: 'https://api.github.com/repos/user/repo/languages',
          stargazers_url: 'https://api.github.com/repos/user/repo/stargazers',
          contributors_url:
            'https://api.github.com/repos/user/repo/contributors',
          subscribers_url: 'https://api.github.com/repos/user/repo/subscribers',
          subscription_url:
            'https://api.github.com/repos/user/repo/subscription',
          commits_url: 'https://api.github.com/repos/user/repo/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/user/repo/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/user/repo/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/user/repo/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/user/repo/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/user/repo/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/user/repo/merges',
          archive_url:
            'https://api.github.com/repos/user/repo/{archive_format}{/ref}',
          downloads_url: 'https://api.github.com/repos/user/repo/downloads',
          issues_url: 'https://api.github.com/repos/user/repo/issues{/number}',
          pulls_url: 'https://api.github.com/repos/user/repo/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/user/repo/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/user/repo/notifications{?since,all,participating}',
          labels_url: 'https://api.github.com/repos/user/repo/labels{/name}',
          releases_url: 'https://api.github.com/repos/user/repo/releases{/id}',
          deployments_url: 'https://api.github.com/repos/user/repo/deployments',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          pushed_at: '2024-01-01T00:00:00Z',
          git_url: 'git://github.com/user/repo.git',
          ssh_url: 'git@github.com:user/repo.git',
          clone_url: 'https://github.com/user/repo.git',
          svn_url: 'https://github.com/user/repo',
          homepage: 'https://github.com/user/t2785-action',
          size: 22,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 3,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: 'private',
          forks: 0,
          open_issues: 3,
          watchers: 0,
          default_branch: 'main',
        },
      },
      base: {
        label: 'user:main',
        ref: 'main',
        sha: '9d70f395f9ed011d1f69646732efd39273db9c3b',
        user: {
          login: 'user',
          id: 1,
          node_id: '',
          avatar_url: '',
          gravatar_id: '',
          url: 'https://api.github.com/users/user',
          html_url: 'https://github.com/user',
          followers_url: 'https://api.github.com/users/user/followers',
          following_url:
            'https://api.github.com/users/user/following{/other_user}',
          gists_url: 'https://api.github.com/users/user/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/user/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/user/subscriptions',
          organizations_url: 'https://api.github.com/users/user/orgs',
          repos_url: 'https://api.github.com/users/user/repos',
          events_url: 'https://api.github.com/users/user/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/user/received_events',
          type: 'User',
          site_admin: false,
        },
        repo: {
          id: 1,
          node_id: '',
          name: 'repo',
          full_name: 'user/repo',
          private: true,
          owner: {
            login: 'user',
            id: 1,
            node_id: '',
            avatar_url: '',
            gravatar_id: '',
            url: 'https://api.github.com/users/user',
            html_url: 'https://github.com/user',
            followers_url: 'https://api.github.com/users/user/followers',
            following_url:
              'https://api.github.com/users/user/following{/other_user}',
            gists_url: 'https://api.github.com/users/user/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/user/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/user/subscriptions',
            organizations_url: 'https://api.github.com/users/user/orgs',
            repos_url: 'https://api.github.com/users/user/repos',
            events_url: 'https://api.github.com/users/user/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/user/received_events',
            type: 'User',
            site_admin: false,
          },
          html_url: 'https://github.com/user/repo',
          description: null,
          fork: false,
          url: 'https://api.github.com/repos/user/repo',
          forks_url: 'https://api.github.com/repos/user/repo/forks',
          keys_url: 'https://api.github.com/repos/user/repo/keys{/key_id}',
          collaborators_url:
            'https://api.github.com/repos/user/repo/collaborators{/collaborator}',
          teams_url: 'https://api.github.com/repos/user/repo/teams',
          hooks_url: 'https://api.github.com/repos/user/repo/hooks',
          issue_events_url:
            'https://api.github.com/repos/user/repo/issues/events{/number}',
          events_url: 'https://api.github.com/repos/user/repo/events',
          assignees_url:
            'https://api.github.com/repos/user/repo/assignees{/user}',
          branches_url:
            'https://api.github.com/repos/user/repo/branches{/branch}',
          tags_url: 'https://api.github.com/repos/user/repo/tags',
          blobs_url: 'https://api.github.com/repos/user/repo/git/blobs{/sha}',
          git_tags_url: 'https://api.github.com/repos/user/repo/git/tags{/sha}',
          git_refs_url: 'https://api.github.com/repos/user/repo/git/refs{/sha}',
          trees_url: 'https://api.github.com/repos/user/repo/git/trees{/sha}',
          statuses_url: 'https://api.github.com/repos/user/repo/statuses/{sha}',
          languages_url: 'https://api.github.com/repos/user/repo/languages',
          stargazers_url: 'https://api.github.com/repos/user/repo/stargazers',
          contributors_url:
            'https://api.github.com/repos/user/repo/contributors',
          subscribers_url: 'https://api.github.com/repos/user/repo/subscribers',
          subscription_url:
            'https://api.github.com/repos/user/repo/subscription',
          commits_url: 'https://api.github.com/repos/user/repo/commits{/sha}',
          git_commits_url:
            'https://api.github.com/repos/user/repo/git/commits{/sha}',
          comments_url:
            'https://api.github.com/repos/user/repo/comments{/number}',
          issue_comment_url:
            'https://api.github.com/repos/user/repo/issues/comments{/number}',
          contents_url:
            'https://api.github.com/repos/user/repo/contents/{+path}',
          compare_url:
            'https://api.github.com/repos/user/repo/compare/{base}...{head}',
          merges_url: 'https://api.github.com/repos/user/repo/merges',
          archive_url:
            'https://api.github.com/repos/user/repo/{archive_format}{/ref}',
          downloads_url: 'https://api.github.com/repos/user/repo/downloads',
          issues_url: 'https://api.github.com/repos/user/repo/issues{/number}',
          pulls_url: 'https://api.github.com/repos/user/repo/pulls{/number}',
          milestones_url:
            'https://api.github.com/repos/user/repo/milestones{/number}',
          notifications_url:
            'https://api.github.com/repos/user/repo/notifications{?since,all,participating}',
          labels_url: 'https://api.github.com/repos/user/repo/labels{/name}',
          releases_url: 'https://api.github.com/repos/user/repo/releases{/id}',
          deployments_url: 'https://api.github.com/repos/user/repo/deployments',
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z',
          pushed_at: '2024-01-01T00:00:00Z',
          git_url: 'git://github.com/user/repo.git',
          ssh_url: 'git@github.com:user/repo.git',
          clone_url: 'https://github.com/user/repo.git',
          svn_url: 'https://github.com/user/repo',
          homepage: 'https://github.com/user/t2785-action',
          size: 22,
          stargazers_count: 0,
          watchers_count: 0,
          language: null,
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          has_discussions: false,
          forks_count: 0,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 3,
          license: null,
          allow_forking: true,
          is_template: false,
          web_commit_signoff_required: false,
          topics: [],
          visibility: 'private',
          forks: 0,
          open_issues: 3,
          watchers: 0,
          default_branch: 'main',
        },
      },
      _links: {
        self: {
          href: 'https://api.github.com/repos/user/repo/pulls/1',
        },
        html: {
          href: 'https://github.com/user/repo/pull/1',
        },
        issue: {
          href: 'https://api.github.com/repos/user/repo/issues/1',
        },
        comments: {
          href: 'https://api.github.com/repos/user/repo/issues/1/comments',
        },
        review_comments: {
          href: 'https://api.github.com/repos/user/repo/pulls/1/comments',
        },
        review_comment: {
          href: 'https://api.github.com/repos/user/repo/pulls/comments{/number}',
        },
        commits: {
          href: 'https://api.github.com/repos/user/repo/pulls/1/commits',
        },
        statuses: {
          href: 'https://api.github.com/repos/user/repo/statuses/03f1e0b9fedbe11102c1b0deb44c37fe50e1d70d',
        },
      },
      author_association: 'OWNER',
      auto_merge: null,
      active_lock_reason: null,
      merged: false,
      mergeable: null,
      rebaseable: null,
      mergeable_state: 'unknown',
      merged_by: null,
      comments: 0,
      review_comments: 0,
      maintainer_can_modify: false,
      commits: 6,
      additions: 3,
      deletions: 1,
      changed_files: 6,
    });
  });
};
