function solve(args) {
    var lines = args[0].split('\n').map(Number),
        count = 1,
        countGlobal = 1,
        isEqual = 0;

    for (var i = 1; i < lines[0]; i++) {
        if ((parseInt(lines[i]) + 1) == parseInt(lines[i + 1])) {
            if (isEqual == 1) {
                count += 1;
                if (count > countGlobal) {
                    countGlobal = count;
                }
            } else {
                isEqual = 1;
                count += 1;
                if (count > countGlobal) {
                    countGlobal = count;
                }
            }
        } else {
            isEqual = 0;
            count = 1;
        }
    }
    console.log(countGlobal);
}
//TODO
//First test is ok and then 0/100
//something is wrong here and cannot find what?