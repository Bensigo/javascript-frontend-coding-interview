/**
 * QUE:
 * --------
 * Find the longest alpha word in the list below
 * e.g Floor is an alpha word because 'f' comes before 
 * 'l' so is l to 'O' and O to 'r
 */
const words = [
    "bannan",
    "at",
    "eat",
    "floor",
    "food",
    "water"
]

function longestAlphaWord(words){
  // an object to store  alpha words
  let alphaWord;
  words.forEach(wrd => {
    // sort the words
    const sortedWord = wrd.split("")
        .sort()
        .join('')
    // check for alpha word
   for(let i = 0; i <= words.length; i++){
       if (words[i] === sortedWord){
           alphaWord = sortedWord;
       }
   }
  })
  console.log(alphaWord)
  return alphaWord
}
// console.log(longestAlphaWord(words))



// exported module 
module.exports = {
    longestAlphaWord
}