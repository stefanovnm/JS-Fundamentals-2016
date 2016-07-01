/*
Problem 4. Has property

Write a function that checks if a given object contains a given property.

    var obj  = …;
var hasProp = hasProperty(obj, 'length');

 */
console.log('Task 4:');

var obj = {
    name:'Gosho',
    age:5,
    score: 12,
    class:''
}

function hasProperty(obj, prop){
    return obj.hasOwnProperty(prop);
}

console.log('Has class property: '+hasProperty(obj,'class'));
console.log('Has class1 property: '+hasProperty(obj,'class1'));
console.log('Has age property: '+hasProperty(obj,'age'));
obj.class1 = 'test';
console.log('Has class1 property: '+hasProperty(obj,'class1'));
console.log(' ');