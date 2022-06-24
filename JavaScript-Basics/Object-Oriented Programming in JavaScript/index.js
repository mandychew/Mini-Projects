// object literal way of defining objects
const circle = {
    radius: 1,              // this is a property
    location: {
        x: 1, 
        y: 1
    },
    draw: function() {      // this is a method
        console.log('draw')
    }
};

circle.draw()

// using object literal syntax is problematic if the object has behaviour (methods)

// Factory Fuctions
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
// new operator creates a new empty object
// new operator will set 'this' to point to Circle()
const another = new Circle(1);

/* 
Difference between Factory Function and Constructor Function
    Factory Fuctions - return something
    Constructor Function - no return, uses 'this' instead and 'new' operator
*/





// every object has a constructor property, 
// it references the function used to create the object
let z = {};
// x.constructor returns Object()





// Value vs Reference types
let x = 10; // value type
let y = x;
x = 20; // x = 20, but y = 10
// value types/primitives are copied by values

let a = {value: 10}; // reference type
let b = a;
a.value = 20; // a.value = 20 and b.value = 20
// reference types/objects are copied by reference





// Abstraction - hide the details, show the essentials
// keep properties private by setting them as local variables ('let')
function Circle2(radius) {
    this.radius = radius;
    let defaultLocation = { x:0, y:0 };        // this property should not be modified by user
    let computeOptimumLocation = function() {  // this method should only be called in draw method; shouldn't be accessible to user
        // ...
    }
    this.draw = function() {
        computeOptimumLocation();
    };

    // if don't want to modify a property, and only read it, define a getter
    // if want to be able to modify a property, define a setter
    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(x, y) {
            if(!x || !y) {
                throw new Error('invalid location.');
            }
            defaultLocation = value;
        }
    });
}