function solve(args) {
    var toCheck = args[0];

    console.log(checkBrackets(toCheck));

    function checkBrackets(expression) {
        var i,
             count = 0,
            length = expression.length;

        for (i = 0; i < length; i += 1) {
            if (expression[i] === ')') {
                count -= 1;
            }
            if (expression[i] === '(') {
                count += 1;
            }
            if (count < 0) {
                return 'Incorrect';
            }
        }
        if (count === 0) {
            return 'Correct';
        } else {
            return 'Incorrect';
        }
    }
}