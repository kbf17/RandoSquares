document.addEventListener('DOMContentLoaded', function() {

});
//Global Var
var firstButton = document.createElement('button');
    firstButton.className = ('firstButton');
    firstButton.style.border = '2px solid green';
    firstButton.style.width = '2em';
    firstButton.style.height = '2em';
    firstButton.style.margin = '30px';
    firstButton.style.float = 'left';
document.body.appendChild(firstButton);
var squares = ('div');
var numberOfSquares = document.getElementsByTagName(squares);


firstButton.addEventListener('click', function() {
    var squares = document.createElement('div');
    squares.className = ('squares');
    squares.id = (numberOfSquares.length);
    document.body.appendChild(squares);
    squares.addEventListener('mouseover', mouseOver);
    squares.addEventListener('mouseout', mouseOut);
    function mouseOver () {
        squares.innerText = squares.id;
        //find less lazy way to do this. Opacity?
    };
    function mouseOut () {
        squares.innerText = "";
    };

    squares.addEventListener('click', function() {
        // this.className = ('newColor');
        this.style.backgroundColor = randomColor();
        console.log(randomColor);
    });

    squares.addEventListener('dblclick', function() {
        if (squares.id % 2 === 0) {
            //element after square removed
            console.log(true);
        }
        else  {
            //element before square removed
            console.log(false);
        }
    })




});

// random color generator
function randomColor(){
    var allowed = "0369cf".split( '' ), s = "#";
    while ( s.length < 4 ) {
       s += allowed.splice( Math.floor( ( Math.random() * allowed.length ) ), 1 );
    }
    return s;
}

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}