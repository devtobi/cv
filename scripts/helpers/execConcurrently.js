const concurrently = require("concurrently");

const returnStatusCode = (result) => {
  result.then(
    () => {
      process.exit(0);
    },
    () => {
      process.exit(1);
    },
  );
};

const execConcurrently = (taskList) => {
  const { result } = concurrently(taskList, {
    killOthers: ["failure"],
  });
  returnStatusCode(result);
};

module.exports = execConcurrently;
