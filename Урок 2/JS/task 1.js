// var console = prompt("Enter three number:");

var a = prompt("Введіть перше число:");
var b = prompt("Введіть друге число:");
var c = prompt("Введіть третє число:");

if (a !== b && b !== c && a !== c) {
	var sum = a + b + c;
	var sum = sum / 3;
	document.write("Середнє арифметичне:" + sum);
}
// else {
// 	document.write("Ошибка))))");
// } 
