let grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

function TicTacToeX(x, y){
    grid[x][y] = 1;
    
    console.log(grid);

    for(i=0;i<grid.length;i++){
        let XresultsH = grid[i].filter(function(entry) {
            return entry == 1
        })
        
        if(XresultsH.length == 3) {
            console.log("X Winner")
        }
    }

    //Needs fixed because if a X and an O are in the same line, then marks it as X winning
    /*let XresultsV0 = grid[0][0]+grid[1][0]+grid[2][0];

    if(XresultsV0 == 3){
        console.log("X Winner")
    }

    let XresultsV1 = grid[0][1]+grid[1][1]+grid[2][1];

    if(XresultsV1 == 3){
        console.log("X Winner")
    }

    let XresultsV2 = grid[0][2]+grid[1][2]+grid[2][2];

    if(XresultsV2 == 3){
        console.log("X Winner")
    }*/
}

function TicTacToeO(x, y){
    grid[x][y] = 2;
    
    console.log(grid);

    for(i=0;i<grid.length;i++){
        let OresultsH = grid[i].filter(function(entry) {
            return entry == 2;
        })
        
        if(OresultsH.length == 3) {
            console.log("O Winner")
        }
    }

    let OresultsV0 = grid[0][0]+grid[1][0]+grid[2][0];

    if(OresultsV0 == 6){
        console.log("O Winner")
    }

    let OresultsV1 = grid[0][1]+grid[1][1]+grid[2][1];

    if(OresultsV1 == 6){
        console.log("O Winner")
    }

    let OresultsV2 = grid[0][2]+grid[1][2]+grid[2][2];

    if(OresultsV2 == 6){
        console.log("O Winner")
    }
}