var numSquare = 6;
var colors = changeRandomColors(numSquare);
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var pickedColor = pickColor();
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#resetBtn");
resetButton.addEventListener("click", function(){
    colors = changeRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];
    }
    h1.style.background = "steelblue";

})

var easyButton = document.querySelector("#easyBtn");
easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquare = 3;
    colors = changeRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < square.length; i++) {
        if (colors[i]) {
            square[i].style.backgroundColor = colors[i];
        } else {
            square[i].style.display = "none";
        }
    }
})

var hardButton = document.querySelector("#hardBtn");
hardButton.addEventListener("click", function() {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquare = 6;
    colors = changeRandomColors(numSquare);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = colors[i];
            square[i].style.display = "block";
    }
})

colorDisplay.textContent = pickedColor;
for (var i=0; i<square.length; i++) { 
    square[i].style.backgroundColor = colors[i];

    square[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            changeColor(pickedColor);
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?"
            h1.style.background = clickedColor;
        } else {
            this.style.backgroundColor =  "#232323"; 
            messageDisplay.textContent = "Try Again";
        }
    })
};

function changeColor (color) {
    for( var i=0; i<square.length; i++) {
        square[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function changeRandomColors (num) {
    var arr = [];
    for(var i=0; i<num; i++) {
        arr.push(randomColor());
    }
    return arr;

}

function randomColor () {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

