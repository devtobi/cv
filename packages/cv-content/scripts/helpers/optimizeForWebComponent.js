const path = require('path');
const { readFile, writeFile } = require('node:fs').promises;
const args = require('minimist')(process.argv.slice(1));

const INPUT_ARG = 'input';
const OUTPUT_ARG = 'output';

const ENCODING = 'utf8';

if (!args[INPUT_ARG] || !args[OUTPUT_ARG]) {
  console.log(
    'Either input or output is missing. Use --input and --output respectively.',
  );
  process.exit(0);
}

const filePath = path.join(__dirname, `../../${args[INPUT_ARG]}`);
const outputPath = path.join(__dirname, `../../${args[OUTPUT_ARG]}`);

const replaceInCSSofHTML = async (
  inputPath,
  outputPath,
  searchString,
  replacementString,
) => {
  console.log(
    `Replacing ${searchString} with ${replacementString} in ${inputPath}`,
  );
  const data = await readFile(inputPath, ENCODING);
  const cssRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  const replaceRegex = new RegExp(`${searchString}([^\\s{,]*)`, 'g');
  const result = data.replace(cssRegex, (match, cssContent) => {
    const modifiedStyleContent = cssContent.replace(
      replaceRegex,
      replacementString,
    );
    return match.replace(cssContent, modifiedStyleContent);
  });
  await writeFile(outputPath, result, ENCODING);
  console.log(`Wrote replaced content to ${outputPath}`);
};

const optimizeForWebComponent = async (inputPath, outputPath) => {
  await replaceInCSSofHTML(inputPath, outputPath, ':root', ':root$1,:host$1');
  await replaceInCSSofHTML(inputPath, outputPath, 'body', 'body$1,:host$1');
};

optimizeForWebComponent(filePath, outputPath);
