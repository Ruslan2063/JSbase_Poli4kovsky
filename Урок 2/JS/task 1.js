let a = +prompt("Введіть перше число:");
let b = +prompt("Введіть друге число:");
let c = +prompt("Введіть третє число:");

if (a !== b && b !== c && a !== c) {
	let sum = a + b + c;
	sum = sum / 3;
	document.write("Середнє арифметичне:" + sum);
}
// else {
// 	document.write("Ошибка))))");
// } 
