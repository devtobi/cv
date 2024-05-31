const concurrently = require("concurrently");
const util = require("util");
const path = require("path");
const fs = require("fs");
const getFiles = require("./getFiles.js");
const returnStatusCode = require("./returnStatusCode.js");

const DATA_DIRECTORY = "data";
const WEB_DIRECTORY = "dist/web";
const BUILD_CMD = `resumed render %s -o ${WEB_DIRECTORY}/%s/index.html -t $THEME`;

const buildBuildTasks = () => {
  const files = getFiles(DATA_DIRECTORY);
  return files.map((file) => {
    const dirname = path.parse(file).name;
    return {
      command: util.format(BUILD_CMD, file, dirname),
      name: "build",
    };
  });
};

const createDirectories = () => {
  const files = getFiles(DATA_DIRECTORY);
  files.forEach((file) => {
    const dirname = `${DIST_DIRECTORY}/${path.parse(file).name}`;
    try {
      fs.mkdirSync(dirname, { recursive: true });
    } catch (err) {
      console.error("Error creating directory:", err);
    }
  });
};

createDirectories();
const buildTasks = buildBuildTasks();
const { result } = concurrently(buildTasks, {
  killOthers: ["failure"],
});
returnStatusCode(result);
