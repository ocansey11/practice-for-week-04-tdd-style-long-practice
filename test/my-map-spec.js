const { expect} = require('chai');
const chai = require('chai'), spies = require('chai-spies');
chai.use(spies);
const { myMap } = require('../problems/my-map')


describe('myMap(arr, callback)', function(){
    let arr = [1,2,3,4,5];
    let func
    let callback = (el) => el * 2;
    beforeEach(() => {
        cbkSpy = chai.spy(callback)
        func = myMap(arr, cbkSpy)

    });

    it('Should ensure myMap Function works', function(){
        expect(func).to.eql([2,4,6,8,10])
    })

    it('Should ensure, inputArray is not mutated', function(){
        expect(arr).to.eql([1,2,3,4,5])
    })

    const spy = chai.spy.on(arr, 'map')
    it('Should ensure that myMap does not call the built-in Array.map', function(){
        expect(spy).to.not.have.been.called()
    })

    it('Should ensure that myMap calls a callback', function(){
        expect(cbkSpy).to.have.been.called.exactly(arr.length)
    })
})
