/*var massJohn = prompt('What is the mass of John?');
var heightJohn = prompt('Enter the height of John(in metre)');

var massMark = prompt('What is the mass of Mark?');
var heightMark = prompt('Enter the height of Mark(in metre)');

var BMI_John; var BMI_Mark;

BMI_John = massJohn/(heightJohn*heightJohn);

BMI_Mark = massMark/(heightMark*heightMark);

if(BMI_Mark>BMI_John)
console.log('')


var IsMarkHasHigherBMI= BMI_Mark > BMI_John;

console.log('Mark has higher BMI than john- the statement is '+ IsMarkHasHigherBMI);


if(IsMarkHasHigherBMI)
{
    console.log("Mark has higher BMI than john");
}
else
{
    console.log("John has higher BMI than Mark");
}

*/

/*****************************
* Boolean logic
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}






// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

 if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

*/

/*

var firstName = 'Emu';
var job = 'instructor';
switch (job) {
    //case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/*

var scoreJohn = (189 + 120 + 103) / 3.0;
var scoreMike = (129 + 94 + 123) / 3.0;
var scoreMary = (97 + 134 + 105) / 3.0;

console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team wins with ' + scoreMike + ' points');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log('Mary\'s team wins with ' + scoreMary + ' points');
} else {
    console.log('There is a draw');
}
*/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1998);
var ageMike = calculateAge(1999);
var ageJane = calculateAge(2005);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/


/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the
 bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
function tipCalculator(bill)
{
    var percentage;
    if(bill<50)
        percentage =.2;
    else if(bill>=50 && bill<=200)
        percentage =.15;

    else   
        percentage =.1;

    return bill*percentage;
}

var bills= [124,48,268];
var tips= [tipCalculator(bills[0]),
tipCalculator(bills[1]),
tipCalculator(bills[2])];

var finalBills =[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(tips, finalBills);

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1998,
    family: ['Jane,Bob'],
    job: "Instructor",
    isMarried: false,
    calcAge: function (birthYear)
    {
        return 2020 - birthYear;
    }

};
console.log(john);
console.log(john.calcAge(1990))

var Jane= new Object();
Jane.firstName= 'Jane';
Jane.birthYear= 2000;
Jane['isMarried']= true;
console.log(Jane);
*/
/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality
 with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
var Mark = {
    name: 'Mark',
    mass: 100,
    height: 1.67,
    BMI: function(mass,height) {
        this.BMI= this.mass / (this.height * this.height);
        return this.BMI;
        //return (mass/(height*height));
    }
};


var John = {
    name: 'John',
    mass: 90,
    height: 1.77,
    BMI: function(mass,height) {
        this.BMI= this.mass / (this.height * this.height);
        return this.BMI;
        //return (mass/(height*height));
    }
};

if(Mark.BMI() > John.BMI())
    console.log('Mark has greater BMI than John');
else if (Mark.BMI() < John.BMI())
    console.log('John has greater BMI');

else
    console.log('They has equal BMI');
