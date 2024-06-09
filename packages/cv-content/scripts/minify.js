const execConcurrently = require('./helpers/execConcurrently.js');
const generateTasks = require('./helpers/generateTasks.js');
const { DIST_DIRECTORY } = require('./helpers/constants.js');

const MINIFY_CMD = `html-minifier-terser -c minifier-config.json ${DIST_DIRECTORY}/%s/index.html -o ${DIST_DIRECTORY}/%s/index.html`;

const minifyTasks = generateTasks('minify', MINIFY_CMD);
execConcurrently(minifyTasks);
