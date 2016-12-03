import { assert as t } from "chai";
import LRUCache from "../LRUCache";

describe("index", () => {
  it("should export LRUCache as default", () => {
    t.equal(typeof LRUCache === "function", true);
  });
});
