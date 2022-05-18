import test from "ava";

import { bionicTextUwu } from "../src";

test("should bold text as expected", (t) => {
  t.snapshot(bionicTextUwu);
});