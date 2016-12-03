import { assert as t } from "chai";
import LRUCache from "../LRUCache";

describe.only("LRUCache", () => {
  let c: LRUCache<string>;

  beforeEach(() => {
    c = new LRUCache<string>(3);
  });

  afterEach(() => {
    c = null;
  });

  it("should set and get an item", () => {
    c.set("2", "Hello");
    t.equal(c.get("2"), "Hello");
  });

  it("should remove an item", () => {
    c.set("2", "Hello");
    c.remove("2");
    t.equal(c.get("2"), undefined);
  });

  it("should remove the oldest item when the limit is reached", () => {
    c.set("1", "Hello");
    c.set("2", "World");
    c.set("3", "!");
    c.set("4", "nope");

    t.equal(c.get("1"), undefined);
    t.equal(c.get("2"), "World");
    t.equal(c.get("3"), "!");
    t.equal(c.get("4"), "nope");
  });
});
