function solve(args) {
    let r = +args[0];

    let board = args.slice(2, 2+r);
    let moves = args.slice(3+r);

    //console.log(board);

    function parseMove(moves) {
        let cells = moves.split(' ');

        return{
            from: {
                r: r - Number(cells[0][1]),
                c: cells[0].charCodeAt(0) - 97
            },
            to: {
                r: r - Number(cells[1][1]),
                c: cells[1].charCodeAt(0) - 97
            }
        };
    }

    function canMoveBishop(from, to) {
        if(Math.abs(from.r - to.r) !== Math.abs(from.c - to.c)){
            return false;
        }

        if((from.c === to.c) && (from.r === to.r)){
            return false;
        }

        let deltaR = from.r > to.r ? -1 : 1,
            deltaC = from.c > to.c ? -1 : 1;

        while((from.r !== to.r) || (from.c !== to.c) ){
            
            from.r += deltaR;
            from.c += deltaC;

            if(board[from.r][from.c] !== '-'){
                return false;
            }
        }

        return true;

    }

    function canMoveRook(from, to) {
        if((from.c !== to.c) && (from.r !== to.r)){
            return false;
        }

        if((from.c === to.c) && (from.r === to.r)){
            return false;
        }

        let deltaR = from.y > to.y ? -1 : 1;
        let deltaC = from.c > to.c ? -1 : 1;

        if(from.r !== to.r) {
            deltaR = 0;
        } else {
            deltaC = 0;
        }

        while((from.r !== to.r) || (from.c !== to.c) ){
            from.r += deltaR;
            from.c += deltaC;
            console.log(from.r+"-"+from.c+ " --> " + to.r +"-"+ to.c );
            console.log(from.r + " " + from.c + "-" + board[from.r][from.c]);

            if(board[from.r][from.c] !== '-'){
                return false;
            }
        }

        return true;
    }

    function canMoveQueen(from, to) {
        return canMoveBishop(from, to) || canMoveRook(from,to);
    }
    
    for(let m of moves){
        let move = parseMove(m);
        let piece = board[move.from.r][move.from.c];

        if(piece === 'R'){
            let canMove = canMoveRook(move.from, move.to);
            console.log(canMove ? 'yes' : 'no');            
        } else if(piece === 'B') {
            let canMove = canMoveBishop(move.from, move.to);
            console.log(canMove ? "yes" : "no");
        } else if(piece === 'Q'){
            let canMove = canMoveQueen(move.from, move.to);
            console.log(canMove ? "yes" : "no");
        }else {
            console.log('no');
        }
    }

}

solve([
    '3',
    '4',
    '--R-',
    'B--B',
    'R--R',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 c2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 b3',
    'd2 c1',
    'b1 b2',
    'c3 b1',
    'a2 a3',
    'd1 d3',
]);