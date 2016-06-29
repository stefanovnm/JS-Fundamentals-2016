function solve(args) {
    var numbers = args[1].split(' ').map(Number),
        searched = parseInt(args[2]);

    return(countNumber(numbers, searched));

    function countNumber(arr, number) {
        var i,
            counter = 0,
            arrLength = arr.length;

        for (i = 0; i < arrLength; i += 1) {
            if (arr[i] == number) {
                counter += 1;
            }
        }

        return counter;
    }
}