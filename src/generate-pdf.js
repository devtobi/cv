const puppeteer = require("puppeteer");
const path = require("path");
const filePath = path.resolve(__dirname, "../dist/web/index.html");

const generateWithBrowser = async () => {
  console.log("Generating PDF by opening HTML file in Chrome...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file:///${filePath}`);
  await page.pdf({
    path: "dist/resume.pdf",
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
  console.log("Successfully generated PDF file!");
};

generateWithBrowser();
