function solve(args) {
    var option = args[0],
        template = args[1];
    console.log(option);
    console.log(template);
    String.prototype.format = function (options) {
        var option,
            pattern,
            result = this;

        for (option in options) {
            pattern = new RegExp('\#\{' + option + '\}');
            result = result.replace(pattern, options[option]);
        }
        return result;
    };
   

    console.log(template.format(option));
}