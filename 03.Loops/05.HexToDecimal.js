function solve(args) {
    var n = args[0],
        length = n.length,
        result=0;


    for (var i = 0; i < length; i++) {
        result += Math.pow(16, length - i-1) * RetrunNumber(n[i]);
    }

    console.log(result);

    function RetrunNumber(n) {
        switch (n) {
            case '0': return 0;
            case '1': return 1;
            case '2': return 2;
            case '3': return 3;
            case '4': return 4;
            case '5': return 5;
            case '6': return 6;
            case '7': return 7;
            case '8': return 8;
            case '9': return 9;
            case 'A': return 10;
            case 'B': return 11;
            case 'C': return 12;
            case 'D': return 13;
            case 'E': return 14;
            case 'F': return 15;
        }
    };
}