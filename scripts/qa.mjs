import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import fs from "node:fs/promises";
const url = process.env.HORIZON_QA_URL || "http://127.0.0.1:3000";
const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.HORIZON_BROWSER_PATH,
});
await fs.mkdir("artifacts/qa", { recursive: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  colorScheme: "light",
});
const page = await context.newPage();
const report = {
  routes: [],
  responsive: [],
  accessibility: [],
  errors: [],
  interactions: [],
};
page.on("pageerror", (e) => report.errors.push(e.message));
page.on("console", (m) => {
  if (
    m.type() === "error" &&
    !m.location().url.includes("a-page-that-does-not-exist")
  )
    report.errors.push(m.text());
});
try {
  for (const route of ["/", "/vision", "/research", "/about", "/collaborate"]) {
    const response = await page.goto(url + route);
    await page.evaluate(() => document.fonts.ready);
    report.routes.push({
      route,
      status: response.status(),
      title: await page.title(),
      h1: await page.locator("h1").count(),
    });
    for (const width of [360, 390, 768, 1024, 1440, 1728]) {
      await page.setViewportSize({ width, height: 1000 });
      const overflow = await page.evaluate(() => ({
        width: innerWidth,
        scroll: document.documentElement.scrollWidth,
        offenders: [...document.querySelectorAll("main *")]
          .filter((e) => {
            const b = e.getBoundingClientRect();
            return (
              b.width > 0 &&
              b.right > innerWidth + 2 &&
              getComputedStyle(e).position !== "absolute"
            );
          })
          .map((e) => e.tagName + "." + e.className)
          .slice(0, 8),
      }));
      report.responsive.push({ route, ...overflow });
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    for (const theme of ["light", "dark"]) {
      await page.evaluate((t) => {
        document.documentElement.dataset.theme = t;
        localStorage.setItem("horizon-theme", t);
      }, theme);
      await page.evaluate(() =>
        Promise.all(
          document.getAnimations().map((a) => a.finished.catch(() => {})),
        ),
      );
      const axe = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      report.accessibility.push({
        route,
        theme,
        violations: axe.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          nodes: v.nodes
            .map((n) => ({ target: n.target, summary: n.failureSummary }))
            .slice(0, 10),
        })),
      });
    }
  }
  await page.goto(url);
  await page.evaluate(() => {
    document.documentElement.dataset.theme = "light";
    localStorage.setItem("horizon-theme", "light");
  });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() =>
    Promise.all(
      document.getAnimations().map((a) => a.finished.catch(() => {})),
    ),
  );
  await page.screenshot({ path: "artifacts/qa/home-desktop.png" });
  await page.getByRole("tab", { name: "Energy", exact: true }).click();
  if (
    !(await page
      .getByRole("tabpanel")
      .innerText()
      .then((t) => t.includes("Solar")))
  )
    throw Error("System tab did not update");
  await page.keyboard.press("ArrowRight");
  if (
    (await page
      .getByRole("tab", { name: "Water", exact: true })
      .getAttribute("aria-selected")) !== "true"
  )
    throw Error("System keyboard failed");
  report.interactions.push("Systems: click and arrow-key selection");
  await page
    .locator("#systems")
    .screenshot({ path: "artifacts/qa/systems-desktop.png" });
  await page
    .locator(".ecosystem-trigger")
    .filter({ hasText: "Systems" })
    .click();
  if (!(await page.locator("#division-systems").isVisible()))
    throw Error("Ecosystem failed");
  report.interactions.push("Ecosystem disclosure");
  await page
    .getByRole("button", { name: "Switch to dark theme", exact: true })
    .click();
  await page.reload();
  if ((await page.locator("html").getAttribute("data-theme")) !== "dark")
    throw Error("Theme persistence failed");
  report.interactions.push("Dark theme persists after reload");
  await page
    .locator("#premise")
    .screenshot({ path: "artifacts/qa/dark-premise.png" });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(url);
  await page.evaluate(() => {
    document.documentElement.dataset.theme = "light";
    localStorage.setItem("horizon-theme", "light");
  });
  await page.evaluate(() =>
    Promise.all(
      document.getAnimations().map((a) => a.finished.catch(() => {})),
    ),
  );
  await page.screenshot({ path: "artifacts/qa/home-mobile.png" });
  await page.getByRole("button", { name: "Open navigation" }).click();
  if (!(await page.getByRole("dialog").isVisible())) throw Error("Menu failed");
  await page.keyboard.press("Escape");
  if (await page.getByRole("dialog").isVisible())
    throw Error("Menu Escape failed");
  report.interactions.push("Mobile dialog opens and closes with Escape");
  await page.goto(url + "/about");
  await page.locator(".founder-portrait-figure").scrollIntoViewIfNeeded();
  await page
    .locator(".founder-portrait-figure img")
    .evaluate((el) => el.decode());
  await page
    .locator(".founder-portrait-figure")
    .screenshot({ path: "artifacts/qa/portrait-mobile.png" });
  await page.goto(url + "/collaborate");
  await page.getByLabel("Your name").fill("Horizon Test");
  await page.getByLabel("Email address").fill("test@example.com");
  await page
    .getByLabel("Your message")
    .fill(
      "A local browser test of the collaboration draft. No email will be sent.",
    );
  await page.getByRole("button", { name: "Prepare email draft" }).click();
  const href = await page
    .getByRole("link", { name: "Open email draft" })
    .getAttribute("href");
  if (!href.startsWith("mailto:solomoneshun373@gmail.com?"))
    throw Error("Contact recipient incorrect");
  report.interactions.push(
    "Contact produces correctly addressed draft; no message sent",
  );
  await page.goto(url + "/research");
  await page
    .getByRole("button", { name: "Play H1 architectural massing study" })
    .click();
  await page.waitForFunction(() => {
    const v = document.querySelector("video");
    return v && !v.paused && v.currentTime > 0;
  });
  await page.getByRole("button", { name: "Pause video", exact: true }).click();
  await page.getByRole("slider", { name: "Video progress" }).fill("4");
  const videoState = await page.locator("video").evaluate((v) => ({
    duration: v.duration,
    time: v.currentTime,
    paused: v.paused,
    muted: v.muted,
  }));
  if (videoState.duration !== 8 || !videoState.paused || !videoState.muted)
    throw Error("Video controls failed " + JSON.stringify(videoState));
  report.interactions.push(
    "Custom video: playback, pause, seek, muted by default; " +
      JSON.stringify(videoState),
  );
  const reduced = await browser.newContext({
    viewport: { width: 390, height: 844 },
    reducedMotion: "reduce",
  });
  const reducedPage = await reduced.newPage();
  await reducedPage.goto(url);
  const animation = await reducedPage
    .locator(".hero-image")
    .evaluate((el) => getComputedStyle(el).animationName);
  if (animation !== "none") throw Error("Reduced motion not honoured");
  report.interactions.push("Reduced motion disables hero animation");
  await reduced.close();
  const missing = await page.goto(url + "/a-page-that-does-not-exist");
  report.routes.push({
    route: "/a-page-that-does-not-exist",
    status: missing.status(),
  });
} catch (e) {
  report.errors.push(e.stack);
}
await fs.writeFile("artifacts/qa/report.json", JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
await browser.close();
if (
  report.errors.length ||
  report.responsive.some((r) => r.scroll > r.width + 1) ||
  report.accessibility.some((r) => r.violations.length)
)
  process.exitCode = 1;
