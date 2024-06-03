const execConcurrently = require("./helpers/execConcurrently.js");
const generateTasks = require("./helpers/generateTasks.js");
const { WEB_DIRECTORY } = require("./helpers/constants.js");

const MINIFY_CMD = `html-minifier-terser -c minifier-config.json ${WEB_DIRECTORY}/%s/index.html -o ${WEB_DIRECTORY}/%s/index.html`;

const minifyTasks = generateTasks("minify", MINIFY_CMD);
execConcurrently(minifyTasks);
