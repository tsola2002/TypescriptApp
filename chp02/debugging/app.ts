export class Animal {
    constructor (public name: string, public size: number) {}
}

// wen we declare the variable we set it to the animal data type
let animal: Animal;

//we set datatypes on the functions to ensure we dont pass the wrongdata type
// we also force the function to return an instance of the animal class
function createAnimal(name: string, size: number): Animal {
    // using code to see difference in feedback we get from text editor
    return new Animal(name, size)
}

//example calling function with right datatype
animal =  createAnimal('Canine', 500);

//example calling function with right datatype
// animal =  createAnimal('Canine', 'something');

// hovering over properties gives us code hinting from typescript
animal.size = 600;

// typescript also complains about missing properties
// animal.type = 'asdasdf';


