module.exports = function markdownToText(markdownString) {
  const lines = markdownString
    .trim()
    .split('\n')
    .map((line) => line.trim())
    .map((line) => {
      // Remove '#' characters from headings
      line = line.replace(/^#+\s*/, '');

      // Replace '*' bullet points with ' • '
      line = line.replace(/^\*\s+/, ' • ');

      // Remove single inline code backticks (leaving triple backticks intact)
      line = line.replace(/([^`])`([^`]+)`([^`])/g, '$1$2$3');

      // Remove inline bold and italics
      line = line.replace(/[_*]{1,2}(.+?)[_*]{1,2}/g, '$1');

      // Remove inline links, keep link text only
      line = line.replace(/\[(.+?)\]\(.+?\)/g, '$1');

      // Remove inline images, keep alt text only
      line = line.replace(/!\[(.*?)\]\(.+?\)/g, '$1');

      // Remove block quotes markers
      line = line.replace(/^>\s*/, '');

      return line;
    });

  return lines.join('\n').replace(/\n{3,}/g, '\n\n');
};
