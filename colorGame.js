 /*var game = {};

 game.init = function(){
 	setupModeButtons();
	setupSquares();
	reset();
 }
game.init();*/

var numSquares = 9;
var colors = [];
var pickedColor; //= pickColor();
 /* [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];
*/
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var chancesButton = document.querySelector("#chance");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
} 

	function setupModeButtons(){
		//mode buttons event listeners
		for(var i = 0; i< modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		modeButtons[2].classList.remove("selected");
		this.classList.add("selected");
	//this.textContent === "Easy" ? numSquares =3: numSquares=6;

			if(this.textContent === "Easy"){ 
				numSquares = 3; 
			} else if(this.textContent === "Medium"){ 
				numSquares = 6;
			}
			else{ 
				numSquares = 9; 
			} 
			reset();
		});
	}
}

	function setupSquares(){
		for(var i = 0; i < squares.length; i++){
		// add initial colors to squares
		//squares[i].style.background = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked squares
			var clickedColor = this.style.background;
			//compare color to pickedColor
			//console.log(clickedColor, pickedColor);
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Yahh! Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}

	function reset(){
		colors = generateRandomColors(numSquares);
	//pick a new random colors from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;

	/*resetButton.*/resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors to squares
	for(var i = 0; i < squares.length; i++){

		if(colors[i]){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}
		else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	}

/*var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var veryhardBtn= document.querySelector("#veryhardBtn");*/



/*easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	veryhardBtn.classList.remove("selected");
	numSquares = 3;

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} 
		else{
			squares[i].style.display = "none";
		}
	}
});


hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	veryhardBtn.classList.remove("selected");
	numSquares = 6;

	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} 
		else{
			squares[i].style.display = "none";
		}
	}
});*/



/*veryhardBtn.addEventListener("click", function(){
	veryhardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	hardBtn.classList.remove("selected");
	numSquares = 9;

	colors = generateRandomColors(numSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
});*/



resetButton.addEventListener("click", function(){
	/*//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random colors from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;

	resetButton.this.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors to squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.backgroundColor = "steelblue";*/
	reset();

});

colorDisplay.textContent = pickedColor;


function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i< num; i++){
	//getRandom Color and push into arr
		arr.push(randomColor());
	
	}
	//return that array
	return arr;
}
function randomColor(){
	//pick a "red" from 0 - 255
	 var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	 var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	 var b = Math.floor(Math.random() * 256);

	 return "rgb(" + r + ", " + g + ", " + b + ")"

}

