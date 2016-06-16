function solve(args) {
    var number = parseInt(args[0]);
    if (number%5==0 && number%7==0) {
        console.log("true " + args[0]);
    } else {
        console.log("false " + args[0]);
    }
}