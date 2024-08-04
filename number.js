var userInput = document.getElementById("user-input");
var output = document.getElementById("output");
var check = document.getElementById("button");
var update = document.getElementById("update");
var range = document.getElementById("range");
function number() {
    var userInputNumber = parseFloat(userInput.value);
    var rangeOfNumber = parseFloat(range.value);
    var randomNumber = Math.floor(Math.random() * rangeOfNumber + 1);
    console.log(randomNumber);
    if (userInputNumber <= rangeOfNumber) {
        var result = userInputNumber == randomNumber ? "You Guess The Correct Number" : "You Guess The Wrong Number";
        output.textContent = result;
    }
    else {
        alert("Please Enter Number Between Selected Range!!");
    }
}
check.addEventListener("click", number);
function clear() {
    userInput.value = "";
    output.textContent = "";
}
var isUserNotSetRange = false;
function isRangeSetCheck() {
    if (!isUserNotSetRange) {
        alert("Please Select The Range Of Number.");
        isUserNotSetRange = true;
    }
    clear();
}
// function isUserSetRange() {
// }
// range.addEventListener("focus", isUserSetRange);
userInput.addEventListener("focus", isRangeSetCheck);
function updateNumber() {
    update.textContent = "\"".concat(range.value, "\"");
    isUserNotSetRange = true;
}
range.addEventListener("input", updateNumber);
