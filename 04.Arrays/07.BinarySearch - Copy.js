function solve(args) {
    var lines = args[0].split('\n').map(Number),
        length = lines[0],
        array = [],
        searched = lines[length + 1],
        min,
        max,
        mid,
        isFound = false;

    for (var i = 0; i < length; i++) {
        array[i] = parseInt(lines[i + 1]);
    }

    
    array.sort;
    min = 0;
    max = array.length;

    while (max>= min) {
        mid = Math.floor((min + max) / 2);
        if (array[mid] < searched) {
            min = mid + 1;
        } else if (array[mid] > searched) {
            max = mid - 1;
        } else {
            console.log(mid);
            isFound = true;
            break;
        }
    }

    if (!isFound) {
        console.log('-1');
    }  
}
