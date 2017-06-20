document.addEventListener('DOMContentLoaded', function() {

});

var firstButton = document.createElement('button');
    firstButton.className = ('firstButton');
    firstButton.style.border = '2px solid green';
    firstButton.style.width = '2em';
    firstButton.style.height = '2em';
    firstButton.style.margin = '30px';
    firstButton.style.float = 'left';
document.body.appendChild(firstButton);



firstButton.addEventListener('click', function() {
    var squares = document.createElement('div');
    squares.className = ('squares');
    squares.id = (numberOfSquares.length);
    document.body.appendChild(squares);
    squares.innerText = squares.id;
    squares.addEventListener('mouseover', mouseOver)
    squares.addEventListener('mouseout', mouseOut);
    function mouseOver () {
       squares.style.opacity = '1';
    };
    function mouseOut () {
        squares.style.opacity = '0';
    };
})




var squares = ('div');

var numberOfSquares = document.getElementsByTagName(squares);
var randomColor = Math.floor(Math.random()*16777215).toString(16);


// squares.addEventListener('click', function() {
//     squares.style.backgroundColor = randomColor;
//     });