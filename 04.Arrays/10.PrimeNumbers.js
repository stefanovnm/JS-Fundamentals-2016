function solve(args) {
    var toCheck = parseInt(args[0]);

    function eratosthenes(n) {
        var array = [],
            upperLimit = Math.sqrt(n),
            output;

        for (var i = 0; i <= n; i++) {
            array.push(true);
        }

        for (var i = 2; i <= upperLimit; i++) {
            if (array[i]) {
                for (var j = i * i; j <= n; j += i) {
                    array[j] = false;
                }
            }
        }

        for (var i = n; i >= 2; i--) {
            if (array[i]) {
                output = i;
                break;
            }
        }

        return output;
    };

    var result = eratosthenes(toCheck);
    console.log(result);
}

//this is real shit... regex to find prime :) http://www.noulakaz.net/2007/03/18/a-regular-expression-to-check-for-prime-numbers/
/*
function isPrime(n) {
    return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/));
};
*/


//http://stackoverflow.com/questions/15471291/sieve-of-eratosthenes-algorithm-in-javascript-running-endless-for-large-number


