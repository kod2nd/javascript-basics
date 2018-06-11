const assertEquals = require("./assert-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns the sum of an array
function sum(array) {
    return array.reduce((a, b) => a + b);
}

// Assertions (do not change)
assertEquals(sum([1, 2]), 3);
assertEquals(sum([1, 2, 3, 4]), 10);

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function that returns an array of even numbers
function evenNumbersOnly(array) {
    return array.filter(item => item % 2 === 0);


}

// Assertions (do not change)
assertEquals(evenNumbersOnly([1, 2, 3, 4]), [2, 4]);
assertEquals(evenNumbersOnly([10, 11, 12]), [10, 12]);

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function that returns the sum of even numbers in the array
// hint: reuse the 2 functions that you defined earlier.
function sumEvenNumbers(array) {
    return array.filter(item => item % 2 === 0)
        .reduce((a, b) => a + b);

}

// Assertions (do not change)
assertEquals(sumEvenNumbers([1, 2, 3, 4]), 6);
assertEquals(sumEvenNumbers([10, 11, 12]), 22);

/* ---------------------- BONUS: EXERCISE 4 ---------------------- */
// Write a Javascript function to compute the union of two arrays. the returned array should be sorted in ascending order (Sample input: union([1, 2, 3], [100, 2, 1, 10]), expected output: [1, 2, 3, 10, 100])
function sortedUnion(arr1, arr2) {

    // Check to see if there are dupliates within arr1 and arr2
    const noDuplicateArr1 = []
    const noDuplicateArr2 = []

    arr1.forEach((element, index) => {
        if (index === 0) {
            noDuplicateArr1.push(element)
        } else {
            if (element !== noDuplicateArr1[index -1]) {
                noDuplicateArr1.push(element)
            }
        } 
    });

    arr2.forEach((element, index) => {
        if (index === 0) {
            noDuplicateArr2.push(element)
        } else {
            if (element !== noDuplicateArr2[index -1]) {
                noDuplicateArr2.push(element)
            }
        } 
    });


    const newUnionArray = noDuplicateArr2;

    for (arr1Item of arr1) {
        if (noDuplicateArr2.indexOf(arr1Item) < 0) {
            newUnionArray.push(arr1Item)
        }
    }

    return newUnionArray.sort((a,b) => a - b)



}

// console.log(arr2.indexOf(2))




// Assertions (do not change)
assertEquals(sortedUnion([1], [2]), [1, 2]);
assertEquals(sortedUnion([1, 3], [2]), [1, 2, 3]);
assertEquals(sortedUnion([1, 3], [11, 2]), [1, 2, 3, 11]);
assertEquals(sortedUnion([1, 3, 2], [11, 2]), [1, 2, 3, 11]);
assertEquals(sortedUnion([1, 3], [11, 2, 3, 4, 4]), [1, 2, 3, 4, 11]);