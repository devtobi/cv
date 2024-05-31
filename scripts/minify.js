const concurrently = require("concurrently");
const util = require("util");
const path = require("path");
const getFiles = require("./getFiles.js");
const returnStatusCode = require("./returnStatusCode.js");

const DATA_DIRECTORY = "data";
const WEB_DIRECTORY = "dist/web";
const MINIFY_CMD = `html-minifier-terser -c minifier-config.json ${WEB_DIRECTORY}/%s/index.html -o ${WEB_DIRECTORY}/%s/index.html`;

const buildMinifyTasks = () => {
  const files = getFiles(DATA_DIRECTORY);
  return files.map((file) => {
    const dirname = path.parse(file).name;
    return {
      command: util.format(MINIFY_CMD, dirname, dirname),
      name: "minify",
    };
  });
};

const minifyTasks = buildMinifyTasks();
const { result } = concurrently(minifyTasks, {
  killOthers: ["failure"]
});
returnStatusCode(result);
