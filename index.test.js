const { longestAlphaWord } = require("./index")

const words = ["bannan", "at"];

it("returns the longest alpha word", () => {
    expect(longestAlphaWord(words)).toBe("at");
})

