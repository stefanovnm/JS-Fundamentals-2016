function solve(args) {
    //probably wants to return the biggest prime number before the input number?
    var toCheck = parseInt(args[0]);
//    console.log(args[0]);

    for (var i = toCheck; i > 0; i--) {
        if (isPrime(i)) {
            console.log(i);
            break;
        }
    }

    //this is real shit... regex to find prime :) http://www.noulakaz.net/2007/03/18/a-regular-expression-to-check-for-prime-numbers/
    function isPrime(n) {
        return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/));
    }
}
//gives only 20point but without any task this is good
