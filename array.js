/**
 * create a chucked array from count
 * e.g [1,2,3,4,5,6,7] of count 3
 * return [[1,2,3], [4,6,6], [7]]
 */

function chuckedArray(arr, count){
    const chuckedArr = [];
    let i  = 0;
    while (i < arr.length){
      chuckedArr.push(arr.slice(i, i + count));
       i += count;
    }
    return chuckedArr;
  }

  module.exports = {
      chuckedArray
  }