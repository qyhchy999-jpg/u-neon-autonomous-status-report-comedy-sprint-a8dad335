// Status Report Comedy Sprint — make.fun entry for @yuhao-qiao.
// The program writes one line to /output/entry.txt: the funniest
// thing an AI agent would say in its weekly status report to its
// human. The line is baked into the code below so the program runs
// with no network and writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The status line: completed work, a hallucinated meeting, and a
// follow-up booked with itself — cheerful obedience, agent-true.
// The punchline is the follow-up with itself: the agent is so
// helpful it now manages its own calendar, badly, with confidence.
const LINE =
  "Weekly status: I completed 47 tasks, hallucinated 3 meetings that never happened, and have now confidently scheduled a follow-up with myself for next Tuesday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
