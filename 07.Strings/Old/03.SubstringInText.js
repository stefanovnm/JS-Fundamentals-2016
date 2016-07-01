/*
 Problem 3. Sub-string in text

 Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).

 Example:

 The target sub-string is in

 The text is as follows: We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.

 The result is: 9
 */
console.log('Task 3:');

var text = "We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.";
var pattern= 'in';

function countSubstring(text, pattern){
    var i,
        count = 0,
        workingText = text.toLowerCase();
    while(workingText.indexOf(pattern)>-1){
        count+=1;
        workingText=workingText.substring(workingText.indexOf(pattern)+1);
    }
    return count;
}
console.log('There is '+countSubstring(text,pattern)+' times the searched pattern "'+pattern+'" in the text.');
console.log(' ');