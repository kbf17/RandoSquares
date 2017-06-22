document.addEventListener('DOMContentLoaded', function() {

});
//Global Var
//breaks project if in DOMContentLoaded
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
        this.style.backgroundColor = randomColor();
    });
    squares.addEventListener('dblclick', function() {
        nextSquare = squares.nextSibling;
        lastSquare = squares.previousSibling;
        if (squares.id % 2 === 0 && nextSquare !== null) {
            nextSquare.remove();
        } else if (squares.id % 2 !== 0 && lastSquare !== firstButton) {
                lastSquare.remove();
            } else {
                alert('No box available');
            }
    });
});
// random color generator
function randomColor(){
    var allowed = "0369cf".split( '' ), s = "#";
    while ( s.length < 4 ) {
       s += allowed.splice( Math.floor( ( Math.random() * allowed.length ) ), 1 );
    }
    return s;
}

