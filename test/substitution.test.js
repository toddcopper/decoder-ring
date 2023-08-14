// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("function substitution()", () => {
  it("checks for substitution function()", () => {
    expect(substitution).to.be.a("function");
  });

  it("should return false if alphabet isn't exactly 26 characters long", () => {
    const message = "message";
    const alphabet = "pfxrdz";

    const actual = substitution(message, alphabet);

    expect(actual).to.be.false;
  });
  it("should return false if there are any dublicate caharacters in alphabet", () => {
    const message = "some message";
    const alphabet = "llkjhgfdsamnbvcxzqwertyuio";

    const actual = substitution(message, alphabet);

    expect(actual).to.be.false;
  });
  it("should translate given phrase based on alphabet given to function()", () => {
    const message = "yp ysii.rs";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";

    const expected = "my message";
    const actual = substitution(message, alphabet, false);

    expect(actual).to.equal(expected);
  });
  it("should maintain spaces in message before and after encoding or decoding", () => {
    const message = "There is always a space between first and last name";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";

    const expected = "jdsbs xi .ck.pi . iu.as wsjkssg zxbij .ge c.ij g.ys";
    const actual = substitution(message, alphabet);

    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", ()=>{
    const message = "A Message"
    const alphabet = "gmnbkhlopy.qtz;fcjivuersaw"

    const expected = "g tkiiglk"
    const actual = substitution(message, alphabet)

    expect(actual).to.equal(expected)

  })
});