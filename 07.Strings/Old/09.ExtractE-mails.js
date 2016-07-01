/*
 Problem 9. Extract e-mails

 Write a function for extracting all email addresses from given text.
 All sub-strings that match the format @… should be recognized as emails.
 Return the emails as array of strings.

 */
console.log('Task 9:');
function extractMails(text){
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}
var text = 'Email address such as John.Smith@example.com is not equivalent to john.smith@example.com';
console.log(text);
console.log(extractMails(text));
console.log(' ');