const execConcurrently = require('./helpers/execConcurrently.js');
const generateTasks = require('./helpers/generateTasks.js');
const { DATA_DIRECTORY } = require('./helpers/constants.js');

const VALIDATE_CMD = `resumed validate ${DATA_DIRECTORY}/%s.json`;

const validateTasks = generateTasks('jsonschema', VALIDATE_CMD);
const tasks = [
  { command: `prettier ${DATA_DIRECTORY} --check`, name: 'prettier' },
  ...validateTasks,
];
execConcurrently(tasks);
