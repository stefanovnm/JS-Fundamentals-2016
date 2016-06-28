function solve(args) {
    var int = args[0].split(' ');

    GetMax(parseInt(int[0]), parseInt(int[1]), parseInt(int[2]));

    function GetMax(int1, int2, int3) {
        if (int1 >= int2) {
            if (int1 >= int3) {
                console.log(int1);
            } else {
                console.log(int3);
            }
        } else if(int2 >= int3){
            console.log(int2);
        } else {
            console.log(int3);
        }
    }
}