import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL || "http://localhost:3003";
const OUT = "mockups";
const CHROME =
  process.env.CHROME_PATH || "/usr/bin/google-chrome-stable";

const pages = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "sectors", path: "/sectors" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
];

const viewports = [
  { label: "desktop", width: 1440, height: 900, dsf: 2 },
  { label: "mobile", width: 390, height: 844, dsf: 2, mobile: true },
];

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu", "--hide-scrollbars"],
});

try {
  for (const vp of viewports) {
    const page = await browser.newPage();
    // Show final states instantly (counters, etc.) for clean captures.
    await page.emulateMediaFeatures([
      { name: "prefers-reduced-motion", value: "reduce" },
    ]);
    await page.setViewport({
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: vp.dsf,
      isMobile: !!vp.mobile,
      hasTouch: !!vp.mobile,
    });

    for (const p of pages) {
      const url = `${BASE}${p.path}`;
      await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
      // Let fonts settle and scroll-triggered animations reveal.
      await page.evaluate(async () => {
        await new Promise((r) => {
          let y = 0;
          const step = () => {
            window.scrollTo(0, y);
            y += Math.round(window.innerHeight * 0.6);
            if (y < document.body.scrollHeight) {
              setTimeout(step, 140);
            } else {
              window.scrollTo(0, 0);
              setTimeout(r, 400);
            }
          };
          step();
        });
      });
      // Force any remaining scroll-reveal content to its visible state so the
      // full-page capture never shows mid-animation blank sections. Opacity-only
      // (transforms are left intact so the off-canvas mobile drawer stays hidden).
      await page.addStyleTag({
        content:
          "*{opacity:1 !important;} [style*='translate']{transform:none !important;} .fixed.inset-0{transform:translateX(100%) !important;}",
      });
      await new Promise((r) => setTimeout(r, 700));

      const file = `${OUT}/${p.name}-${vp.label}.png`;
      await page.screenshot({ path: file, fullPage: true });
      console.log(`saved ${file}`);
    }

    await page.close();
  }
} finally {
  await browser.close();
}
