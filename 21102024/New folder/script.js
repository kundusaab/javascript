


// var can be changed
let ourName = "Anubhav";

const pi = 3.14;
//  const can never be changed
var a;
var b = 2;
console.log(a);
a = 710;
b = a;
console.log(a);

var a = 9;
var b = 10;
var c = "I am a String";

a = a + 1;
b = b + 5;
c = c + " String!";
console.log(a);
console.log(b);
console.log(c);

var sum = 10 + 10;
console.log(sum);

var difference = 45 - 10;
console.log(difference);

var multiplication = 12 * 45;
console.log(multiplication);

var division = 546 / 13;
console.log(division);

var modulus = 1256 % 6;
console.log(modulus);

// incrementing numbers
myVar = 69;
myVar++;
console.log(myVar);
// decrementing numbers
myVari = 132;
myVari--;
console.log(myVari);

// Decimal multiplication
var product = 2.0 * 2.5;
console.log(product);
// dividend decimals
var divide = 15.6 / 1.6;
console.log(divide);
// var remainder
var remainder = 122.1 % 3.3;
console.log(remainder);

// comment
var d = 12;
var e = 16;
var f = 19;

f += 12;
e += 9;
d += 17;
console.log(f);
console.log(e);
console.log(d);

// subtract
var g = 19;
var h = 111;
var i = 190;

g -= 12;
h -= 9;
i -= 17;
console.log(g);
console.log(h);
console.log(i);

// multiply
var j = 19;
var k = 111;
var l = 190;
j *= 2;
k *= 3;
l *= 4;
console.log(j);
console.log(k);
console.log(l);

// divide
var m = 19;
var n = 111;
var o = 190;
m /= 2;
n /= 3;
o /= 4;
console.log(m);
console.log(n);
console.log(o);

// modulus
var p = 19;
var q = 111;
var r = 190;
p %= 2;
q %= 3;
r %= 4;
console.log(p);
console.log(q);
console.log(r);

var firstName = "Alan";
var lastName = "Kundu";

console.log(firstName + " " + lastName);
var myFirstName = "Jat";
var myLastName = "Ram";
console.log(myFirstName + " " + myLastName);

// Double Quotes
var myString = 'I am a "Double Quoted " string inside " double quotes"';
console.log(myString);

var myStr = "FirstLine\n\t\\nThirdLine";
console.log(myStr);

var myStr = "This is the start" + " " + "This si the end";
console.log(myStr);

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
console.log(myStr);

var ourNam = "Webhaka";
var ourStr = "Heelo, our name is " + ourNam + " and I am Well!";

var myName = "Mirage";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr);
//  Appending variables
var anAdjective = "awesome!";
var ourStr = "Webhaka is ";
ourStr += anAdjective;

var someAdjective = "Worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

// find length of the string
var firstNamelength = 0;
var firstName = "Ada";
console.log(firstNamelength);
firstNamelength = firstName.length;

//  setup
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength);

// bracket noatation to find first character ia string
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Webhaka ";

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);
// String immutability
var myStr = "Jello World";
myStr[0] = "H";
myStr = "Hello World";
console.log(myStr);
// brcaket notation to find nth character in string

var firstName = "Mira";
var secondLetterOfFirstName = firstName[1];

var lastName = "Webhaka";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);

// bracket notation to find last characer in String

var firstName = "mirae";
var lastLetterOfLastName = firstName[firstName.length - 1];
console.log();
var lastName = "Webhaka";

var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);
