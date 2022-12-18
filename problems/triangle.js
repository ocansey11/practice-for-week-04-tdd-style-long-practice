// Your code here
class Triangle{
    constructor(side1,side2,side3){
        this.side1 = side1;
        this.side2 = side2;;
        this.side3 = side3

        this.isValid = null

        if(!(typeof this.side1 ==='number') || !(typeof this.side2 ==='number') || !(typeof this.side3 ==='number')){
            throw new TypeError('only accpets numbers')
        }
    }

    getPerimeter(){
        return this.side1 + this.side2 + this.side3
    }

    hasValidSideLengths(){
       if((this.side1 + this.side2) < this.side3 || (this.side2 + this.side3) < this.side1 || (this.side3 + this.side1) < this.side2)
        {
            return false
        }
        else
        {
            return true
        }
    }

    validate(){
        if(this.hasValidSideLengths() === true ){
            this.isValid = true
            return this.isValid
        }
        else{
            if(this.hasValidSideLengths() === false){
            this.isValid = false
            return this.isValid
            }
        }
    }

    static getValidTriangles(instances){
        for(let i = 0; i < instances.length; i++){
            let obj = instances[i]
            if(!(obj instanceof Triangle)){
                throw new TypeError(' obj must be an instance of Triangle ')
            }
        }

        let validatedArrays = []
        for(let i = 0; i < instances.length; i++){
            let instance = instances[i]
            instance.validate()

            if(instance.isValid === true){
               validatedArrays.push(instance)
            }
        }
        return validatedArrays
    }
}


class Scalene extends Triangle{
    constructor(side1, side2, side3){
        super(side1,side2,side3)

        this.isValid =  this.hasValidSideLengths()
        this.isValidScalene = null
    }

    isScalene(){
      if(!(this.side1 == this.side2) || !(this.side1 ==  this.side3) || !(this.side2 == this.side3)){
        return true
      }
      return false
    }

    validate(){
        if(this.isScalene() === true ){
            this.isValidScalene = true
            return this.isValidScalene
        }
        else{
            if(this.isScalene() === false){
                this.isValidScalene = false
                return this.isValidScalene
            }
        }
    }
}


class Isosceles extends Triangle{
    constructor(side1,side2,side3){
        super(side1,side2,side3)

        this.isValid =  this.hasValidSideLengths()
        this.isValidIsosceles =  null
    }

    isIsosceles(){
        if((this.side1 == this.side2) && !(this.side1 ==  this.side3) || (this.side2 == this.side3) && !(this.side1 ==  this.side3) || (this.side1 == this.side3) && !(this.side1 ==  this.side2)){
          return true
        }
        return false
    }

    validate(){
        if(this.isIsosceles() === true ){
            this.isValidIsosceles = true
            return this.isValidIsosceles
        }
        else{
            if(this.isIsosceles() === false){
                this.isValidIsosceles = false
                return this.isValidIsosceles
            }
        }
    }
}

class RightTriangle extends Triangle{
    constructor(side1, side2, side3){
        super(side1, side2, side3)

        this.isValid = this.hasValidSideLengths()
        this.isValidRightTriangle = null
    }

    isRightTriangle(){
        let hypotenuse = 0
        let base = 0
        let altitude = 0

        // base and altitude will not be exact for the sides of the triangle. they are only set with these respective names to support the test for the hypotenuse.(in accordance to the formula)

        if(this.side1 > hypotenuse){
            hypotenuse = this.side1
            base = this.side2
            altitude = this.side3
        }
        if(this.side2 > hypotenuse){
            hypotenuse = this.side2
            base = this.side1
            altitude = this.side3
        }
        if(this.side3 > hypotenuse)
        {
            hypotenuse = this.side3
            base = this.side1
            altitude = this.side2
        }

        if((hypotenuse**2) == (base**2) + (altitude**2)){
          return true
        }else{
            return false
        }
    }

    validate(){
        if(this.isRightTriangle() === true ){
            this.isValidRightTriangle = true
            return this.isValidRightTriangle
        }
        else{
            if(this.isRightTriangle() === false){
                this.isValidRightTriangle = false
                return this.isValidRightTriangle
            }
        }
    }
}

class Equilateral extends Triangle{
    constructor(side1,side2,side3){
        super(side1, side2, side3)

        this.isValid = this.hasValidSideLengths()
        this.isValidEquilateralTriangle = null
    }

    isEquilateralTriangle(){
        if(this.side1 === this.side2 && this.side1 === this.side3){
            return true
        }
        else{
            return false
        }
    }

    validate(){
        if(this.isEquilateralTriangle() === true ){
            this.isValidEquilateralTriangle = true
            return this.isValidEquilateralTriangle
        }
        else{
            if(this.isEquilateralTriangle() === false){
                this.isValidEquilateralTriangle = false
                return this.isValidEquilateralTriangle
            }
        }
    }
}

module.exports = {
    Triangle, Scalene, Isosceles, RightTriangle, Equilateral
}
