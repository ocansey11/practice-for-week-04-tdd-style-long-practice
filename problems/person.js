class Person {
  // Your code here
  constructor(name,age){
    this.name = name
    this.age = age
  }
  sayHello = function(){
    return `Hello ${this.name}, How are you`
  }

  visit(otherPerson){
    return (`${this.name} visited ${otherPerson}`)
  }

  update(obj){
    if(!(obj instanceof Object)){throw new TypeError('The input argument was not of type objects')
    }
    else if(typeof obj.name === 'string' && typeof obj.age === 'number'){
      this.name = `${obj.name}`
      this.age = `${obj.age}`
    }
    else {
      throw new TypeError('The input arguments were either not of the appropriate type or not given')
    }
  }

  tryUpdate(obj){
    try{
      this.update(obj)
      if(this.name == obj.name && this.age == obj.age ){
        return true
      }
    }
    catch(e){
      if( e instanceof TypeError){
      return false
      }
    }
  }

  static greetAll(arrayOfObjs){
    // check if the values are instances of Person.
    for(let i = 0; i < arrayOfObjs; i++){
      let obj = arrayOfObjs[i]
      if(!(obj instanceof Person)){
        throw new TypeError(`value named ${obj.name} is not an instance of Person`)
      }
    }

    let newArrayOfHellos = []
    for(let i = 0; i < arrayOfObjs.length; i++){
      let obj = arrayOfObjs[i]
      let hello =  obj.sayHello()
      newArrayOfHellos.push(hello)
    }
    return newArrayOfHellos
  }
}

module.exports = { Person };
