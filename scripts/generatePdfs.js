const concurrently = require("concurrently");
const path = require("path");
const util = require("util");
const getFiles = require("./getFiles.js");
const returnStatusCode = require("./returnStatusCode.js");

const DATA_DIRECTORY = "data";
const DIST_DIRECTORY = "dist";
const WEB_DIRECTORY = `${DIST_DIRECTORY}/web`;
const PDF_DIRECTORY = `${DIST_DIRECTORY}/pdf`;
const GENERATE_PDF_CMD = `node scripts/generatePdf.js --input ${WEB_DIRECTORY}/%s/index.html --output ${PDF_DIRECTORY}/%s.pdf`;

const buildGeneratePdfTasks = () => {
  const files = getFiles(DATA_DIRECTORY);
  return files.map((file) => {
    const dirname = path.parse(file).name;
    return {
      command: util.format(GENERATE_PDF_CMD, dirname, dirname),
      name: "pdf",
    };
  });
};
const generatePdfTasks = buildGeneratePdfTasks();
const { result } = concurrently(generatePdfTasks, {
  killOthers: ["failure"],
});
returnStatusCode(result);
