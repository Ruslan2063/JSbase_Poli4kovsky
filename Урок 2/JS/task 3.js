var a = prompt("Введите число:");
var b = prompt("Введите число:");
var c = prompt("Введите число:");
var max;
if (a > b && a > c) {
	max = a;
} else if (b > a && b > c) {
	max = b;
}
else {
	max = c;
}

document.write("Max number " + max);