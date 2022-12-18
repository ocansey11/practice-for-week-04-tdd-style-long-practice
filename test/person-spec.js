// Your code here
const { expect} = require('chai');
const { Person } = require('../problems/person');

// Person Class
describe('Person', function(){
    let person
    let hello
    let visit

    beforeEach(() => {
        person =  new Person('Mai', 30)
        hello =  person.sayHello()
        visit =  person.visit('Erin')

    });

    it('person should be an instance of class Person', function(){
    expect(person).to.be.an.instanceof(Person)
    })

    it('person should be an instance of class Person', function(){
        expect(person).to.be.an.instanceof(Person)
    })

    it('person name should be set', function(){
        expect(person.name).to.be.eql('Mai')
    })

    it('person name should be set', function(){
        expect(person.age).to.be.eql(30)
    })

    it("sayHello() returns string of Persons name and a greeting message", function(){
        expect(person.sayHello()).to.be.eql('Hello Mai, How are you')
    })

    it('person.visit(otherPerson) returns \'instance person\' visted Erin', function(){
        expect(visit).to.be.eql('Mai visited Erin')
    })
})


// update Method
describe('update(obj)', function(){
    // update(obj)
    let person

    beforeEach(()=>{
        person =  new Person('Mai', 30)
    })


    // Test if instance of object was not provided
    let badFn = function(){
    return person.update()
    }

    it('update(obj), should throw an error if a value with instance of Object was not provided', function(){
        expect(badFn).to.throw(TypeError)
    })


    // Test if obj.age provided is a number
    let obj = {
        name :'Kevin',
        age : 'ten'
    }
    let badFn2 = function(){
        return person.update(obj)
    }

    it('update(obj), should throw an error if obj.age is not of type number', function(){
        expect(badFn2).to.throw(TypeError)
    })


    // Test if parameter provided in person.update() is an object
    let badFn3 =  function(){
        return person.update('this is a string not  an object')
    }

    it('update(obj). should throw an error is argument is not an object', function(){
        expect(badFn3).to.throw(TypeError)
    })
})


// tryUpdate Method
describe('tryUpdate(obj)', function (){
    let person = new Person('kanine', 30)

    let badFn4 = function(){
        return  person.tryUpdate()
    }

    it('tryUpdate(obj). should return false if the obj argument is not passed and update method not sucessfully invoked', function(){
        expect(badFn4()).to.be.eql(false)
    })


    // Test if the instance was updated as well
    let obj = {
        name :'Kevin',
        age : 10
    }

    let badFn5 = function(){
        return  person.tryUpdate(obj)
    }

    it('tryUpdate(obj). should return true if the obj argument was used to update person object', function(){
        expect(badFn5()).to.be.eql(true)
    })


    // Edge Cases (if the typeof age was not a number)
    let badObj = {
        name :'Kevin',
        age : 'ten'
    }
    let badFn6 = function(){
        return  person.tryUpdate(badObj)
    }

    it('tryUpdate(obj). should return false if the typeof value of obj.age was not a number', function(){
        expect(badFn6()).to.be.eql(false)
    })
})


// static greetAll Method
describe('static greetAll() method', function(){

    let kevin = new Person('Kevin', 10)
    let mai = new Person('Mai', 30)
    let erin = new Person('Erin', 14)
    let kanine = new Person('kanine', 30)

    let arrayOfObjs = [kevin, mai, erin, kanine]

    let expectedArray = Person.greetAll(arrayOfObjs)

    it('Should return an array of the stored strings', function(){
        expect(expectedArray).to.eql(['Hello Kevin, How are you', 'Hello Mai, How are you', 'Hello Erin, How are you', 'Hello kanine, How are you'])
    })
})
