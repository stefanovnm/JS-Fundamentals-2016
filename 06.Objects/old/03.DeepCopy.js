/*
 Problem 3. Deep copy

 Write a function that makes a deep copy of an object.
 The function should work for both primitive and reference types.

*/
console.log('Task 3:');
//javascript objects are the only one which are copied by reference
//Number, String, Boolean, Null, Undefined are primitive types that are copied by value

function deepCopy(item){
    if(typeof item !== 'object'){
        return item;
    }
//http://stackoverflow.com/questions/728360/most-elegant-way-to-clone-a-javascript-object
    var copied = {};
    for( var attr in item ){
        if(item.hasOwnProperty(attr)){
            copied[attr]=item[attr];
        }
    }
    return copied;
}

var obj={
    name:"Gosho",
    age:5
},
    number= 5,
    string = 'str';

console.log(deepCopy(obj));
console.log(deepCopy(number));
console.log(deepCopy(string));
console.log(' ');