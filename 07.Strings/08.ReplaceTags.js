function solve(args) {
    var input = args[0];

    console.log(replaceHTMLtag(input));

    function replaceHTMLtag(text) {
        var result = text;
        while (result.indexOf('<a href="') > 0) {
            result = result.replace('<a href="', '[URL=')
                .replace('">', ']')
                .replace('</a>', '[/URL]');
        }
        return result;
    }
}