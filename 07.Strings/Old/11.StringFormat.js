/*
 Problem 11. String format

 Write a function that formats a string using placeholders.
 The function should work with up to 30 placeholders and all types.

 Examples:

 var str = stringFormat('Hello {0}!', 'Peter');
 //str = 'Hello Peter!';

 var frmt = '{0}, {1}, {0} text {2}';
 var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
 //str = '1, Pesho, 1 text Gosho'

 */
console.log('Task 11:');
//http://stackoverflow.com/questions/610406/javascript-equivalent-to-printf-string-format
function stringFormat(){
    var result = arguments[0],
        length=arguments.length,
        i,
        ph;
    if(length==1){
        return result;
    }
    for(i=1;i<length;i+=1){
        ph='{'+(i-1)+'}';
        while(result.indexOf(ph)>-1){
            result=result.replace(ph,arguments[i]);
        }
    }
    return result;
}

var str = stringFormat('Hello {0}!', 'Peter');
console.log(str);

var frmt = '{0}, {1}, {0} text {2}';
var str1 = stringFormat(frmt, 1, 'Pesho', 'Gosho');
console.log(str1);

console.log(' ');