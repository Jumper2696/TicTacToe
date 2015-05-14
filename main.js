
$('img').attr('src', 'e.png');

$('img').on('click', onClickSquare);

var turn = "x";

function getSquare(element) { console.log (element.src) 
	var path = element.src;
	return path.charAt(path.length - 5);
}

function setSquare(element, turn) {
	element.src = turn + ".png";
}

function onClickSquare(event) {
	var element = event.target;
 
 	
	if (getSquare(element) == "e") {
	   setSquare(element, turn);
	   checkWin();

		if (turn == "x") {
		   turn = "o";
		}
		else {
		  turn = "x";
		}
	}
}

var a = $('img');

function checkWin() {
  if (getSquare(a[0]) == "x") {
  alert("You Win!");
}
	