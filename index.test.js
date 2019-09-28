const { longestAlphaWord, palindrome } = require("./index")

const words = ["bannan", "at"];

it("returns the longest alpha word", () => {
    expect(longestAlphaWord(words)).toBe("at");
})


describe("Plindrome", () => {
    it("is palindrome", () =>{
        expect(palindrome("racecar")).toBe(true);
    })
    it("not a palindrome", () => {
        expect(palindrome("house")).toBe(false);
    })
})
