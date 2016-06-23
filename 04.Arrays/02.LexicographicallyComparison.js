function solve(args) {
    var lines = args[0].split('\n');
    var length = Math.min(lines[0].length, lines[1].length);

    if (lines[0]==lines[1]) {
        console.log("=");
    } else {
        for (var i = 0; i < length; i++) {
            if(lines[0][i]<lines[1][i]){
                console.log("<");
                return;
            } else {
                if (lines[0][i] > lines[1][i]) {
                    console.log(">");
                    return;
                }
            }
        }
        if (lines[0].length>lines[1].length) {
            console.log(">");
        } else {
            console.log("<");
        }
    }
}