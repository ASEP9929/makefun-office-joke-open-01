// make.fun entry: Make the AI Judge Laugh — the Office Joke Open
// One line of office comedy, at most 200 characters, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// Final: "Our" keeps the shared-office voice; "wouldn't get" is punchier than
// "wouldn't have had". The twist lands in the last few words: Dave reading
// the email out loud in a slideshow.
const JOKE =
  "Our weekly sync could have been an email, but then Dave wouldn't get 40 minutes to read the email out loud in a slideshow.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${[...JOKE].length} chars to /output/entry.txt`);
