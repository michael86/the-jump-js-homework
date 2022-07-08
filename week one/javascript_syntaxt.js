
/*
1. In a series of variables store:
a. A string
b. A number
c. A Boolean.*/
var [myName, myAge, feelsOld] = ["Michael", 36, true];

// 2. Add two numbers.
console.log(4 + myAge);

// 3. Concatenate two string.
console.log(`Name is ${myName}`);

// 4. Create an IF statement which checks if a name variable matches another variable, if so it should console log a message
// 5. Extend the IF statement to have an ELSE IF to show an alternative message if the first comparison fails
// 6. Extend one of the IF statements to check if two things are true, if so show a message
var [nameOne, nameTwo] = ["Harry", "Harry"]

if (nameOne === nameTwo && nameOne.length === nameTwo.length) {
    console.log("both names and length match");
} else if (nameOne === nameTwo) {
    console.log('Both names match');
} else if (nameOne !== nameTwo) {
    console.log("Names don't match, nor does length");
}

// 7.  Store in a variable someone’s name, age and height.Choose between an object and an array.
var person = {
    name: 'Johnny',
    age: 21,
    height: 160,
}

// 8. Convert the persons name in the above to lower case.
person.name = person.name.toLowerCase();

// 9.  Store in a variable a list of days of the week. Choose between an object and an array.
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// 10. Create a function, inside the function add a second function, and again add a third function into the second function.
// 11. Create 3 variables.
// 12. Define 3 the variables in the correct place so that:
//  a. The first variable is accessible inside every function.
//  b. The second variable is accessible inside the second and third function only.
//  c. The third variable is accessible inside the third function only.
// 13. Define a 4th variable inside the 3rd function. This variable should be accessible by every function.

function one() {
    var everyScope;

    function two() {
        var secondAndThirdScope;

        function three() {
            var thirdScope;
            fourthEveryScope;
        };
    };
};

// /14. Create an array of 5 peoples names. Loop over the array and console logs the names using:
//    a.A for loop
//    b.A for of loop

var people = ["Michael", "Tonie", "Jacqui", "Coral", "Kaycee"]

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
};

for (const person of people) {
    console.log(person);
};

// Just because I couldn't resist! 
people.forEach(person => console.log(person));