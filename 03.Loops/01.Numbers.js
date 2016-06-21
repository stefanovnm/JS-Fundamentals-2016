function solve(args) {
    var n = args[0],
        result = "";

    for (var i = 1; i <= n; i += 1) {
        result += " " + i;
    }

    console.log(result.trimLeft());
}