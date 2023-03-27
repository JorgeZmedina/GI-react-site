function transformToObjects (numberArray) {
    return numberArray.map(number => {
        return { val: number }
    });
}

// declare the function called transformToObjects.
//(Return) calls the map method on the input array. The arrow function iterates over each number in the array and execute the code.
//(Return2) returns an object literal that sets val to the number.
//all this does is set a value for each number. Ex: if you input:[1,2,3] the return would be:[{val: 1}, { val: 2}, { val:3}]