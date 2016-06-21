function solve(args) {
    var min = parseFloat(args[0]),
        max = parseFloat(args[0]),
        sum = 0,
        avg = 0;

    for (var i = 0; i < args.length; i++) {
        if (min > parseFloat(args[i])) {
            min = parseFloat(args[i]);
        }

        if (max < parseFloat(args[i])) {
            max = parseFloat(args[i]);
        }

        sum += parseFloat(args[i]);
    }

    avg = sum / args.length;

    console.log("min=" + min.toFixed(2));
    console.log("max=" + max.toFixed(2));
    console.log("sum=" + sum.toFixed(2));
    console.log("avg=" + avg.toFixed(2));
}