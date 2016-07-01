function solve(args) {
    var input = args[0];

    console.log(changeInRegions(input));

    function changeInRegions(text) {
        var workingText = text,
            i = 0,
            length = workingText.length,
            res = '';

        while (i < length) {
            if (workingText[i] !== '<') {
                res += workingText[i];
                i += 1;
            } else {
                i += 1;
                if (workingText[i] === 'o') {
                    i += 8;
                    while (workingText[i] !== '<') {
                        res += workingText[i];
                    }
                    i += 10;
                }
                if (workingText[i] === 'l') {
                    i += 8;
                    while (workingText[i] !== '<') {
                        res += workingText[i].toLowerCase();
                        i += 1;
                    }
                    i += 10;
                }
                if (workingText[i] === 'u') {
                    i += 7;
                    while (workingText[i] !== '<') {
                        res += workingText[i].toUpperCase();
                        i += 1;
                    }
                    i += 9;
                }
            }
        }

        return res;
    }
}