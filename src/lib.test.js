import { JSDOM } from "jsdom";
import assert from "node:assert/strict";
import { before, describe, test } from "node:test";
import { hello } from "./lib.js";

describe("Unpack", () => {
  let window;

  before(() => {
    const dom = new JSDOM("<!DOCTYPE html><body></body>");
    window = dom.window;

    // TODO: Assign anything you need from JSDOM to `globalThis` below
  });

  test("says hello", () => {
    const result = hello();
    assert.equal(result, "Hello world!");
  });
});
