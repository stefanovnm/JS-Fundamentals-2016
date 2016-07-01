function solve(args) {
    var string = args[0];

    function reverse(string) {
        var length = string.length
        reversed = '';
        for (i = length - 1; i >= 0; i -= 1) {
            reversed += string[i];
        }
        return reversed;
    }

    console.log(reverse(string));
}


