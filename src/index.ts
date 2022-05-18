/* eslint-disable no-console */
import { text } from "./text";

const bold = (str: string) => `\x1b[1m${str}\x1b[0m`;

const splitMapJoin = (
  str: string,
  char: string,
  fn: (substring: string) => string
) => {
  return str
    .split(char)
    .map(fn)
    .join(char);
};

const bionicTextUwu = splitMapJoin(
  text,
  "\n",
  (substring: string) => splitMapJoin(
    substring,
    " ",
    (word: string) => {
      const firstHalf = word.substring(0, Math.ceil(word.length / 2));
      return word.replace(firstHalf, bold(firstHalf));
    }
  ),
);

console.log(bionicTextUwu);
console.log();

export {};