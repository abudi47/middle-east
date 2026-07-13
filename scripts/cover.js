const puppeteer = require("puppeteer-core");
const path = require("path");

const FILE = "file://" + path.join(__dirname, "..", "mockups", "cover.html");
const OUT = path.join(__dirname, "..", "mockups", "upwork-cover.png");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--hide-scrollbars"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 900, deviceScaleFactor: 2 });
  await page.goto(FILE, { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 1200));
  await page.screenshot({
    path: OUT,
    clip: { x: 0, y: 0, width: 1600, height: 900 },
  });
  await browser.close();
  console.log("done");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
