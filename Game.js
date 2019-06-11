
const canvas = document.getElementById("tetris");
const c = canvas.getContext("2d");

const ROW = 6;
const COL = 6;
const SQUARE_SIZE = 20;
const EMPTY_CELL = "WHITE";


function drawSquare(x,y,color){
    c.fillStyle = color;
    c.fillRect(x*SQUARE_SIZE,y*SQUARE_SIZE,SQUARE_SIZE,SQUARE_SIZE);

    c.strokeStyle = "BLACK";
    c.strokeRect(x*SQUARE_SIZE,y*SQUARE_SIZE,SQUARE_SIZE,SQUARE_SIZE);
}


let grid = [];
for( i = 0; i <ROW; i++){
    grid[i] = [];
    for(j = 0; j < COL; j++){
        grid[i][j] = EMPTY_CELL;
    }
}


function drawGrid(){
    for( i = 0; i <ROW; i++){
        for(j = 0; j < COL; j++){
            drawSquare(i,j,grid[i][j]);
        }
    }
}

drawGrid();

const PIECES = [
    [A,"red"],
    [B,"green"],
    [C,"yellow"],
    [D,"blue"],
];



function Cells(piece, color){
        this.piece = piece;
        this.color = color;
        this.activePiece = this.piece[0];
        this.x = 3;
        this.y = 2;
}

Cells.prototype.drawCell = function(){
    for( i = 0; i < this.activePiece.length; i++){
        for(j = 0; j < this.activePiece.length; j++)
                drawSquare(this.x + i,this.y + i, this.color);
        }
    }


let p = new Cells(PIECES[0][0], PIECES[0][1]);

p.drawCell();