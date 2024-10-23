// bracket notation to find last character in String

var firstName = "mirae";
var lastLetterOfLastName = firstName[firstName.length - 1];
console.log();
var lastName = "Webhaka";

var lastLetterOfLastName = lastName[lastName.length - 1];
console.log(lastLetterOfLastName);

var firstName = "ramniwas";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];
console.log(thirdToLastLetterOfFirstName); // Correct log for third-to-last letter

var lastName = "rohtak";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];
console.log(secondToLastLetterOfLastName); // Correct log for second-to-last letter

// word blanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    "The " +
    myAdjective +
    " " +
    myNoun +
    " " +
    myVerb +
    " to the store " +
    myAdverb +
    ".";
  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly")); // The big dog ran to the store quickly.
console.log(wordBlanks("bike", "slow", "flew", "slowly")); // The slow bike flew to the store slowly.

// store multiple values with arrays
var ourArray = ["John", 23];
var myArray = ["Quincy", 1];
console.log(ourArray);
console.log(myArray);

// nested arrays

var ourArray = [
  ["The universe", 42],
  ["everything", 101010],
];
var myArray = [["bulls", 23], ["white sox, 26"]];
console.log(ourArray);
console.log(myArray);

// Array finding
var ourArray = [50, 60, 70];

var ourData = ourArray[0];

var myData = myArray[(50, 60, 70)];
var myData = myArray[0];
console.log(myData);
console.log(myArray);

var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);

var myArray = [
  ["John", 23],
  ["Cat", 2],
];
var removedFromOurArray = myArray.pop();
console.log(myArray);

// manpulation arrays with shift()
var ourArray = ["Stimpson", "J", ["Cat"]];
var removedFromOurArray = ourArray.shift();

var myArray = [
  ["John", 23],
  ["Dog", 3],
];
newFunction();

function newFunction() {
  var removedFromMyArray = myArray.shift();
}
console.log(myArray);

// manpulatio arrays with unshift()
var ourArray = ["Stimpson", "J", ["Cat"]];
ourArray.shift = ourArray.shift();
ourArray.unshift = ("happy")
var myArray = [["John", 23],["cat", 3],];
newFunction();

function newFunction() {
  var removedFromMyArray = myArray.pop();
}
console.log(myArray);
