function solve(args) {
    var lines = args[0].split('\n').map(Number),
        min,
        minIndex,
        sortedArray = [],
        length=lines[0];

    for (var k = 0; k < lines[0]; k++) {
        sortedArray[k] = lines[k + 1];
    }

    for (var i = 0; i < length; i++) {
        min = sortedArray[i];
        minIndex = i;

        for (var j = i + 1; j < length; j++) {
            if (min > sortedArray[j]) {
                min = sortedArray[j];
                minIndex = j;
            }
        }

        sortedArray[minIndex] = sortedArray[i];
        sortedArray[i] = min;
    }

    console.log(sortedArray.join("\n"));
}