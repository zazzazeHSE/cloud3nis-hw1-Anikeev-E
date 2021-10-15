let first = 0;
let second = 0;
let op = "";

const inputField = document.getElementsByName("input")[0];
inputField.value = 0

function add(value) {
	if (op === "") {
		first = first * 10 + value;
		udpateInputWithValue(first);
	} else {
		second = second * 10 + value;
		udpateInputWithValue(second);
	}
}

function selectedOperation(oper) {
	op = oper;
	inputField.value = 0;
}

function udpateInputWithValue(value) {
	inputField.value = value;
}

function getResult() {
	result = 0;
	switch(op) {
		case "+":
			result = first + second;
			break;
		case "-":
			result = first - second;
			break
		case "*":
			result = first * second;
			break;
		case "/":
			if (second == 0) {
				result = "Can\'t delete for zero";
				break;
			}
			result = first / second;
			break;
	} 

	first = 0;
	second = 0;
	op = "";
	inputField.value = result;
}

function clearCalc() {
	first =  0; 
	second = 0;
	op = "";
	inputField.value = 0
}