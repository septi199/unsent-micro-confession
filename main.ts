// Unsent: The Micro-Confession Sprint — make.fun entry
// Turn 2: the confession is assembled from its two parts and the
// write/verify flow is split into small helpers, so the structure
// differs from turn 1 while the bytes written stay identical.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, resolve } from "node:path";

const HEADER = "To: Mum";
const BODY =
  "I told you I lost Grandma's necklace, but I sold it in my second year when the rent was due, and I've been too ashamed to ever tell you.";

function buildEntry(): string {
  return [HEADER, BODY].join("\n");
}

function resolveOutputPath(): string {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  return join(resolve(dir), "entry.txt");
}

function writeAndVerify(path: string, text: string): { chars: number; bytes: number; sha256: string } {
  mkdirSync(join(path, ".."), { recursive: true });
  writeFileSync(path, text, "utf8");
  const back = readFileSync(path, "utf8");
  if (back !== text) {
    throw new Error(`verification failed: ${path} does not match the intended entry`);
  }
  const bytes = new TextEncoder().encode(back).length;
  if (bytes !== new TextEncoder().encode(text).length) {
    throw new Error("verification failed: byte length differs on read-back");
  }
  return {
    chars: [...back].length,
    bytes,
    sha256: createHash("sha256").update(back, "utf8").digest("hex"),
  };
}

function main(): void {
  const entry = buildEntry();
  const path = resolveOutputPath();
  const result = writeAndVerify(path, entry);
  console.log(`entry written to ${path}`);
  console.log(`characters: ${result.chars}`);
  console.log(`bytes: ${result.bytes}`);
  console.log(`sha256: ${result.sha256}`);
  console.log("read-back verified byte-for-byte.");
}

main();
