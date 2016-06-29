function solve(args) {
    var numbers = args[1].split(' ').map(Number),
        length = numbers.length;
        count = 0;
    
    for (var i = 0; i < length; i+=1) {
        if (checkAtPos(i,numbers)){
            count += 1;
        }
    }
    console.log(count);

    function checkAtPos(pos, arr) {
        var arrLength = arr.length,
            result = false;
        if (pos !== arrLength - 1 && pos !== 0) {
            if (arr[pos] > arr[pos - 1] && arr[pos] > arr[pos + 1]) {
                result = true;
            }
            else {
                result = false;
            }
        }
        
        return result;
    }
}