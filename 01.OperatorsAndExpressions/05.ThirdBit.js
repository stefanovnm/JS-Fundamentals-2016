function solve(args) {
    var number = parseInt(args[0]);
    var mask = 1 << 3;
    var result = number & mask;
    var bit = result >> 3;
    console.log(bit);
}