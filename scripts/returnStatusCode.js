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

module.exports = returnStatusCode;
