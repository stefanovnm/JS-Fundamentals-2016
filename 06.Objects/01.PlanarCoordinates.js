function solve(args) {
    var numbers = [];

    for (var i = 0, length = 12; i < length; i++) {
        numbers[i] = parseFloat(args[i]);
    }
    function isNumber(num) {
        return !isNaN(parseFloat(num)) && isFinite(num); //http://stackoverflow.com/questions/9716468/is-there-any-function-like-isnumeric-in-javascript-to-validate-numbers
    }

    var P1 = new Point(numbers[0], numbers[1]),
        P2 = new Point(numbers[2], numbers[3]),
        P3 = new Point(numbers[4], numbers[5]),
        P4 = new Point(numbers[6], numbers[7]),
        P5 = new Point(numbers[8], numbers[9]),
        P6 = new Point(numbers[10], numbers[11]);

    var line1 = new Line(P1, P2),
        line2 = new Line(P3, P4),
        line3 = new Line(P5, P6);

    console.log(lineLength(line1.pointA, line1.pointB).toFixed(2));
    console.log(lineLength(line2.pointA, line2.pointB).toFixed(2));
    console.log(lineLength(line3.pointA, line3.pointB).toFixed(2));

    if (canBeTriangle(line1,line2,line3)) {
        console.log("Triangle can be built");
    }else{
        console.log("Triangle can not be built");
    }
        
    function Point(x, y) {
        if (!isNumber(x) || !isNumber(y)) {
            throw new Error('x and y should be both numbers!');
        }
        this.x = x;
        this.y = y;
    }

    Point.prototype.toString = function () {
        return 'P(' + this.x + ',' + this.y + ')';
    }

    function Line(pointA, pointB) {
        if (!(pointA instanceof Point) || !(pointB instanceof Point)) {
            throw new Error('Both points should be instance of points!');
        }
        this.pointA = pointA;
        this.pointB = pointB;
        this.length = lineLength(pointA, pointB);
    }

    Line.prototype.toString = function () {
        return 'L{' + this.pointA.toString() + ',' + this.pointB.toString() + '}';
    }

    function lineLength(pointA, pointB) {
        var distX = pointA.x - pointB.x,
            distY = pointA.y - pointB.y;
        return Math.sqrt(distX * distX + distY * distY);
    }

    function canBeTriangle(line1, line2, line3) {
        return line1.length < line2.length + line3.length &&
            line2.length < line1.length + line3.length &&
            line3.length < line1.length + line2.length;
    }  
}

