// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffleArray", () => {
    const expected = ["yellow", "blue", "pink", "green"]
    const expected2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    it("function that takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(expected))
        expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(expected2))
    })
})

//ReferenceError: shuffleArray is not defined

// b) Create the function that makes the test pass.


// Create a function called shuffleArray whose input is an array
const shuffleArray = (array) => {
//     // Use shuffleArray.splice(0, 1) to remove the zero index value of the array and indicate only one index to be deleted
    array.splice(0,1)
    
    for(let i = array.length - 1; i > 0; i--){
//         // Create a for loop using the Fisher-Yates algorithm, looping from back to front bypassing index zero
        const j = Math.floor(Math.random() * (i+1));
//         // The loop generates a random number and swaps it with the greatest index that hasn't already gone through the loop and decrements down the array
        const newArray = array[i];
//         // Create a new variable for the new shuffled array
        array[i] = array[j];
//         // Swaps the index positions 
        array[j] = newArray;
//         // Pushes the new shuffled values into the new array
    }
    return array
}


// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// // Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


describe("minMax", () => {
    it("a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
        expect(minMax(nums1)).toEqual([-8, 90])
        expect(minMax(nums2)).toEqual([5, 109])
    })
})

// b) Create the function that makes the test pass.

const minMax = (array) => {
    //Create an array called minMax that inputs an array
    let min = Math.min(...array)
    // create two new variables for the max and min numbers in the array and use the spread operator to iterate 
    let max = Math.max(...array)
    //Iterate through the array and return the minimum and the maximum values within the array
    let newArray = [min, max] 
    // Create a new array that combines the max and min values from the previous variables
    return newArray
}

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("noDups", () => {
    it("Create a function that takes in two arrays as arguments and returns one array with no duplicate values", () => {
        expect(noDups(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

// b) Create the function that makes the test pass.
var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Create a function called noDups that inputs two arrays
const noDups = (array1, array2) => {
    let combinedArray = array1.concat(array2)
    // Combine the arrays using .concat mutator 
    return combinedArray.filter((value, index) => combinedArray.indexOf(value) === index)
    // Iterate through the combined array using .filter with value and index as parameters. Use .indexOf(value) on the combinedArray so that only the first index of a value in the array is returned
}
