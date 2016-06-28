function solve(args) {
    var lines = args[0].split('\n').map(Number),
        n = lines[0],
        count = 1,
        countGlobal = 1;

    for (var i = 1; i < n; i+=1) {
        if (parseInt(lines[i]) < +parseInt(lines[i + 1])) {
            count += 1;
        } else {
            if (count > countGlobal) {
                countGlobal = count;
            }
            count = 1;
        }
    }
    console.log(countGlobal);
}
