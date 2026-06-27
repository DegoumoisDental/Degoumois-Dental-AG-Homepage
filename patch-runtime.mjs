// Patches the Vercel output to use nodejs20.x instead of nodejs18.x
import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

function patchDir(dir) {
  let entries;
  try { entries = readdirSync(dir); } catch { return; }
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      patchDir(full);
    } else if (entry === ".vc-config.json") {
      const raw = readFileSync(full, "utf8");
      if (raw.includes("nodejs18.x")) {
        writeFileSync(full, raw.replace(/nodejs18\.x/g, "nodejs20.x"));
        console.log(`Patched: ${full}`);
      }
    }
  }
}

patchDir(".vercel/output/functions");
