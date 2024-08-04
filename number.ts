
let userInput = document.getElementById("user-input") as HTMLInputElement;
let output = document.getElementById("output") as HTMLParagraphElement;
let check = document.getElementById("button") as HTMLButtonElement;
let update = document.getElementById("update") as HTMLSpanElement;
let range = document.getElementById("range") as HTMLInputElement;

function number() {
	let userInputNumber = parseFloat(userInput.value);
	let rangeOfNumber = parseFloat(range.value);
	let randomNumber = Math.floor(Math.random() * rangeOfNumber + 1);
	console.log(randomNumber);

	if (userInputNumber <= rangeOfNumber) {
		let result = userInputNumber == randomNumber ? "You Guess The Correct Number" : "You Guess The Wrong Number";
		output.textContent = result;
	} else {
		alert("Please Enter Number Between Selected Range!!");
	}

}
check.addEventListener("click", number);


function clear() {
	userInput.value = "";
	output.textContent = "";
}

let isUserNotSetRange = false;

function isRangeSetCheck() {
	if (!isUserNotSetRange) {
		alert("Please Select The Range Of Number.");
		isUserNotSetRange = true;
	}

	clear();
}

userInput.addEventListener("focus", isRangeSetCheck);


function updateNumber() {
	update.textContent = `"${range.value}"`;
	isUserNotSetRange = true;
}
range.addEventListener("input", updateNumber)

