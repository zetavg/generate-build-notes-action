# Generate Build Notes

Outputs pure-text build notes for your builds on GitHub. The generated notes can be attached to your build or sent to other services on subsequent steps or jobs for your users, testers, or other developers as a reference.

## Usage

### Using build notes in subsequent steps

```yaml
# ...

jobs:
  build:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read # This is required for zetavg/generate-build-notes-action to read details of pull requests
    steps:
      - name: Checkout code # Note that it's required to checkout the code before using zetavg/generate-build-notes-action
        uses: actions/checkout@v4
        with:
          fetch-depth: 1
      - name: Generate build notes
        id: generate-build-notes
        uses: zetavg/generate-build-notes-action@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
      - name: Build
        env:
          BUILD_NOTES: ${{ steps.generate-build-notes.outputs.build-notes }}
        run: |
          # Your build commands here
          # ...

          # Sample usage of the build notes
          echo "$BUILD_NOTES" > build-notes.txt
          cat build-notes.txt
```

### Using build notes in subsequent jobs

```yaml
# ...

jobs:
  generate-build-notes:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: read # This is required for zetavg/generate-build-notes-action to read details of pull requests
    outputs:
      build-notes: ${{ steps.generate-build-notes.outputs.build-notes }}
    steps:
      - name: Checkout code # Note that it's required to checkout the code before using zetavg/generate-build-notes-action
        uses: actions/checkout@v4
        with:
          fetch-depth: 1
      - name: Generate build notes
        id: generate-build-notes
        uses: zetavg/generate-build-notes-action@v1
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}

  build-ios:
    runs-on: ubuntu-latest
    needs: generate-build-notes
    steps:
      - name: Build
        env:
          BUILD_NOTES: ${{ needs.generate-build-notes.outputs.build-notes }}
        run: |
          # Your build commands here
          # ...

          # Sample usage of the build notes
          echo "$BUILD_NOTES" > build-notes.txt
          cat build-notes.txt

  build-android:
    runs-on: ubuntu-latest
    needs: generate-build-notes
    steps:
      - name: Build
        env:
          BUILD_NOTES: ${{ needs.generate-build-notes.outputs.build-notes }}
        run: |
          # Your build commands here
          # ...

          # Sample usage of the build notes
          echo "$BUILD_NOTES" > build-notes.txt
          cat build-notes.txt
```

## Generated Build Note Samples

### Push

```
Build of branch "main": add a awesome feature

Latest commits:
 • [11adb604] add a awesome feature - @user1
 • [f52fdb2d] prepare adding a awesome feature - @user1
 • [71427497] fix bug - Example User
```

### Pull Request

```
Build of PR #1: This is the title of the PR (by @user1) [main ← example-branch]

This is the description of the PR. [...]

Commits:
 • [85007495] commit 1 - @user1
 • [b8124acd] commit 2 - @user2
 • [992841f2] commit 3 - @user1

View pull request: https://github.com/user/repo/pull/1
```

### Release

```
v1.2.3

New Features

 • Feature 1.
 • Feature 2.
 • Feature 3.
 • Feature 4.

Changes

 • Change 1.
 • Change 2.

Bug Fixes

 • Fix bug 1.
 • Fix bug 2.

See the full release note at https://github.com/user/repo/releases/tag/v1.2.3
```

### Schedule

```
Scheduled build of branch "main"
Last commit: [5964e4b0] this is a commit message - @user
```

### Workflow Dispatch

```
Manual build of "main", triggered by @user
Last commit: [5964e4b0] this is a commit message - @user
```
