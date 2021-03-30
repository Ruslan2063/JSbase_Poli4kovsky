let a = +prompt("Enter dirst number: ");
let b = +prompt("Enter second number: ");
let sign = prompt("Enter: + , * , - , /.");

function calculate(a, b, sign) {
	if (a == NaN || b == NaN) {
		return "Enter number) "
	} else {
		switch (sign) {
			case "*":
				return a * b;
			case "-":
				return a - b;
			case "/":
				return a / b;
			case "+":
				return a + b;
		}
	}
}
alert(calculate(a, b, sign));