function returnsThree() {
  // Your code here
  return 3
}

function reciprocal(n) {
  // Your code here
  if(n < 1 || n > 1000000){
    throw TypeError('it should be between 1 and 1 million')
  }
  else{
    return n ** -1
  }
}

module.exports = {
  returnsThree,
  reciprocal
};
