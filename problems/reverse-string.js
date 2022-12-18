module.exports = function reverseString(string) {
  // Your code here
  if(!(typeof string === 'string')){
    throw TypeError('You need to put in a String')
  }

  let stringArray = string.split('')
  let newArray = []
  for(let i = stringArray.length -1; i >= 0; i--){
    newArray.push(stringArray[i])
  }

  return newArray.join('')
};
