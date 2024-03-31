import { expect } from "https://deno.land/std/expect/mod.ts";
import {} from "./ex.js";

Deno.test("filters out odd numbers", () => {
  expect(filterEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
});

Deno.test("returns empty array when all numbers are odd", () => {
  expect(filterEvenNumbers([1, 3, 5, 7, 9])).toEqual([]);
});

Deno.test("returns same array when all numbers are even", () => {
  expect(filterEvenNumbers([2, 4, 6, 8, 10])).toEqual([2, 4, 6, 8, 10]);
});

Deno.test("returns empty array when input is empty", () => {
  expect(filterEvenNumbers([])).toEqual([]);
});
