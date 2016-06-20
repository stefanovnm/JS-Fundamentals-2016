function solve(args) {
    var a = parseFloat(args[0]);
    var b = parseFloat(args[1]);
    var c = parseFloat(args[2]);
    var result;

    if (a > b) {
        if (b >= c) {
            result = a + " " + b + " " + c;
        }
        else if (a <= c) {
            result = c + " " + a + " " + b;
        }
        else {
            result = a + " " + c + " " + b;
        }

    }
    else if (b >= c) {
        if (a >= c) {
            result = b + " " + a + " " + c;
        }
        else {
            result = b + " " + c + " " + a;
        }
    }
    else {
        result = c + " " + b + " " + a;
    }
    console.log(result);
}