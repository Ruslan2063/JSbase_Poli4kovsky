let A = prompt("Enter number:");
let B = prompt("Enter number:");
let sum = 0;
while (A < B) {
	A++;

	if (A < B) {
		sum += A;
	}
}
document.write("Sum " + sum);

for (var i = 0; i < A && B; i += 3) {
	document.write(i + "<br>");
}