import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, "..");

const indexHtml = fs.readFileSync(path.join(projectRoot, "index.html"), "utf8");
const appJs = fs.readFileSync(path.join(projectRoot, "app.js"), "utf8");
const stylesCss = fs.readFileSync(path.join(projectRoot, "styles.css"), "utf8");

assert.ok(indexHtml.includes("Rakshita Devurkar"));
assert.ok(indexHtml.includes("Technical Areas"));
assert.ok(indexHtml.includes("Portfolio Projects"));
assert.ok(indexHtml.includes("How AI has changed software development"));

assert.ok(appJs.includes("AI Operations Dashboard"));
assert.ok(appJs.includes("Responsible AI"));
assert.ok(appJs.includes("AI is not removing software engineering."));
assert.ok(appJs.includes("Artificial intelligence has changed software development by reducing the amount of manual effort required for routine coding tasks."));

assert.ok(stylesCss.includes(".hero"));
assert.ok(stylesCss.includes(".project-grid"));
assert.ok(stylesCss.includes("--bg: #f6f1e8"));

console.log("portfolio smoke tests passed");
