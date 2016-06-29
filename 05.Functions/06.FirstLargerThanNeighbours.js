function solve(args) {
    var numbers = args[1].split(' ').map(Number);
        
    console.log(FirstLargerPos(numbers));

    function FirstLargerPos(arr) {
        var arrLength = arr.length,
            result=-1;

        for (i = 1; i < arrLength-1; i+=1) {
            if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
                result = i;
                break;
            }
        }

        return result;
    }
}