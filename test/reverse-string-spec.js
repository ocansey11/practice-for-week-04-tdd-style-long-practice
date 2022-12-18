// Your code here
const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');


describe('Reverse String function', function(){
   let reverse =  reverseString('fun');

   it('Should return the reverese of the input', function (){
    expect(reverse).to.equal('nuf')
   })

   var badFunction = function(){ reverseString(9);};
   it("The function's argument should be a string", function(){
      expect(badFunction).to.throw(TypeError ,'You need to put in a String')
   })
})
