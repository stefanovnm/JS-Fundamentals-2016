/*
 Problem 6. Larger than neighbours

 Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).

 */
console.log("Task 6:");
var position=Math.floor(Math.random()*14),//0-13
    array = [1,2,3,2,1,4,5,3,2,1,4]; // 11 elements
console.log(array);
function checkAtPos(pos, arr){
    var arrLength=arr.length,
        result;
    if(arrLength<=pos){
        result=[false,'The array does not have '+pos+' elements!'];
    }
    else if(pos!==arrLength-1 && pos!==0){
            if(arr[pos]>arr[pos-1] && arr[pos]>arr[pos+1]){
                result=[true,'The element '+arr[pos]+' at position '+pos+' is larger than the neighbours '+arr[pos-1]+' and '+arr[pos+1]];
            }
            else{
                result=[false,'The element '+arr[pos]+' at position '+pos+' is NOT larger than both of the neighbours '+arr[pos-1]+' and '+arr[pos+1]];
            }
        }
        else{
            if(pos===0 && arr[pos]>arr[pos+1]){
                result=[true,'The element '+arr[pos]+' at position '+pos+' is larger than the neighbour '+arr[pos+1]];
            }
            else if(pos===arrLength-1 && arr[pos]>arr[pos-1]){
                result=[true,'The element '+arr[pos]+' at position '+pos+' is larger than the neighbour '+arr[pos-1]];
            }
                else{
                    result=[false,'The element '+arr[pos]+' at position '+pos+' is smaller than the neighbour'];
                }
        }
    return result;
}
//reworked for the next task
console.log(checkAtPos(position,array)[1]);
console.log(checkAtPos(2,array)[1]);
console.log(checkAtPos(10,array)[1]);
console.log(" ");