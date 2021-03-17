var console = prompt("Сколько добавить строк трeугольника?");
var a = 0;
var b = "*";
while (a < console) {
	document.write(b + '<br>');
	a++;
	b = b + "*";
}