// Your code here
const { expect } = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree()', function(){
    it('it returns 3', function(){
        expect(returnsThree()).to.eq(3)
    })
})

describe('reciprocal(n)', function(){
    // Valid arguments
    it('It should return the reciprocal of n', function(){
        expect(reciprocal(4)).to.eq(0.25)
    })

    // invalid arguments
    // 1
    var badFunction =  function(){ reciprocal(0);};
    it('It should be between 1 and 1000000', function(){
        expect(badFunction).to.throw(TypeError, 'it should be between 1 and 1 million')
    })

    // 2
    var badFunction = function(){ reciprocal(10000001);};
    it('It should be between 1 and 1000000', function(){
        expect(badFunction).to.throw(TypeError, 'it should be between 1 and 1 million')
    })
})
