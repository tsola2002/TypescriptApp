"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(name, size) {
        this.name = name;
        this.size = size;
    }
    return Animal;
}());
exports.Animal = Animal;
// wen we declare the variable we set it to the animal data type
var animal;
//we set datatypes on the functions to ensure we dont pass the wrongdata type
// we also force the function to return an instance of the animal class
function createAnimal(name, size) {
    // using code to see difference in feedback we get from text editor
    return new Animal(name, size);
}
//example calling function with right datatype
animal = createAnimal('Canine', 500);
//example calling function with right datatype
// animal =  createAnimal('Canine', 'something');
// hovering over properties gives us code hinting from typescript
animal.size = 600;
// typescript also complains about missing properties
// animal.type = 'asdasdf';
