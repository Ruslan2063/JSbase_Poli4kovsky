let a = +prompt("Enter number:");
let b = +prompt("Enter number:");

let sum = 0;

while (a < b) {
	sum += a;
	a++;
	if (a % 2) {
		console.log("Нечетное число, между А и В:" + a);
	}
}
console.log("Сума:" + sum);

