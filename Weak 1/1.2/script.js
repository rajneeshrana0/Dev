// // Program to find sum of two Number


// function sum(a, b) {

//     let totalSum = a + b;

//     return totalSum;
// }



// let totalSum = sum(9, 2);  // Function Calls

// console.log(totalSum); // log  values





// // Program to find User can Vote or Not


// function userVote(vote) {

//     if (vote < 18) {
//         console.log("You are not allowed to vote");
//     } else {
//         console.log("You are allowed to vote");
//     }
// }


// let canVote = userVote(8);

// console.log(canVote);


// // Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."




// function check(number) {

//     if (number % 2 == 0) {
//         console.log("Number is Even");
//     } else {
//         console.log("Number is Odd");
//     }
// }

// let oddEven = check(9);



// console.log(oddEven);



// Program to find sum up to N numbers



// function checkSum(numbers) {

//     let sum = 0;

//     for (let i = 1; i <= numbers; i++) {


//         sum += i;


//     }

//     return sum;




// }



// let sum = checkSum(15);



// console.log("Sum up to N numbers : " + sum);



// Object 



// Assignment #1
// Write a function that takes a user as an input and greets them with their name and age



// function greets(user) {

// console.log("Hii " + user.firstName + "Your age is " + user.age);

// }



// let users = {
//     firstName : 'Rajneesh ',
//     age: 24,
// }


// let userGreeting = greets(users);

// console.log(userGreeting);




// Assignment #2
// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

// function greets(user) {

//     const { name, age, gender } = user;



//     if (gender.toLowerCase() === 'male') {

//         console.log(" Mr.");
//     } else if (gender.toLowerCase === 'female') {
//         console.log(" Mrs.");
//     }


//     console.log("Hii " + user.firstName + "Your age is " + user.age);

// }



// let newUsers = {
//     firstName: 'Rajneesh ',
//     age: 24,
//     gender: 'male',
// }


// greets(newUsers);


// Assignment #3
// Also tell the user if they are legal to vote or not




// function legalVote(user) {


//     if (user.age > 18){

//         console.log('You can Vote '+ user.firstName);
//     } else {
//         console.log('You can Not Vote '+ user.firstName);
//     }

// }



// let users = {
//     firstName: 'Rajneesh',
//     age: 5,
//     gender: 'male',
// }





// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS


// function EvenNumbers(numbers) {
//     return numbers.filter(number => number % 2 === 0);
//   }

//   
//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const evenNumbers = EvenNumbers(numbers);

//   console.log(evenNumbers);


//   Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

// function AdultUsers(users) {
//     return users.filter(user => user.age > 18);
//   }

//   
//   const users = [
//     { name: 'Rajneesh', age: 25 },
//     { name: 'Mihir', age: 15 },
//     { name: 'Rohit', age: 30 },
//     { name: 'Neeraj', age: 17 }
//   ];

//   const adultUsers = AdultUsers(users);
//   console.log(adultUsers); 


//   Create a function that takes an array of objects as input,and returns the users whose age > 18 and are male



function AdultMaleUsers(users) {
    return users.filter(user => user.age > 18 && user.gender === 'male');
}


const users = [
    { name: 'Rajneesh', age: 25, gender: 'female' },
    { name: 'Mihir', age: 15, gender: 'male' },
    { name: 'Rohit', age: 30, gender: 'male' },
    { name: 'Neeraj', age: 17, gender: 'male' }
];

const adultMaleUsers = AdultMaleUsers(users);
console.log(adultMaleUsers); 
