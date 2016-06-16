function solve(args) {
    var number = parseInt(args[0]);
    var isPrime = true;
    if (number < 0) {
        console.log(false);
    } else {
        for (var i = 2, range = number / 2; i <= range; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
        console.log(isPrime);
    }
}