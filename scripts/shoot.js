const puppeteer = require("puppeteer-core");
const path = require("path");

const OUT = path.join(__dirname, "..", "mockups");
const URL = "http://localhost:4599/index.html";

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "/usr/bin/google-chrome",
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--hide-scrollbars"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
  // let framer-motion reveal animations settle
  await new Promise((r) => setTimeout(r, 2500));

  // Above-the-fold hero
  await page.screenshot({
    path: path.join(OUT, "01-hero.png"),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });

  // Full page
  await page.screenshot({
    path: path.join(OUT, "02-full.png"),
    fullPage: true,
  });

  // Mobile
  const m = await browser.newPage();
  await m.setViewport({ width: 390, height: 844, deviceScaleFactor: 3 });
  await m.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2500));
  await m.screenshot({
    path: path.join(OUT, "03-mobile.png"),
    clip: { x: 0, y: 0, width: 390, height: 844 },
  });

  await browser.close();
  console.log("done");
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
