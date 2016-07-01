/*
 Problem 10. Find palindromes

 Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".

 */
console.log('Task 10:');

function extractPalindrom(text){
    var arr = text.match(/\w+/g); //separate all words
    var j,
        res = [],
        arrLength = arr.length;
    for(j=0;j<arrLength;j+=1){

        if(isPalindrom(arr[j])){
            res.push(arr[j]);
        }
    }
    return res;
}
function isPalindrom(word){
    var i,
        wordLength=word.length;
    if(wordLength===1){
        return true;
    }
    word=word.toLowerCase();
    for(i=0;i<Math.floor(wordLength/2);i+=1){
        if(word[i]!== word[wordLength-i-1]){
            return false;
        }
    }
    return true;
}


var text= 'Honda Civic is not a racecar!'

console.log(text);
console.log(extractPalindrom(text));
console.log(' ');