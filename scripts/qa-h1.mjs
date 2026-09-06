import { chromium, firefox, webkit } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs/promises";
import assert from "node:assert/strict";
const url = process.env.HORIZON_QA_URL || "http://127.0.0.1:3000";
const type = process.env.H1_BROWSER || "chromium";
const browser = await { chromium, firefox, webkit }[type].launch({
  headless: true,
  ...(type === "chromium"
    ? {
        executablePath:
          process.env.HORIZON_BROWSER_PATH ||
          "/Users/m5/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing",
      }
    : {}),
});
const context = await browser.newContext({
  viewport: { width: 1440, height: 1100 },
  colorScheme: "light",
  acceptDownloads: true,
});
const page = await context.newPage();
const report = {
  browser: type,
  responsive: [],
  accessibility: [],
  interactions: [],
  errors: [],
};
page.on("pageerror", (e) => report.errors.push(e.message));
await fs.mkdir("artifacts/qa", { recursive: true });
async function checkAxe(label) {
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  report.accessibility.push({
    label,
    violations: result.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => ({
        target: n.target,
        summary: n.failureSummary,
      })),
    })),
  });
}
try {
  const response = await page.goto(url + "/research/h1");
  assert.equal(response.status(), 200);
  await page.locator(".h1-timestamp").waitFor();
  await page
    .locator(".h1-world-pin")
    .first()
    .waitFor({ state: "attached", timeout: 30000 });
  assert.equal(await page.locator("canvas").count(), 1);
  report.interactions.push("3D model loaded");
  await page.getByRole('button',{name:'Enter full-screen study'}).click();
  assert.equal(await page.locator('.h1-experience').getAttribute('data-full-view'),'study');
  assert.ok(await page.getByRole('slider',{name:'Time of demo day'}).isVisible());
  await page.screenshot({path:`artifacts/qa/h1-${type}-fullscreen-study.png`});
  await page.getByRole('button',{name:'Exit full-screen view'}).click();
  await page.waitForFunction(()=>document.querySelector('.h1-experience').dataset.fullView==='none');
  assert.equal(await page.locator('.h1-experience').getAttribute('data-full-view'),'none');
  await page.getByRole('button',{name:'Expand model view'}).click();
  assert.equal(await page.locator('.h1-experience').getAttribute('data-full-view'),'model');
  const fullHeight=await page.locator('.h1-stage').evaluate(e=>e.getBoundingClientRect().height);
  assert.ok(fullHeight>=1098);
  await page.screenshot({path:`artifacts/qa/h1-${type}-fullscreen-model.png`});
  await page.keyboard.press('Escape');
  await page.waitForFunction(()=>document.querySelector('.h1-experience').dataset.fullView==='none');
  report.interactions.push('Full-screen study, expanded model and Escape exit');
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({
    path: `artifacts/qa/h1-${type}-desktop.png`,
    fullPage: true,
  });
  for (const width of [360, 390, 768, 1024, 1440, 1728]) {
    await page.setViewportSize({ width, height: 1000 });
    const actual = await page.evaluate(() => ({
      width: innerWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    report.responsive.push(actual);
    assert.ok(actual.scroll <= width, JSON.stringify(actual));
  }
  await page.setViewportSize({ width: 1440, height: 1100 });
  await checkAxe("desktop light");
  await page.evaluate(() => (document.documentElement.dataset.theme = "dark"));
  await checkAxe("desktop dark");
  await page.screenshot({
    path: `artifacts/qa/h1-${type}-dark.png`,
    fullPage: true,
  });
  await page.evaluate(() => (document.documentElement.dataset.theme = "light"));
  for (const id of [
    "sunny",
    "cloudy",
    "rain",
    "night",
    "outage",
    "night-outage",
    "low-battery",
    "leak",
    "offline",
    "humidity",
  ]) {
    await page.getByLabel("Explore a condition").selectOption(id);
    assert.equal(await page.getByLabel("Explore a condition").inputValue(), id);
    assert.ok(await page.locator(".h1-state-note p").first().textContent());
  }
  report.interactions.push("All ten scenarios selected");
  await page.getByLabel("Explore a condition").selectOption("night");
  await page.getByRole("button", { name: "Energy", exact: true }).click();
  assert.ok((await page.locator(".h1-metrics").innerText()).includes("0.00"));
  await page.screenshot({ path: `artifacts/qa/h1-${type}-night.png` });
  await page.getByLabel("Explore a condition").selectOption("outage");
  assert.ok(
    (await page.locator(".h1-scene-state").innerText()).includes(
      "Grid isolated",
    ),
  );
  await page.getByRole("slider", { name: "Time of demo day" }).fill("705");
  assert.ok(
    (await page.locator(".h1-scene-state").innerText()).includes(
      "Grid available",
    ),
  );
  await page.getByRole("slider", { name: "Time of demo day" }).fill("720");
  assert.ok(
    (await page.locator(".h1-scene-state").innerText()).includes(
      "Grid isolated",
    ),
  );
  await page
    .getByRole("button", { name: "Play demo timeline", exact: true })
    .click();
  await page.waitForFunction(
    () =>
      document.querySelector(".h1-timestamp strong").textContent !== "12:00",
  );
  await page
    .getByRole("button", { name: "Pause demo timeline", exact: true })
    .click();
  report.interactions.push("Clock playback and discrete outage boundary");
  await page.getByRole("button", { name: "Cutaway", exact: true }).click();
  assert.equal(
    await page
      .getByRole("button", { name: "Cutaway", exact: true })
      .getAttribute("aria-pressed"),
    "true",
  );
  await page.getByRole("button", { name: /^01 Solar roof/ }).click();
  await page.getByRole("button", { name: "Simulation", exact: true }).click();
  assert.ok((await page.locator(".h1-balance").innerText()).includes("AC bus"));
  await page.getByRole("button", { name: "Sources", exact: true }).click();
  assert.ok((await page.locator(".h1-detail .h1-source").count()) > 0);
  await checkAxe("component sources");
  await page.screenshot({ path: `artifacts/qa/h1-${type}-cutaway.png` });
  await page.getByRole("button", { name: "Close component details" }).click();
  report.interactions.push(
    "Cutaway, component focus, live state and cited sources",
  );
  await page.getByRole("button", { name: "Explain this moment" }).click();
  await page.getByRole("button", { name: "What survives offline?" }).click();
  assert.match(
    await page.locator(".h1-guide-answer").innerText(),
    /local sensing/,
  );
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Save state" }).click();
  const download = await downloadPromise;
  const downloaded = JSON.parse(
    await fs.readFile(await download.path(), "utf8"),
  );
  assert.equal(downloaded.scenario.id, "outage");
  assert.equal(
    downloaded.frame.minute,
    Number(await page.getByRole("slider").inputValue()),
  );
  report.interactions.push(
    "State-derived guide and reproducible JSON download",
  );
  await page.getByRole("button", { name: "About this study" }).click();
  assert.ok(await page.locator("dialog.h1-notes").isVisible());
  await checkAxe("study notes");
  await page.keyboard.press("Escape");
  assert.ok(!(await page.locator("dialog.h1-notes").isVisible()));
  await page.getByRole("button", { name: "Light view", exact: true }).click();
  assert.ok(await page.locator(".h1-poster").isVisible());
  await page.getByLabel("Explore a condition").selectOption("leak");
  await page.getByRole("button", { name: "Water", exact: true }).click();
  assert.match(await page.locator(".h1-metrics").innerText(), /Isolated/);
  report.interactions.push("Light mode preserves scenario controls");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({
    path: `artifacts/qa/h1-${type}-mobile.png`,
    fullPage: true,
  });
  await checkAxe("mobile light");
  await page.getByRole("button", { name: /^01 Domestic water/ }).click();
  await page.getByRole("button", { name: "Research", exact: true }).click();
  await page.screenshot({ path: `artifacts/qa/h1-${type}-mobile-detail.png` });
  await checkAxe("mobile detail");
  await page.keyboard.press("Escape");
  assert.equal(await page.locator(".h1-detail").count(), 0);
  report.interactions.push("Mobile research sheet and Escape");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(url);
  await page
    .getByRole("button", { name: "Show view 2: Life in the shade" })
    .click();
  assert.equal(
    await page
      .getByRole("button", { name: "Show view 2: Life in the shade" })
      .getAttribute("aria-pressed"),
    "true",
  );
  await page.screenshot({
    path: `artifacts/qa/hero-${type}-courtyard-mobile.png`,
  });
  await page
    .getByRole("button", { name: "Show view 3: An evening together" })
    .click();
  await page.setViewportSize({ width: 1440, height: 1100 });
  await page.screenshot({ path: `artifacts/qa/hero-${type}-evening.png` });
  report.interactions.push("Hero perspective controls with reduced motion");
  console.log(JSON.stringify(report, null, 2));
  if (
    report.errors.length ||
    report.accessibility.some((a) => a.violations.length)
  )
    process.exitCode = 1;
} finally {
  await fs.writeFile(
    `artifacts/qa/h1-${type}-report.json`,
    JSON.stringify(report, null, 2),
  );
  await browser.close();
}
