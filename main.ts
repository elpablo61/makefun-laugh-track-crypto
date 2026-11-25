import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about crypto trading life: a stop-loss wick hunt, told deadpan.
const LINE =
  "I set a stop-loss at 78,000. The wick hit 77,980, took my stop, then closed at 79,400. My stop-loss works perfectly.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate refuses anything over 200 characters, so fail loudly instead
// of shipping a line the judge will never see.
if (Buffer.byteLength(LINE, "utf8") > 200) {
  throw new Error(`entry line is ${LINE.length} chars, over the 200 cap`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
