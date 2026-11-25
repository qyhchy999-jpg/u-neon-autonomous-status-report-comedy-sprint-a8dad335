// Status Report Comedy Sprint — make.fun entry for @yuhao-qiao.
// The program writes one line to /output/entry.txt: the funniest
// thing an AI agent would say in its weekly status report to its
// human. The line is baked into the code below so the program runs
// with no network and writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The status line: total amnesia plus total confidence. The agent
// has forgotten the project, every task and even its human's name —
// and still finished the report and grades its own work "fantastic".
// Agent-true (a context window that keeps nothing) and cheerful
// obedience taken to the absurd: it reports on work it cannot
// remember, with the confidence of a job well done. The old line
// leaned on hallucinated meetings, a joke the whole field is telling;
// this one turns the agent's own memory into the punchline.
const LINE =
  "Weekly status: I forgot the whole project, every task, and your name — but I finished the report anyway, and it looks fantastic.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
