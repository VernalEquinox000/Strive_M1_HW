/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

/* let result = 0;
let area = function (l1, l2) {


    result = l1 * l2;
    return (result)
}

console.log(area(30,44))

*/

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

/* with randomly generated integers: 

let int1= Math.floor(Math.random() * 10);
let int2= Math.floor(Math.random() * 10); */

let crazySum = function (int1, int2) {

    if (int1 = int2) {
        result = 3 * (int1 + int2)
        return (result)
    }
    
    else {
        result = int1 + int2
        return (result)
    }
}

/* result with randomly generated integers:
console.log(crazySum(int1,int2))
*/

console.log(crazySum(81, 81))
console.log(crazySum(43, 45))


/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

let crazyDiff = function (x) {
    if (Math.abs(x) > 19) {
        result = 3 * Math.abs(x - 19)
        return (result)
    }
    else {
        result = Math.abs(x - 19)
        return (result)
    }
}

console.log(crazyDiff(17))
console.log(crazyDiff(67))

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/


let boundary = function (N) {

    if ((N >= 20 && N<= 100) || N===400) {
        return (true);
    }
    else {
        return (false);
    }

}

console.log(boundary(55))
console.log(boundary(400))
console.log(boundary(300))
console.log(boundary(9))

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

const striveString = "Strive"
//const splStr = striveString.slice(0, 7)


let strivify = function (S) {
    
    
    if (S.slice(0,6)===striveString) {
        return (S.slice(6,))
    }
    else {
        return (striveString.concat(S))
    }   
}

console.log(strivify("Piero"))
console.log(strivify("Strive"))
console.log(strivify("StriveThis"))
//console.log(splStr)


/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

let check3and7 = function (z) {
    if (z % 3 === 0) {
        return("multiple of 3")
    }
    else if (z % 7 === 0) {
        return("multiple of 7")
    }
    else {
        return ("not a multiple of 3 nor 7")
    }
}

console.log(check3and7(33))
console.log(check3and7(49))
console.log(check3and7(100))

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

let reverseString = function (thisString) {

    let splitString = thisString.split("");
    let thisString1 = splitString.reverse(); 
    let thisString2 = thisString1.join(""); 
    return thisString2
}

console.log(reverseString("PierdomenicoApruzzese"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/


let cutString = function (fff) {

    let fff1 = fff.slice(0,-1)
    let fff2 = fff1.substring(1)
    return fff2
}

console.log(cutString("PierdomenicoApruzzese"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
