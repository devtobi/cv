const createDirectories = require('./helpers/createDirectories.js');
const execConcurrently = require('./helpers/execConcurrently.js');
const generateTasks = require('./helpers/generateTasks.js');
const { DATA_DIRECTORY, DIST_DIRECTORY } = require('./helpers/constants.js');

const BUILD_CMD = `resumed render ${DATA_DIRECTORY}/%s.json -o ${DIST_DIRECTORY}/%s/index.html -t $THEME`;

createDirectories();
const buildTasks = generateTasks('build-html', BUILD_CMD);
execConcurrently(buildTasks);
