function solve(args) {
    Array.prototype.remove = function (index) {
        var someString = this[index];
        var i,
            length = this.length;
        for (i = 0; i < length; i += 1) {
            if (this[i] === someString) {
                this.splice(i,1);
                i -= 1;
            }
        }
    }

    args.remove(0);

    for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    
}