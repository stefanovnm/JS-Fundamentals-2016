function solve(args) {
    var number = parseInt(args[0]);
    if (number%2==0) {
        console.log("even " + args[0]);
    } else {
        console.log("odd " + args[0]);
    }
}