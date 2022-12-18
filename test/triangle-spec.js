// Your code here
const { expect} = require('chai');
const { Triangle, Scalene, Isosceles, RightTriangle, Equilateral } = require('../problems/triangle')
const chai = require('chai'), spies = require('chai-spies');
chai.use(spies);



// Triangle Constructor
describe('Triangle class', function(){
    let triangle
    beforeEach(()=>{
        triangle =  new Triangle(3,4,5)
    })

    it('Should have these properties, side 1 to 3',function(){
        expect(triangle).to.have.all.keys('side1', 'side2', 'side3', 'isValid')
    })

    // getPerimeter Method
    describe('getPerimeter()', function(){
        it('should return the total sum of all sides', function(){
            expect(triangle.getPerimeter()).to.be.eql(12)
        })
    })

    //  hasValidSideLengths Method
    describe('hasValidSideengths()', function(){
        it('should have valid length inputs', function(){
            expect(triangle.hasValidSideLengths()).to.be.eql(true)
        })
    })

    // validate Method
    describe('validate()', function(){
        it('adds isValid property to triangle instance', function(){
            expect(triangle.validate()).to.be.eql(true)
        })
    })

    // getValidTriangles Method
    describe('getValidTriangles()', function(){
        let triangle1 = new Triangle(1,2,4)
        let triangle2 = new Triangle(6,8,6)
        let triangle3 = new Triangle(4,4,4)

        let instances = [triangle1, triangle2 , triangle3 ]

        it(' returns an array of validated triangles from an array of an arbitrary number of triangle instances', function(){
            expect(Triangle.getValidTriangles(instances)).to.be.eql([ {side1 :6, side2:8, side3:6, isValid : true}, {side1:4, side2: 4, side3: 4, isValid : true}])
        })
    })
})


// Scalene Class
describe('Scalene Class', function(){
    let scalene
    beforeEach(()=>{
        scalene = new Scalene(3,4,5)
    })

    // isValidTriangle Method
    describe('isValidTriangle()', function(){
        it('Should be a valid triangle, isValid should be set to true', function(){
            expect(scalene.isValid).to.be.eql(true)
        })
    })

    // isScalene Method
    describe('isScalene()', function(){
        it('Should be a valid Scalene triangle, isScalene should return true', function(){
            expect(scalene.isScalene()).to.be.eql(true)
        })
    })

    // isValidScalene property and validate Method
    describe('isValidScalene', function(){
        it('should set isValidScalene property to true', function(){
            expect(scalene.validate()).to.be.eql(true)
        })

        // when we validate with an instance of Scalene we set isValidScalene. so i tested validate() to be the same as isValidScalene
        let scalene = new Scalene(4,5,6)
        scalene.validate()
        let eitherTrueorFalse =  scalene.isValidScalene
        it('should test that validate overrides the method of Triangle', function(){
            expect(scalene.validate()).to.be.eql(eitherTrueorFalse)
        })
    })
})


// Isosceles Triangle
describe('Isosceles Triangle', function(){
    let isosceles
    beforeEach(()=>{
        isosceles = new Isosceles(2,3,3)
    })

    // isValidTriangle Method
    describe('isValidTriangle()', function(){
        it('Should be a valid triangle, isValid should be set to true', function(){
            expect(isosceles.isValid).to.be.eql(true)
        })
    })

    // isIsosceles Method
    describe('isIsosceles()', function(){
        it('Should be a valid Isosceles triangle, isIsosceles should return true', function(){
            expect(isosceles.isIsosceles()).to.be.eql(true)
        })
    })

    // isValidIsoceles property and validate Method
    describe('isValidIsoceles', function(){
        it('should set isValidIsosceles property to true', function(){
            expect(isosceles.validate()).to.be.eql(true)
        })

        let isosceles = new Isosceles(4,5,5)
        isosceles.validate()
        let eitherTrueorFalse =  isosceles.isValidIsosceles
        it('should test that validate overrides the method of Triangle', function(){
            expect(isosceles.validate()).to.be.eql(eitherTrueorFalse)
        })
    })
})


// BONUS
// Right angle Triangle
// (Hypotenuse)2 = (Base)2 + (Altitude)2

describe('RightTriangle Class / Right',function(){
    let right
    beforeEach(()=>{
        right = new RightTriangle(12,5,13)
    })

    // isValidTriangle Method
    describe('isValidTriangle()', function(){
        it('Should be a valid triangle, isValid should be set to true', function(){
            expect(right.isValid).to.be.eql(true)
        })
    })

    // isRightTriangle Method
    describe('isRightTriangle()', function(){
        it('Should be a valid Right triangle, isRightriangle should return true', function(){
            expect(right.isRightTriangle()).to.be.eql(true)
        })
    })

    // isValidRightTriangle property and validate Method
    describe('isValidRightTriangle', function(){

        it('should set isValidRightTriangle property to true', function(){
            expect(right.validate()).to.be.eql(true)
        })

        let right = new RightTriangle(6,8,10)
        right.validate()
        let eitherTrueorFalse =  right.isValidRightTriangle
        it('should test that validate overrides the method of Triangle', function(){
            expect(right.validate()).to.be.eql(eitherTrueorFalse)
        })
    })
})

describe('Equilateral Class', function(){
    let equilateral
    beforeEach(()=>{
        equilateral = new Equilateral(12,12,12)
    })

     // isValidTriangle Method
     describe('isValidTriangle()', function(){
        it('Should be a valid triangle, isValid should be set to true', function(){
            expect(equilateral.isValid).to.be.eql(true)
        })
    })

    // isEquilateralTriangle Method
    describe('isEquilateralTriangle()', function(){
        it('Should be a valid equilateral triangle, isEquilateralTriangle should return true', function(){
            expect(equilateral.isEquilateralTriangle()).to.be.eql(true)
        })
    })

    // isValidEquilateralTriangle property and validate Method
    describe('isValidEquilateralTriangle', function(){

        it('should set isValidEquilateralTriangle property to true', function(){
            expect(equilateral.validate()).to.be.eql(true)
        })

        let equilateral = new Equilateral(6,6,6)
        equilateral.validate()
        let eitherTrueorFalse =  equilateral.isValidEquilateralTriangle
        it('should test that validate overrides the method of Triangle', function(){
            expect(equilateral.validate()).to.be.eql(eitherTrueorFalse)
        })
    })
})
