/*
 Strings
 Problem 1. Reverse string

 Write a JavaScript function that reverses a string and returns it.

 Example:
 input 	output
 sample 	elpmas
 */
console.log('Task 1:');
function reverse(string){
    var length = string.length
        reversed='';
    for(i=length-1;i>=0;i-=1){
        reversed+=string[i];
    }
    return reversed;
}

var string = 'test';
console.log(string+' - reversed: '+reverse(string));
console.log(' ');