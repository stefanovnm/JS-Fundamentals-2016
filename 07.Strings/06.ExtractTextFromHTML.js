function solve(args) {
    var input = "";
    for (var i = 0, length = args.length; i < length; i+=1) {
        input += args[i].trim();
    }

    console.log(input);
    console.log(extractText(input));

    function extractText(text) {
        var i = 0,
             length = text.length,
             result = '';
        for (i = 0; i < length; i += 1) {
            if (text[i] === '<') {
                i = text.indexOf('>', i + 1);
            } else {
                result += text[i];
            }
        }
        return result;
    }
}