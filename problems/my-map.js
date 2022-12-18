function myMap(inputArray,callback) {
  // UnComment the code below to when testing if map method is being called
  // let fff = inputArray.map((el) =>{
  //  return callback(el)
  // })
  // return fff

  let newArr = []
  for(let i = 0; i < inputArray.length; i++){
    let value = inputArray[i]
    let result = callback(value)
    newArr.push(result)
  }
  return newArr
}


// Test myMap with node
const arr = [1, 2, 3];
const callback = (el) => el * 2;

console.log(myMap(arr, callback)); // prints [2,4,6]
console.log(arr);

module.exports = { myMap };
