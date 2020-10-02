/*
Write a function that takes in a string and converts it into kebab case
(ex. ('Dogs are cute') ---> Dogs-Are-Cute) notice how every word 
becomes capitalized, and connected by a hyphen.
if the string passed in is an empty string, return 'This is an empty string!'

for this question, make a comment for every piece of the code, explaining
what it does and why.
*/

const kebabCase = function (str) {
    // make all the letters lowercase and split up the string into its individual words
    let lowerCase = str
    .toLowerCase()
    .split(' ')

    // code if the array is empty, return 'This is an empty string!'
    if (str.length === 0) {
        return 'This is an empty string!'
    }

    // for every words to make the first letter uppercase
    for (let i = 0; i < lowerCase.length; i++) {
        let splitWord = lowerCase[i].split('')
        splitWord[0] = splitWord[0].toUpperCase()
        joinedWord = splitWord.join('')
        lowerCase[i] = joinedWord
    }

    // bring the words back together, removing the spaces
    return lowerCase.join('-')
   
}


console.log((kebabCase('Coding Is Fun') === 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

console.log((kebabCase('this STrIng has Weird casing') === 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

console.log((kebabCase('') === 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");

