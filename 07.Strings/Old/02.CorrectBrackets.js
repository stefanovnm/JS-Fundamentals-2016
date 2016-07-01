/*
 Problem 2. Correct brackets

 Write a JavaScript function to check if in a given expression the brackets are put correctly.

 Example of correct expression: ((a+b)/5-d). Example of incorrect expression: )(a+b)).
 */
console.log('Task 2:');

function checkBrackets(expression){
    var i,
         count=0,
        length=expression.length;

    for(i=0;i<length;i+=1){
        if(expression[i]===')'){
            count-=1;
        }
        if(expression[i]==='('){
            count+=1;
        }
        if(count<0){
            return 'incorrect';
        }
    }
    if(count===0){
        return 'correct';
    }else{
        return 'incorrect';
    }
}
console.log('((a+b)/5-d): '+checkBrackets('((a+b)/5-d)'));
console.log(')(a+b)): '+checkBrackets(')(a+b))'));


console.log(' ');