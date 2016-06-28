function solve(args) {
    var lines = args[0].split('\n'),
        n = lines[0],
        secondRow = lines[1];
        numbers = lines[1].split(' '),
        searched = lines[2];

    console.log(countNumber(searched));

    function countNumber(arr, number) {
        var i,
            counter = 0,
            arrLength = arr.length;

        for (i = 0; i < arrLength; i += 1) {
            if (arr[i] === number) {
                counter += 1;
            }
        }

        return counter;
    }
}