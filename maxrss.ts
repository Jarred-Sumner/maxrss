#!/usr/bin/env bun
import { spawnSync } from "bun";

let args = process.argv.slice(2);

let prefix = "Peak memory usage:";
if (args[0]?.startsWith("--prefix=")) {
  prefix = args.shift()!.slice("--prefix=".length);
}

if (args.length === 0 || args[0] === "--help" || args[0] === "-h") {
  console.error("Usage: maxrss [--prefix=string] <cmd> [args...]");
  process.exit(1);
}

const { resourceUsage, exitCode } = spawnSync({
  cmd: args,
  stdin: "inherit",
  stdout: "inherit",
  stderr: "inherit",
});

if (resourceUsage.maxRSS > 1000 * 1000) {
  console.log(
    prefix,
    Number((resourceUsage.maxRSS / 1000 / 1000).toFixed(2)),
    "MB"
  );
} else {
  console.log(prefix, Number((resourceUsage.maxRSS / 1000).toFixed(2)), "KB");
}

process.exit(exitCode);
