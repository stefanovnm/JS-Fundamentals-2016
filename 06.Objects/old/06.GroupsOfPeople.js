/*
 Problem 6.

 Write a function that groups an array of people by age, first or last name.
 The function must return an associative array, with keys - the groups, and values - arrays with people in this groups

 Use function overloading (i.e. just one function)

 Example:

 var people = {…};
 var groupedByFname = group(people, 'firstname');
 var groupedByAge= group(people, 'age');


 */
console.log('Task 6:');

function Person(firstName, lastName, age){
    if(isNaN(age)){
        throw new Error('Age should be number');
    }
    this.firstName= firstName;
    this.lastName = lastName;
    this.age = age;
}

function group(arr, prop){
    var resultArr=[],
        i;

    if(arr.hasOwnProperty(prop)){
        throw new Error('No such property');
    }

    for(i in arr){
        var currentProp = arr[i][prop];
        if(!resultArr.hasOwnProperty(currentProp)){
            resultArr[currentProp]=[];
        }
        resultArr[currentProp].push(arr[i]);
    }
    return resultArr;
}

var people = [
    new Person('John','B',16),
    new Person('John','A',18),
    new Person('Jack','A',9),
    new Person('Tester',"Test",9)
];
var groupedByFname = group(people, 'firstName');
var groupedByLname = group(people, 'lastName');
var groupedByAge= group(people, 'age');

console.log(groupedByAge);
console.log(groupedByFname);
console.log(groupedByLname);