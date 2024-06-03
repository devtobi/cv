const execConcurrently = require("./helpers/execConcurrently.js");
const createPdfDirectory = require("./helpers/createPdfDirectory.js");
const generateTasks = require("./helpers/generateTasks.js");
const { WEB_DIRECTORY, PDF_DIRECTORY } = require("./helpers/constants.js");

const GENERATE_PDF_CMD = `node scripts/helpers/generatePdf.js --input ${WEB_DIRECTORY}/%s/index.html --output ${PDF_DIRECTORY}/%s.pdf`;

createPdfDirectory();
const generatePdfTasks = generateTasks("build-pdf", GENERATE_PDF_CMD);
execConcurrently(generatePdfTasks);
