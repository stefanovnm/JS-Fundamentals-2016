/*
 Problem 5. nbsp

 Write a function that replaces non breaking white-spaces in a text with &nbsp;

 */
console.log('Task 5:');

function spaceReplace(text){
    var result = '',
         i,
        length=text.length;
    for(i=0;i<length;i+=1){
        if(text[i]===' '){
            result+='&nbsp;';
        }else{
            result+=text[i];
        }
    }
    return result;
}
var text = 'Just a test.';
console.log(text);
console.log(spaceReplace(text));

console.log(' ');