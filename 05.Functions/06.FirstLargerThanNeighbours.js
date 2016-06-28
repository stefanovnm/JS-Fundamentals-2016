/*
 Problem 7. First larger than neighbours

 Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
 Use the function from the previous exercise.

 */
console.log("Task 7:");

var array = [1,2,3,2,1,4,5,3,2,1,4];
var array2=[1,2,3,4,5,6,7];

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

function findFirst(arr1){
    var i,
        arr1Length=arr1.length;
    for(i=0; i<arr1Length;i+=1){
        if(checkAtPos(i,arr1)[0]){
            console.log(checkAtPos(i,arr1)[1]);
            break;
        }
        if(i===arr1Length){
            console.log('There is no element that is bigger than neighbours!');
        }
    }
}
console.log(array);
findFirst(array);
console.log(array2);
findFirst(array2);