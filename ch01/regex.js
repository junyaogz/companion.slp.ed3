
//exact match
var myRe = /woodchucks/;
var myArray = myRe.exec('interesting links to woodchucks and lemurs');
console.log(myArray);

//disjunctions
var myRe = /[wW]oodchucks/;
var myArray = myRe.exec('Woodchucks');
console.log(myArray);

//specify a range
var myRe = /[C-G]/;
var myArray = myRe.exec('we should call it Drenched Blossoms');
console.log(myArray);

//negate a pattern
var myRe = /[^A-Z]/;
var myArray = myRe.exec('Oyfn pripetchik');
console.log(myArray);

//references；
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
