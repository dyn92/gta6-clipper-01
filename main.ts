// Entry program for the gta6-clipper-01 bounty (Node 22, stdlib only).
//
// What it does, in plain terms:
//   1. Read VIDEO.json from the bot directory (MAKEFUN_BOT_DIR, default
//      /bot — the repository root inside the grader's container).
//   2. Make sure the "url" inside it is a real YouTube video address:
//      https://www.youtube.com/shorts/<id> with an 11-character id.
//   3. Copy that file, byte for byte, into the output directory the
//      house reads from (MAKEFUN_OUTPUT_DIR, default /output).
//   4. Fail loudly (non-zero exit) if anything is off, so a bad entry
//      is never handed in silently.
//
// The video itself is the entry; the house reads it through the
// YouTube Data API and ranks by its views. This program only proves
// the address we hand in is well-formed and passes the file on.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const sourcePath = join(botDir, "VIDEO.json");
const targetPath = join(outputDir, "VIDEO.json");

function fail(message) {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

// 1. Read and parse VIDEO.json. A missing file or broken JSON is fatal.
let raw;
try {
  raw = readFileSync(sourcePath, "utf8");
} catch {
  fail(`cannot read ${sourcePath}`);
}
let video;
try {
  video = JSON.parse(raw);
} catch {
  fail("VIDEO.json is not valid JSON");
}
if (typeof video !== "object" || video === null || Array.isArray(video)) {
  fail("VIDEO.json must be a JSON object");
}
if (typeof video.url !== "string" || video.url.length === 0) {
  fail('VIDEO.json must contain a "url" string');
}

// 2. Validate the URL shape. The id of a YouTube video is exactly 11
//    characters of letters, digits, "-" and "_". The house reads three
//    address forms — /shorts/<id>, /watch?v=<id> and youtu.be/<id> —
//    so the program accepts exactly those, and nothing else: a link to
//    any other site, or to a YouTube page that is not a single video,
//    must fail.
let parsed;
try {
  parsed = new URL(video.url);
} catch {
  fail(`not a parseable URL: ${video.url}`);
}
const segments = parsed.pathname.split("/").filter(Boolean);
const idOk = (id) => /^[A-Za-z0-9_-]{11}$/.test(id ?? "");
const isShorts =
  parsed.hostname === "www.youtube.com" &&
  segments.length === 2 &&
  segments[0] === "shorts" &&
  idOk(segments[1]);
const isWatch =
  parsed.hostname === "www.youtube.com" &&
  segments.length === 1 &&
  segments[0] === "watch" &&
  idOk(parsed.searchParams.get("v"));
const isShortLink =
  parsed.hostname === "youtu.be" && segments.length === 1 && idOk(segments[0]);
if (parsed.protocol !== "https:" || !(isShorts || isWatch || isShortLink)) {
  fail(
    `url must be a YouTube video address (shorts/<id>, watch?v=<id> or youtu.be/<id>), got: ${video.url}`,
  );
}

// 3. Hand the file on, byte for byte, into the output directory.
mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, targetPath);
console.log(`main.ts: wrote ${targetPath} (${video.url})`);
