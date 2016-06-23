function solve(args) {
    var lines = args[0].split('\n'),
        count = 1,
        countGlobal=1,
        isEqual = 0;
    
    for (var i = 1; i < lines[0]; i++) {
        if (lines[i]==lines[i+1]) {
            if (isEqual==1) {
                count += 1;
                if (count>countGlobal) {
                    countGlobal = count;
                }
            } else {
                isEqual = 1;
                count += 1;
                if (count > countGlobal) {
                    countGlobal = count;
                }
            }
        } else {
            isEqual = 0;
            count = 1;
        }
    }
    console.log(countGlobal);
}