const {chuckedArray} = require("./array")



it("make a chucked array with count", () => {
    expect(chuckedArray([1,2,3,4,5,6,7], 2))
    .toStrictEqual([[1,2],[3,4],[5,6],[7] ])
})