function solve(args) {
    var number = parseInt(args[0]);
    var result = parseInt((number / 100) % 10);
    if (result==7) {
        console.log("true");
    }
    else {
        console.log("false "+ result);
    }
}