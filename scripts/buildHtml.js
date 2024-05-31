const createWebDirectories = require("./helpers/createWebDirectories.js");
const execConcurrently = require("./helpers/execConcurrently.js");
const generateTasks = require("./helpers/generateTasks.js");
const { DATA_DIRECTORY, WEB_DIRECTORY } = require("./helpers/constants.js");

const BUILD_CMD = `resumed render ${DATA_DIRECTORY}/%s.json -o ${WEB_DIRECTORY}/%s/index.html -t $THEME`;

createWebDirectories();
const buildTasks = generateTasks("build-html", BUILD_CMD);
execConcurrently(buildTasks);
