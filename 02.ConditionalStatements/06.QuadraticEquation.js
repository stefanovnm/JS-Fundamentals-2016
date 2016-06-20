function solve(args) {
    var a = parseFloat(args[0]);
    var b = parseFloat(args[1]);
    var c = parseFloat(args[2]);

    var discr,
            x1,
            x2;

    discr = b * b - 4 * a * c;

    if (a != 0) {
        if (discr >= 0) {
            x1 = ((-b + Math.sqrt(discr)) / (2 * a)).toFixed(2);
            x2 = ((-b - Math.sqrt(discr)) / (2 * a)).toFixed(2);
            if (x1 == x2) {
                console.log("x1=x2=" + x2);
            }
            else {
                if (parseFloat( x1) <parseFloat( x2)) {
                    console.log("x1=" + x1 + "; x2=" + x2);
                } else {
                    console.log("x1=" + x2 + "; x2=" + x1);
                }
                
            }
        }
        else {
            console.log("no real roots");
        }
    }
    else if (b != 0) {
        x1 = -c / b;
        console.log("x1=x2=" + x1);
    }
    else if (c == 0) {
        console.log("Every number is possible root for this equation");
    }
    else {
        console.log("This equation has no real root");
    }
}