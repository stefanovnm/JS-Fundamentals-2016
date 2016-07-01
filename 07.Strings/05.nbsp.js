function solve(args) {
    var input = args[0];

    console.log(spaceReplace(input));

    function spaceReplace(text) {
        var result = '',
             i,
            length = text.length;
        for (i = 0; i < length; i += 1) {
            if (text[i] === ' ') {
                result += '&nbsp;';
            } else {
                result += text[i];
            }
        }
        return result;
    }
}