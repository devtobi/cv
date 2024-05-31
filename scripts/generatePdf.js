const puppeteer = require("puppeteer");
const path = require("path");
const args = require("minimist")(process.argv.slice(2));

const INPUT_ARG = "input";
const OUTPUT_ARG = "output";

if (!args[INPUT_ARG] || !args[OUTPUT_ARG]) {
  console.log(
    "Either input or output is missing. Use --input and --output respectively.",
  );
  process.exit(0);
}

const filePath = path.join(__dirname, `../${args[INPUT_ARG]}`);
const outputPath = path.join(__dirname, `../${args[OUTPUT_ARG]}`);

const generateWithBrowser = async (filePath, outputPath) => {
  try {
    console.log(`Generating PDF for ${filePath}...`);
    const browser = await puppeteer.launch(),
      page = await browser.newPage();
    await page.goto(`file://${filePath}`);
    await page.pdf({
      path: outputPath,
      format: "A4",
      printBackground: true,
      displayHeaderFooter: false,
      margin: {
        top: "0mm",
        left: "0mm",
        right: "0mm",
        bottom: "0mm",
      },
    });
    await browser.close();
  } catch (error) {
    console.log(`Error generating PDF for ${filePath}: ${error}`);
    throw error;
  }
  console.log(`Successfully generated PDF for ${filePath}`);
};

generateWithBrowser(filePath, outputPath);
