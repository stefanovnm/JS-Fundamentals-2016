function solve(args) {
    var numbers = args[1].split(' ').map(Number);

    console.log(sortDescending(numbers).reverse().join(' '));


    function sortDescending(arr) {
        var length = arr.length,
            max,
            maxIndex,
            temp;

        for (var i = 0; i < length; i+=1) {
            max = GetMax(i, arr);
            maxIndex = arr.indexOf(max, i);
            temp = arr[i];
            arr[i] = max;
            arr[maxIndex] = temp;
        }

        return arr;
    }

    function GetMax(index, arr) {
        var length = arr.length,
            max = arr[index];

        for (var i = index; i < length; i+=1) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }

        return max;
    }
}