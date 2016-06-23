function solve(args) {
    var lines = args[0].split('\n').map(Number),
        count = 1,
        mostFrequent,
        countGlobal = 1,
        isEqual = 0,
        array = [],
        length = lines[0];

    for (var i = 0; i < length; i++) {
        array[i] = parseInt(lines[i + 1]);
    }

    array.sort();

    for (var i = 0; i < length; i++) {
        if (array[i] == array[i + 1]) {
            if (isEqual == 1) {
                count += 1;
                if (count > countGlobal) {
                    countGlobal = count;
                    mostFrequent = array[i];
                }
            } else {
                isEqual = 1;
                count += 1;
                if (count > countGlobal) {
                    countGlobal = count;
                    mostFrequent = array[i];
                }
            }
        } else {
            isEqual = 0;
            count = 1;
        }
    }
    console.log(mostFrequent +" (" + countGlobal + " times)");
}