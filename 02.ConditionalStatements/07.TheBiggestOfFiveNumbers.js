function solve(args) {
    var a = parseFloat(args[0]);
    var b = parseFloat(args[1]);
    var c = parseFloat(args[2]);
    var d = parseFloat(args[3]);
    var e = parseFloat(args[4]);

    if (a > b && a > c && a > d && a > e) {
        console.log(a);
    }
    else if (b > c && b > d && b > e) {
        console.log(b);
    }
    else if (c > d && c > e) {
        console.log(c);
    }
    else if (d > e) {
        console.log(d);
    }
    else {
        console.log(e);
    }
}