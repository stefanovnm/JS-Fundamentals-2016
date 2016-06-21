/*
 Problem 4. Lexicographically smallest

 Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.

 */
console.log("Task 4:")

function getProperties(element){
 var elements=Object.getOwnPropertyNames(element);
 elements.sort();

 console.log("Element "+ element);
 console.log("Lexicographically first: " + elements[0]);
 console.log("Lexicographically last: "+ elements[elements.length-1]);
 console.log(" ");
}
getProperties(document);
getProperties(window);
getProperties(navigator);