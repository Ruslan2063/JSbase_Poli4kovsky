var x1 = prompt("Введите число x1:");
console.log("x1 = " + x1);

var x2 = prompt("Введите число x2:");
console.log("x2 =" + x2);

var y1 = prompt("Введите число y1:");
console.log("y1 = " + y1);

var y2 = prompt("Введите число y2:");
console.log("y2 = " + y2);

var x = (y2 - y1) / (x2 - x1);
console.log("x = (y2 - y1) / (x2 - x1) значение x = " + x);

var k = (y1 - y2) / (x1 - x2);
console.log("k = (y1 - y2) / (x1 - x2) значение k =" + k);

var b = y2 - k * x2;
console.log("b = y2 - k * x2 значение b =" + b);

var y = k * x + b;
console.log("y = k * x + b значение y =" + y);