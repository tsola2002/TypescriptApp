var array = [
    "Pick up drycleaning", 
    "Clean Batcave", 
    "Save Gotham"
];
 
// OLD STYLE
// inorder to get the values out of the array you need to use the indexes
// to reference those values
//  for (var index in array)
//  {
//      var value = array[index];
//      console.log(`${index}: ${value}`);
//  }



// NEW STYLE ES 2015
// for of keyword
// this iterates over the values of array directly
// and cuts out the middle man
for (var value of array) {
    console.log(value);
}