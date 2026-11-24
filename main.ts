import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "The baby monitor whispered my name — in my own voice — and I was home alone.";

const MAX_ENTRY_LENGTH = 200;
const OUTPUT_DIR = "/output";
const OUTPUT_PATH = "/output/entry.txt";

function writeEntry(): void {
  if (ENTRY_LINE.length >= MAX_ENTRY_LENGTH) {
    throw new Error("Entry line exceeds the 200 character limit.");
  }
  if (ENTRY_LINE.includes("\n")) {
    throw new Error("Entry must be exactly one line.");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY_LINE + "\n");
}

writeEntry();
