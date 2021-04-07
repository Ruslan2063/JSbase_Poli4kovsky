let firstNumber = +prompt("Введіть x");
let secondNumber = +prompt("Введіть y");
let Point = {
	x: firstNumber,
	y: secondNumber,
	GetQuadrant() {	
		if (this.x > 0 && this.y > 0) {
			alert('1 чверть')
		}
		else if (this.x < 0 && this.y > 0) {
			alert('2 чверть')
		}
		else if (this.x < 0 && this.y < 0) {
			alert('3 чверть')
		}
		else if (this.x > 0 && this.y < 0) {
			alert('4 чверть')
		}
		else if (this.x != 0 && this.y == 0) {
			alert('вісь Х');
		}
		else if (x == 0 && y != 0) {
			alert('вісь У')
		}
		else {
			alert('Центр координат')

		}
	}
};
alert(Point.GetQuadrant());