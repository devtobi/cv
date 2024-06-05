const execConcurrently = require('./helpers/execConcurrently.js')
const generateTasks = require('./helpers/generateTasks.js')
const { DIST_DIRECTORY } = require('./helpers/constants.js')

const GENERATE_PDF_CMD = `node scripts/helpers/generatePdf.js --input ${DIST_DIRECTORY}/%s/index.html --output ${DIST_DIRECTORY}/%s/cv.pdf`

const generatePdfTasks = generateTasks('build-pdf', GENERATE_PDF_CMD)
execConcurrently(generatePdfTasks)
