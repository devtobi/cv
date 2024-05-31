const concurrently = require("concurrently");
const util = require("util");
const getFiles = require("./getFiles.js");
const returnStatusCode = require("./returnStatusCode.js");

const DATA_DIRECTORY = "data";
const VALIDATE_CMD = "resumed validate %s";

const buildValidateTasks = () => {
  const files = getFiles(DATA_DIRECTORY);
  return files.map((file) => ({
    command: util.format(VALIDATE_CMD, file),
    name: "jsonschema",
  }));
};

const validateTasks = buildValidateTasks();
const { result } = concurrently(
  [
    { command: `prettier ${DATA_DIRECTORY} --check`, name: "prettier" },
    ...validateTasks,
  ],
  {
    killOthers: ["failure"],
  },
);
returnStatusCode(result);
