
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

//the caret ^ has three uses: 
//to match the start of a line, 
//to indicate a negation inside of square brackets
//and just to mean a caret.
//negate a pattern:
var myRe = /[^A-Z]/;
var myArray = myRe.exec('Oyfn pripetchik');
console.log(myArray);

//optionality of preceding patterns
var myRe = /woodchucks?/;
var myArray = myRe.exec('woodchuck');
console.log(myArray);

//Kleene *, zero or more
var myRe = /[ab][ab]*/; //equivalent to /[ab]+/
var myArray = myRe.exec('many apples');
console.log(myArray);

//Kleene +, one or more
var myRe = /[ab]+/;
var myArray = myRe.exec('many apples');
console.log(myArray);

//wildcard * that matches any character except carriage return
var myRe = /beg.n/;
var myArray = myRe.exec('the football match will begin soon');
console.log(myArray);

//anchors that matches star or end
var myRe = /^Fine\.$/;
var myArray = myRe.exec('Fine.');
console.log(myArray);

//disjunction
var regexp = /fl(y|ies)/g;
var str = "there is a fly on the table and many flies around.";
console.log(regexp.exec(str));
console.log(regexp.exec(str));

//operator precedence hierarchy
//Parenthesis               ()
//Counters                  * + ? {}
//Sequences and anchors     the ^my end$
//Disjunction               |
var regexp = /the|any/;
var str = "theany the any";
console.log(regexp.exec(str));

//regex matches the longest string by default
var regexp = /[a-z]*/;
var str = "there is a fly on the table";
console.log(regexp.exec(str));

//but you can match the shortest string by append a ?
var regexp = /[a-z]+?/;
var str = "there is a fly on the table";
console.log(regexp.exec(str));

//a complex reg to match space
var regexp = /\b[0-9]+(\.[0-9]+)? *(GB|[Gg]igabytes?)\b/;
var str = "this usb stick is 62.50GB rather than 64 Gigabytes"
console.log(regexp.exec(str));

//References；
//[1] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
//[2] https://web.stanford.edu/~jurafsky/slp3/ed3book_dec292021.pdf
