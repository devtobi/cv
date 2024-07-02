const execConcurrently = require('./helpers/execConcurrently.js');
const generateTasks = require('./helpers/generateTasks.js');
const { DIST_DIRECTORY } = require('./helpers/constants.js');

const OPTIMIZE_FOR_WEBCOMPONENTS_TASK = `node scripts/helpers/optimizeForWebComponent.js --input ${DIST_DIRECTORY}/%s/index.html --output ${DIST_DIRECTORY}/%s/index.html`;

const generatePdfTasks = generateTasks(
  'optimize-webcomponents',
  OPTIMIZE_FOR_WEBCOMPONENTS_TASK,
);
execConcurrently(generatePdfTasks);
