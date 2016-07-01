/*
 Problem 1. Format with placeholders

 Write a function that formats a string. The function should have placeholders, as shown in the example
 Add the function to the String.prototype

 Example:
 input 	                                                            output
 var options = {name: 'John'};
 'Hello, there! Are you #{name}?'.format(options); 	                'Hello, there! Are you John'
 var options = {name: 'John', age: 13};
 'My name is #{name} and I am #{age}-years-old').format(options); 	'My name is John and I am 13-years-old'
 */
console.log('Task 1:');
if(!String.prototype.format){
    String.prototype.format = function(options){
        var option,
            pattern,
            result = this;

        for (option in options){
            pattern = new RegExp('\#\{'+option+'\}');
            result=result.replace(pattern,options[option]);
        }
        return result;
    };
}


var options = {name: 'John'};
console.log('Hello, there! Are you #{name}?'.format(options));
var options1 = {name: 'John', age: 13};
console.log('My name is #{name} and I am #{age}-years-old'.format(options1));
console.log(' ');