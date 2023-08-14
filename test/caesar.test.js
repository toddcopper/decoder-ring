// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("function caesar()", () => {
  it("checks for caesar() function", () => {
    expect(caesar).to.be.a("function");
  });
  it("returns false if shift is 0, less than -26 or greater than 25", () => {
    const message = "Hello World";

    expect(caesar(message, 0)).to.be.false;

    expect(caesar(message, 30)).to.be.false;

    expect(caesar(message, -30)).to.be.false;
  });
  it("ignores capital letters", () => {
    const messge = "A Message";
    const shift = 5;

    const expected = "f rjxxflj";
    const actual = caesar(messge, shift);

    expect(actual).to.equal(expected);
  });
  it("handles shifts that go past end of alphabet", () => {
    const message = "Zebra";
    const shift = 3;

    const expected = "cheud";
    const actual = caesar(message, shift);

    expect(actual).to.equal(expected);
  });
  it("maintains spaces and other nonalphabetical symbols before and after encoding and decoding", () => {
    const message = "hello world!";
    const shift = 5;

    const expected = "mjqqt btwqi!";
    const actual = caesar(message, shift);

    expect(actual).to.equal(expected);
  });
  it("decodes a message input if false argument is passed", () => {
    const message = "mjqqt btwqi!";
    const shift = 5;

    const expected = "hello world!";
    const actual = caesar(message, shift, false);

    expect(actual).to.equal(expected);
  });
});