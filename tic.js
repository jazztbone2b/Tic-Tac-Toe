//Coded by Collin Banks
let user = 'X';
let computer = 'O';
let status = false;

let spaceOne = document.querySelector('#one');
let spaceTwo = document.querySelector('#two');
let spaceThree = document.querySelector('#three');
let spaceFour = document.querySelector('#four');
let spaceFive = document.querySelector('#five');
let spaceSix = document.querySelector('#six');
let spaceSeven = document.querySelector('#seven');
let spaceEight = document.querySelector('#eight');
let spaceNine = document.querySelector('#nine');

// Array for item filtering
let spacesArr = document.getElementsByClassName('spaces');

//find a way to delay the computer input for 1 second
function welcome(){
	$('#welcome').fadeIn(1500)
	setTimeout(prompt, 2500);
}
//fade in the user prompt on load
function prompt(){
	$('#welcome').hide()
	$('#prompt').fadeIn(1500);
}
//function for games where user is X
function computerMoveX(){
	movesAlgorithm(user, computer);
}
//function for game where user is O
function computerMoveO(){
	let _user = 'O';
	let _computer = 'X';
	movesAlgorithm(_user, _computer);
}

function movesAlgorithm(u,c){
	let user = u;
	let computer = c;
//**********catch all to make the comp win when it has two O's next to each other**********//
	if(spaceOne.innerHTML === computer && spaceFour.innerHTML === computer && spaceSeven.innerHTML === ''){
		spaceSeven.innerHTML = computer;
	} else if(spaceOne.innerHTML === computer && spaceFive.innerHTML === computer && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	} else if(spaceOne.innerHTML === computer && spaceSeven.innerHTML === computer && spaceFour.innerHTML === ''){
		spaceFour.innerHTML = computer;
	} else if(spaceOne.innerHTML === computer && spaceNine.innerHTML === computer && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	} else if(spaceOne.innerHTML === computer && spaceTwo.innerHTML === computer && spaceThree.innerHTML === ''){
		spaceThree.innerHTML = computer;
	} else if(spaceOne.innerHTML === computer && spaceThree.innerHTML === computer && spaceTwo.innerHTML === ''){
		spaceTwo.innerHTML = computer;
	} 
	else if(spaceTwo.innerHTML === computer && spaceFive.innerHTML === computer && spaceEight.innerHTML === ''){
		spaceEight.innerHTML = computer;
	} else if(spaceTwo.innerHTML === computer && spaceEight.innerHTML === computer && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	}
	else if(spaceThree.innerHTML === computer && spaceNine.innerHTML === computer && spaceSix.innerHTML === ''){
		spaceSix.innerHTML = computer;
	} else if(spaceThree.innerHTML === computer && spaceSix.innerHTML === computer && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	} else if(spaceThree.innerHTML === computer && spaceFive.innerHTML === computer && spaceSeven.innerHTML === ''){
		spaceSeven.innerHTML = computer;
	} else if(spaceThree.innerHTML === computer && spaceSeven.innerHTML === computer && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	}
	else if(spaceFour.innerHTML === computer && spaceFive.innerHTML === computer && spaceSix.innerHTML === ''){
		spaceSix.innerHTML = computer;
	} else if (spaceFour.innerHTML === computer && spaceSix.innerHTML === computer && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	}
	else if(spaceSix.innerHTML === computer && spaceFive.innerHTML === computer && spaceFour.innerHTML === ''){
		spaceFour.innerHTML = computer;
	} else if(spaceSix.innerHTML === computer && spaceFour.innerHTML === computer && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	}
	else if(spaceSeven.innerHTML === computer && spaceEight.innerHTML === computer && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	} else if(spaceSeven.innerHTML === computer && spaceNine.innerHTML === computer && spaceEight.innerHTML === ''){
		spaceEight.innerHTML = computer;
	} else if(spaceSeven.innerHTML === computer && spaceFive.innerHTML === computer && spaceThree.innerHTML === ''){
		spaceThree.innerHTML = computer;
	} 
	else if(spaceEight.innerHTML === computer && spaceFive.innerHTML === computer && spaceTwo.innerHTML === ''){
		spaceTwo.innerHTML = computer;
	}
	else if(spaceNine.innerHTML === computer && spaceEight.innerHTML === computer && spaceSeven.innerHTML === ''){
		spaceSeven.innerHTML = computer;
	} else if(spaceNine.innerHTML === computer && spaceSeven.innerHTML === computer && spaceEight.innerHTML === ''){
		spaceEight.innerHTML = computer;
	} else if(spaceNine.innerHTML === computer && spaceFive.innerHTML === computer && spaceOne.innerHTML === ''){
		spaceOne.innerHTML = computer;
	} else if(spaceNine.innerHTML === computer && spaceOne.innerHTML === computer && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	}

//**********Code to block the user from winning**********//
	//block user from winning in row 1, down, right, diagonal
	else if(spaceOne.innerHTML === user && spaceFour.innerHTML === user && spaceSeven.innerHTML === ''){
		spaceSeven.innerHTML = computer;
	} else if(spaceOne.innerHTML === user && spaceFive.innerHTML === user && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	} else if(spaceOne.innerHTML === user && spaceSeven.innerHTML === user && spaceFour.innerHTML === ''){
		spaceFour.innerHTML = computer;
	} else if(spaceOne.innerHTML === user && spaceNine.innerHTML === user && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	} else if(spaceOne.innerHTML === user && spaceTwo.innerHTML === user && spaceThree.innerHTML === ''){
		spaceThree.innerHTML = computer;
	} else if(spaceOne.innerHTML === user && spaceThree.innerHTML === user && spaceTwo.innerHTML === ''){
		spaceTwo.innerHTML = computer;
	} 
	//block user from winning row 2 down
	else if(spaceTwo.innerHTML === user && spaceFive.innerHTML === user && spaceEight.innerHTML === ''){
		spaceEight.innerHTML = computer;
	} else if(spaceTwo.innerHTML === user && spaceEight.innerHTML === user && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	}
	//block user from winning row 3 down and diagonal
	else if(spaceThree.innerHTML === user && spaceNine.innerHTML === user && spaceSix.innerHTML === ''){
		spaceSix.innerHTML = computer;
	} else if(spaceThree.innerHTML === user && spaceSix.innerHTML === user && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	} else if(spaceThree.innerHTML === user && spaceFive.innerHTML === user && spaceSeven.innerHTML === ''){
		spaceSeven.innerHTML = computer;
	} else if(spaceThree.innerHTML === user && spaceSeven.innerHTML === user && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	}
	//block user from winning row 4 across
	else if(spaceFour.innerHTML === user && spaceFive.innerHTML === user && spaceSix.innerHTML === ''){
		spaceSix.innerHTML = computer;
	} else if (spaceFour.innerHTML === user && spaceSix.innerHTML === user && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	}
	else if(spaceFive.innerHTML === user && spaceNine.innerHTML === user && spaceThree === ''){
		spaceThree.innerHTML = computer;
	} 
	//keeps the user from winning in row 5
	else if(spaceFive.innerHTML === user && spaceNine.innerHTML === user && spaceThree.innerHTML === ''){
		spaceThree.innerHTML = computer;
	}
	//block user from winning 6 across
	else if(spaceSix.innerHTML === user && spaceFive.innerHTML === user && spaceFour.innerHTML === ''){
		spaceFour.innerHTML = computer;
	} else if(spaceSix.innerHTML === user && spaceFour.innerHTML === user && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	}
	//block user from winning row 7
	else if(spaceSeven.innerHTML === user && spaceEight.innerHTML === user && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	} else if(spaceSeven.innerHTML === user && spaceNine.innerHTML === user && spaceEight.innerHTML === ''){
		spaceEight.innerHTML = computer;
	} else if(spaceSeven.innerHTML === user && spaceFive.innerHTML === user && spaceThree.innerHTML === ''){
		spaceThree.innerHTML = computer;
	} else if(spaceSeven.innerHTML === user && spaceFour.innerHTML === user && spaceOne.innerHTML === ''){
		spaceOne.innerHTML = computer;
	} else if(spaceSeven.innerHTML === user && spaceOne.innerHTML === user && spaceFour.innerHTML === ''){
		spaceFour.innerHTML = computer;
	}
	//block user from winning 8 up
	else if(spaceEight.innerHTML === user && spaceFive.innerHTML === user && spaceTwo.innerHTML === ''){
		spaceTwo.innerHTML = computer;
	} else if(spaceEight.innerHTML === user && spaceSix.innerHTML === user && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	} //else if(spaceEight.innerHTML === user && spaceNine.innerHTML === user && spaceSix.innerHTML === user && spaceSeven.innerHTML === ''){
		//spaceSeven.innerHTML = computer;
	//}
	
	//block user from winning 9 across and diagonal
	else if(spaceNine.innerHTML === user && spaceEight.innerHTML === user && spaceSeven.innerHTML === ''){
		spaceSeven.innerHTML = computer;
	} else if(spaceNine.innerHTML === user && spaceSeven.innerHTML === user && spaceEight.innerHTML === ''){
		spaceEight.innerHTML = computer;
	} else if(spaceNine.innerHTML === user && spaceFive.innerHTML === user && spaceOne.innerHTML === ''){
		spaceOne.innerHTML = computer;
	} else if(spaceNine.innerHTML === user && spaceOne.innerHTML === user && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	} else if(spaceNine.innerHTML === user && spaceSix.innerHTML === user && spaceThree.innerHTML === ''){
		spaceThree.innerHTML = computer;
	}

	else if(spaceThree.innerHTML === computer && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	}

	//options to block spaceOne
	else if(spaceOne.innerHTML === user && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	} else if(spaceOne.innerHTML === user && spaceFour.innerHTML === ''){
		spaceFour.innerHTML = computer;
	} else if(spaceOne.innerHTML === user && spaceThree.innerHTML === ''){
		spaceThree.innerHTML = computer;
	} else if(spaceOne.innerHTML === user && spaceTwo.innerHTML === ''){
		spaceTwo.innerHTML = computer;
	} else if(spaceOne.innerHTML === user && spaceSeven.innerHTML === ''){
		spaceSeven.innerHTML = computer;
	} else if(spaceOne.innerHTML === user && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	} else if(spaceOne.innerHTML === user && spaceEight.innerHTML === ''){
		spaceEight.innerHTML = computer;
	} else if(spaceOne.innerHTML === user && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	} 
	//spaceTwo
	else if(spaceTwo.innerHTML === user && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	} else if(spaceTwo.innerHTML === user && spaceThree.innerHTML === ''){
		spaceThree.innerHTML = computer;
	} else if(spaceTwo.innerHTML === user && spaceOne.innerHTML === ''){
		spaceOne.innerHTML = computer;
	} else if(spaceTwo.innerHTML === user && spaceEight.innerHTML === ''){
		spaceEight.innerHTML = computer;
	} else if(spaceTwo.innerHTML === user && spaceSix.innerHTML === ''){
		spaceSix.innerHTML = computer;
	} else if(spaceTwo.innerHTML === user && spaceFour.innerHTML === ''){
		spaceFour.innerHTML = computer;
	} else if(spaceTwo.innerHTML === user && spaceSeven.innerHTML === ''){
		spaceSeven.innerHTML = computer;
	} else if(spaceTwo.innerHTML === user && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	}
	//spaceThree
	else if(spaceThree.innerHTML === user && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	} else if(spaceThree.innerHTML === user && spaceSix.innerHTML === ''){
		spaceSix.innerHTML = computer;
	} else if(spaceThree.innerHTML === user && spaceSeven.innerHTML === ''){
		spaceSeven.innerHTML = computer;
	} else if(spaceThree.innerHTML === user && spaceTwo.innerHTML === ''){
		spaceTwo.innerHTML = computer;
	} else if(spaceThree.innerHTML === user && spaceOne.innerHTML === ''){
		spaceOne.innerHTML = computer;
	} else if(spaceThree.innerHTML === user && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	} else if(spaceThree.innerHTML === user && spaceEight.innerHTML === ''){
		spaceEight.innerHTML = computer;
	} else if(spaceThree.innerHTML === user && spaceFour.innerHTML === ''){
		spaceFour.innerHTML = computer;
	} 
	//spaceFour
	else if(spaceFour.innerHTML === user && spaceOne.innerHTML === ''){
		spaceOne.innerHTML = computer;
	} else if(spaceFour.innerHTML === user && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	} else if(spaceFour.innerHTML === user && spaceSeven.innerHTML === ''){
		spaceSeven.innerHTML = computer;
	} else if(spaceFour.innerHTML === user && spaceSix.innerHTML === ''){
		spaceSix.innerHTML = computer;
	} else if(spaceFour.innerHTML === user && spaceTwo.innerHTML === ''){
		spaceTwo.innerHTML = computer;
	} else if(spaceFour.innerHTML === user && spaceThree.innerHTML === ''){
		spaceThree.innerHTML = computer;
	} else if(spaceFour.innerHTML === user && spaceEight.innerHTML === ''){
		spaceEight.innerHTML = computer;
	} else if(spaceFour.innerHTML === user && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	}
	//spaceFive
	else if(spaceFive.innerHTML === user && spaceOne.innerHTML === ''){
		spaceOne.innerHTML = computer;
	} else if(spaceFive.innerHTML === user && spaceFour.innerHTML === ''){
		spaceFour.innerHTML = computer;
	} else if(spaceFive.innerHTML === user && spaceSix.innerHTML === ''){
		spaceSix.innerHTML = computer;
	} else if(spaceFive.innerHTML === user && spaceEight.innerHTML === ''){
		spaceEight.innerHTML = computer;
	} else if(spaceFive.innerHTML === user && spaceTwo.innerHTML === ''){
		spaceTwo.innerHTML = computer;
	} else if(spaceFive.innerHTML === user && spaceThree.innerHTML === ''){
		spaceThree.innerHTML = computer;
	} else if(spaceFive.innerHTML === user && spaceSeven.innerHTML === ''){
		spaceSeven.innerHTML = computer;
	} else if(spaceFive.innerHTML === user && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	}
	//spaceSix
	else if(spaceSix.innerHTML === user && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	} else if(spaceSix.innerHTML === user && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	} else if(spaceSix.innerHTML === user && spaceFour.innerHTML === ''){
		spaceFour.innerHTML = computer;
	} else if(spaceSix.innerHTML === user && spaceThree.innerHTML === ''){
		spaceThree.innerHTML = computer;
	} else if(spaceSix.innerHTML === user && spaceTwo.innerHTML === ''){
		spaceTwo.innerHTML = computer;
	} else if(spaceSix.innerHTML === user && spaceOne.innerHTML === ''){
		spaceOne.innerHTML = computer;
	} else if(spaceSix.innerHTML === user && spaceEight.innerHTML === ''){
		spaceEight.innerHTML = computer;
	} else if(spaceSix.innerHTML === user && spaceSeven.innerHTML === ''){
		spaceSeven.innerHTML = computer;
	}
	//spaceSeven
	else if(spaceSeven.innerHTML === user && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	} else if(spaceSeven.innerHTML === user && spaceEight.innerHTML === ''){
		spaceEight.innerHTML = computer;
	} else if(spaceSeven.innerHTML === user && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	} else if(spaceSeven.innerHTML === user && spaceFour.innerHTML === ''){
		spaceFour.innerHTML = computer;
	} else if(spaceSeven.innerHTML === user && spaceOne.innerHTML === ''){
		spaceOne.innerHTML = computer;
	} else if(spaceSeven.innerHTML === user && spaceThree.innerHTML === ''){
		spaceThree.innerHTML = computer;
	} else if(spaceSeven.innerHTML === user && spaceTwo.innerHTML === ''){
		spaceTwo.innerHTML = computer;
	} else if(spaceSeven.innerHTML === user && spaceSix.innerHTML === ''){
		spaceSix.innerHTML = computer;
	}
	//spaceEight
	else if(spaceEight.innerHTML === user && spaceSeven.innerHTML === ''){
		spaceFive.innerHTML = computer;
	} else if(spaceEight.innerHTML === user && spaceFive.innerHTML === ''){
		spaceSeven.innerHTML = computer;
	} else if(spaceEight.innerHTML === user && spaceNine.innerHTML === ''){
		spaceNine.innerHTML = computer;
	} else if(spaceEight.innerHTML === user && spaceTwo.innerHTML === ''){
		spaceTwo.innerHTML = computer;
	} else if(spaceEight.innerHTML === user && spaceOne.innerHTML === ''){
		spaceOne.innerHTML = computer;
	} else if(spaceEight.innerHTML === user && spaceThree.innerHTML === ''){
		spaceThree.innerHTML = computer;
	} else if(spaceEight.innerHTML === user && spaceFour.innerHTML === ''){
		spaceTwo.innerHTML = computer;
	} else if(spaceEight.innerHTML === user && spaceSix.innerHTML === ''){
		spaceSix.innerHTML = computer;
	}
	//spaceNine
	else if(spaceNine.innerHTML === user && spaceFive.innerHTML === ''){
		spaceFive.innerHTML = computer;
	} else if(spaceNine.innerHTML === user && spaceEight.innerHTML === ''){
		spaceEight.innerHTML = computer;
	} else if(spaceNine.innerHTML === user && spaceSix.innerHTML === ''){
		spaceSix.innerHTML = computer;
	} else if(spaceNine.innerHTML === user && spaceThree.innerHTML === ''){
		spaceThree.innerHTML = computer;
	} else if(spaceNine.innerHTML === user && spaceFour.innerHTML === ''){
		spaceFour.innerHTML = computer;
	} else if(spaceNine.innerHTML === user && spaceOne.innerHTML === ''){
		spaceOne.innerHTML = computer;
	} else if(spaceNine.innerHTML === user && spaceTwo.innerHTML === ''){
		spaceTwo.innerHTML = computer;
	} else if(spaceNine.innerHTML === user && spaceSeven.innerHTML === ''){
		spaceSeven.innerHTML = computer;
	}
}

function loserDisplay(){
	$('#you-lose').fadeIn(500);
	$('#draw').hide();
	for(var i = 0; i < spacesArr.length; i++){
		spacesArr[i].style.backgroundColor = '#fff';
	}
}

function loserDisplayO(){
	$('#you-lose-o').fadeIn(500);
	$('#draw-o').hide();
	for(var i = 0; i < spacesArr.length; i++){
		spacesArr[i].style.backgroundColor = '#fff';
	}
}

function drawDisplay(){
	$('#draw').fadeIn(500);
	for(var i = 0; i < spacesArr.length; i++){
		if(spacesArr[i].innerHTML === user){
			spacesArr[i].style.backgroundColor = '#b71c1c';
		} else {
			spacesArr[i].style.backgroundColor = '#ef5350';
		}
	}
}
function drawDisplayO(){
	$('#draw-o').fadeIn(500);
	for(var i = 0; i < spacesArr.length; i++){
		if(spacesArr[i].innerHTML === user){
			spacesArr[i].style.backgroundColor = '#b71c1c';
		} else {
			spacesArr[i].style.backgroundColor = '#ef5350';
		}
	}
}
//win function for user X
function winnerX(){
	let user = 'X';
	let computer = 'O';

	let one = spaceOne.innerHTML;
	let two = spaceTwo.innerHTML;
	let three = spaceThree.innerHTML;
	let four = spaceFour.innerHTML;
	let five = spaceFive.innerHTML;
	let six = spaceSix.innerHTML;
	let seven = spaceSeven.innerHTML;
	let eight = spaceEight.innerHTML;
	let nine = spaceNine.innerHTML;

	if(one === computer && two === computer && three === computer){
		loserDisplay();
		spaceOne.style.backgroundColor = '#ef5350';
		spaceTwo.style.backgroundColor = '#ef5350';
		spaceThree.style.backgroundColor = '#ef5350';
		status = true;
	} else if(one === computer && five === computer && nine === computer){
		loserDisplay();
		spaceOne.style.backgroundColor = '#ef5350';
		spaceFive.style.backgroundColor = '#ef5350';
		spaceNine.style.backgroundColor = '#ef5350';
		status = true;
	} else if(one === computer && four === computer && seven === computer){
		loserDisplay();
		spaceOne.style.backgroundColor = '#ef5350';
		spaceFour.style.backgroundColor = '#ef5350';
		spaceSeven.style.backgroundColor = '#ef5350';
		status = true;
	} else if (two === computer && five === computer && eight === computer){
		loserDisplay();
		spaceTwo.style.backgroundColor = '#ef5350';
		spaceFive.style.backgroundColor = '#ef5350';
		spaceEight.style.backgroundColor = '#ef5350';
		status = true;
	} else if (three === computer && five === computer && seven === computer){
		loserDisplay();
		spaceThree.style.backgroundColor = '#ef5350';
		spaceFive.style.backgroundColor = '#ef5350';
		spaceSeven.style.backgroundColor = '#ef5350';
		status = true;
	} else if(three === computer && six === computer && nine === computer){
		loserDisplay();
		spaceThree.style.backgroundColor = '#ef5350';
		spaceSix.style.backgroundColor = '#ef5350';
		spaceNine.style.backgroundColor = '#ef5350';
		status = true;
	} else if(four === computer && five === computer && six === computer){
		loserDisplay();
		spaceFour.style.backgroundColor = '#ef5350';
		spaceFive.style.backgroundColor = '#ef5350';
		spaceSix.style.backgroundColor = '#ef5350';
		status = true;
	} else if(seven === computer && eight === computer && nine === computer){
		loserDisplay();
		spaceSeven.style.backgroundColor = '#ef5350';
		spaceEight.style.backgroundColor = '#ef5350';
		spaceNine.style.backgroundColor = '#ef5350';
		status = true;
	}
}
//draw function for user X and user O
function draw(){
	let arr = [];
	for(var i = 0; i < spacesArr.length; i++){
		if(spacesArr[i].innerHTML === 'X' || spacesArr[i].innerHTML === 'O'){
			arr.push(spacesArr[i].innerHTML);
		}
	}
	if(arr.length === 9){
		if(status == false){
			drawDisplay();
		}
	}
}
//win function for user O
function winnerO(){
	let user = 'O';
	let computer = 'X';

	let one = spaceOne.innerHTML;
	let two = spaceTwo.innerHTML;
	let three = spaceThree.innerHTML;
	let four = spaceFour.innerHTML;
	let five = spaceFive.innerHTML;
	let six = spaceSix.innerHTML;
	let seven = spaceSeven.innerHTML;
	let eight = spaceEight.innerHTML;
	let nine = spaceNine.innerHTML;

	if(one === computer && two === computer && three === computer){
		loserDisplayO();
		spaceOne.style.backgroundColor = '#ef5350';
		spaceTwo.style.backgroundColor = '#ef5350';
		spaceThree.style.backgroundColor = '#ef5350';
		status = true;
	} else if(one === computer && five === computer && nine === computer){
		loserDisplayO();
		spaceOne.style.backgroundColor = '#ef5350';
		spaceFive.style.backgroundColor = '#ef5350';
		spaceNine.style.backgroundColor = '#ef5350';
		status = true;
	} else if(one === computer && four === computer && seven === computer){
		loserDisplayO();
		spaceOne.style.backgroundColor = '#ef5350';
		spaceFour.style.backgroundColor = '#ef5350';
		spaceSeven.style.backgroundColor = '#ef5350';
		status = true;
	} else if (two === computer && five === computer && eight === computer){
		loserDisplayO();
		spaceTwo.style.backgroundColor = '#ef5350';
		spaceFive.style.backgroundColor = '#ef5350';
		spaceEight.style.backgroundColor = '#ef5350';
		status = true;
	} else if (three === computer && five === computer && seven === computer){
		loserDisplayO();
		spaceThree.style.backgroundColor = '#ef5350';
		spaceFive.style.backgroundColor = '#ef5350';
		spaceSeven.style.backgroundColor = '#ef5350';
		status = true;
	} else if(three === computer && six === computer && nine === computer){
		loserDisplayO();
		spaceThree.style.backgroundColor = '#ef5350';
		spaceSix.style.backgroundColor = '#ef5350';
		spaceNine.style.backgroundColor = '#ef5350';
		status = true;
	} else if(four === computer && five === computer && six === computer){
		loserDisplayO();
		spaceFour.style.backgroundColor = '#ef5350';
		spaceFive.style.backgroundColor = '#ef5350';
		spaceSix.style.backgroundColor = '#ef5350';
		status = true;
	} else if(seven === computer && eight === computer && nine === computer){
		loserDisplayO();
		spaceSeven.style.backgroundColor = '#ef5350';
		spaceEight.style.backgroundColor = '#ef5350';
		spaceNine.style.backgroundColor = '#ef5350';
		status = true;
	}
}

// Function that holds the common actions for when clickX or clickO is called
function delayAction(action){
	if(action === 'X') {
		setTimeout(computerMoveX, 250);
		setTimeout(winnerX, 500);
		setTimeout(draw, 500);
	} else if (action === 'O') {
		setTimeout(computerMoveO, 250);
		setTimeout(winnerO, 500);
		setTimeout(draw, 500);
	}
}

//game to be run when X is clicked
function clickX(){
	let x = $('#x');
	console.log('X');		
	$('#prompt').hide();
	$('#game-board').fadeIn(1500);

//make a catch that checks if the space is taken, if it is, don't write anything 
	$('#one').click(function(){
		if(spaceOne.innerHTML === ''){
			spaceOne.innerHTML = user;
		} else{
			return;
		}
		delayAction('X');
	})

	$('#two').click(function(){
		if(spaceTwo.innerHTML === ''){
			spaceTwo.innerHTML = user;
		} else{
			return;
		}
		delayAction('X');
	})

	$('#three').click(function(){
		if(spaceThree.innerHTML === ''){
			spaceThree.innerHTML = user;
		} else {
			return;
		}
		delayAction('X');
	})

	$('#four').click(function(){
		if(spaceFour.innerHTML === ''){
			spaceFour.innerHTML = user;
		} else{
			return;
		}
		delayAction('X');
	})

	$('#five').click(function(){
		if(spaceFive.innerHTML === ''){
			spaceFive.innerHTML = user;
		}else{
			return;
		}
		delayAction('X');
	})

	$('#six').click(function(){
		if(spaceSix.innerHTML === ''){
			spaceSix.innerHTML = user;
		} else{
			return;
		}
		delayAction('X');
	})

	$('#seven').click(function(){
		if(spaceSeven.innerHTML === ''){
			spaceSeven.innerHTML = user;
		} else{
			return;
		}
		delayAction('X');
	})

	$('#eight').click(function(){
		if(spaceEight.innerHTML === ''){
			spaceEight.innerHTML = user;
		} else{	
			return;
		}
		delayAction('X');
	})

	$('#nine').click(function(){
		if(spaceNine.innerHTML === ''){
			spaceNine.innerHTML = user;
		} else{
			return;
		}
		delayAction('X');
	})
}

//game to be run when O is clicked
function clickO(){
	let o = $('#o');
	console.log('O');		
	$('#prompt').hide();
	$('#game-board').fadeIn(1500);

	let userO = 'O';
	let computerX = 'X';

	//create a function to place the 
	//computer to a random space
	let randomSpaces = [spaceOne, spaceTwo, spaceThree, spaceFour, spaceFive, 
						spaceSix, spaceSeven, spaceEight, spaceNine]
	let randomMove = randomSpaces[Math.floor(Math.random() * randomSpaces.length)];
	
	setTimeout(function(){
		randomMove.innerHTML = computerX;
	}, 500)
	//spaceOne.innerHTML = computerX;

	$('#one').click(function(){
		if(spaceOne.innerHTML === ''){
			spaceOne.innerHTML = userO;
		} else{
			return;
		}
		delayAction('O');
	})

	$('#two').click(function(){
		if(spaceTwo.innerHTML === ''){
			spaceTwo.innerHTML = userO;
		} else{
			return;
		}
		delayAction('O');
	})

	$('#three').click(function(){
		if(spaceThree.innerHTML === ''){
			spaceThree.innerHTML = userO;
		} else {
			return;
		}
		delayAction('O');
	})

	$('#four').click(function(){
		if(spaceFour.innerHTML === ''){
			spaceFour.innerHTML = userO;
		} else{
			return;
		}
		delayAction('O');
	})

	$('#five').click(function(){
		if(spaceFive.innerHTML === ''){
			spaceFive.innerHTML = userO;
		}else{
			return;
		}
		delayAction('O');
	})

	$('#six').click(function(){
		if(spaceSix.innerHTML === ''){
			spaceSix.innerHTML = userO;
		} else{
			return;
		}
		delayAction('O');
	})

	$('#seven').click(function(){
		if(spaceSeven.innerHTML === ''){
			spaceSeven.innerHTML = userO;
		} else{
			return;
		}
		delayAction('O');
	})

	$('#eight').click(function(){
		if(spaceEight.innerHTML === ''){
			spaceEight.innerHTML = userO;
		} else{	
			return;
		}
		delayAction('O');
	})

	$('#nine').click(function(){
		if(spaceNine.innerHTML === ''){
			spaceNine.innerHTML = userO;
		} else{
			return;
		}
		delayAction('O');
	})
}

// function for reseting the board
function tryAgain(){
	$('#try-again').click(function(){
		reset('X');
	});

	$('#try-again-d').click(function(){
		reset('X');
	});

	$('#try-again-o').click(function(){
		reset('O');
		computerFirst();
	});
	
	$('#try-again-d-o').click(function(){
		reset('O');
		computerFirst();
	});
}

// reset values to empty and background color to white
function clearBoard(){
	for(var i = 0; i < spacesArr.length; i++){
		spacesArr[i].innerHTML = '';
		spacesArr[i].style.backgroundColor = '#fff';
	}
}

// function for reseting the game from draw or losing
function reset(action){
	if(action === 'X'){
		$('#you-lose').hide();
		$('#draw').hide();	
	} else if (action === 'O'){
		$('#you-lose-o').hide();
		$('#draw-o').hide();
	}
	$('#game-board').hide();
	clearBoard();
	$('#game-board').fadeIn(1500);
	status = false;
}

//random function from O game to make computer move first
function computerFirst(){
	let randomMove = spacesArr[Math.floor(Math.random() * spacesArr.length)];
	setTimeout(function(){
		randomMove.innerHTML = 'X';
	}, 500);
}

//ends the game
function endGame(){
	$('#end-game').click(function(){
		$('#you-lose').hide();
		$('#game-board').hide();
		$('#game-over').show();
	})
}

function endGameD(){
	$('#end-game-d').click(function(){
		$('#draw').hide();
		$('#game-board').hide();
		$('#game-over').show();
	})
}
function endGameO(){
	$('#end-game-o').click(function(){
		$('#you-lose-o').hide();
		$('#game-board').hide();
		$('#game-over').show();
	})
}
function endGameDO(){
	$('#end-game-d-o').click(function(){
		$('#draw-o').hide();
		$('#game-board').hide();
		$('#game-over').show();
	})
}
function playAgain(){
	$('#play-again').click(function(){
		location.reload(true);
	})
}
$('#x').click(clickX);

$('#o').click(clickO);

window.onload = welcome(), tryAgain(), endGame(), endGameD(), endGameO(), endGameDO(), clearBoard(), playAgain();