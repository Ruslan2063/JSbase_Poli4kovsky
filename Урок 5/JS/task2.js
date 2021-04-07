let Calculator = {
	a: +prompt("Введіть перше число"),
	b: +prompt("Введіть друге число"),
	znak: prompt("Введіть знак операції: +, -, *, /"),
	calc() {
		switch (this.znak) {
			case "+":
				return this.a + this.b;
			case "-":
				return this.a - this.b;
			case "*":
				return this.a * this.b;
			case "/":
				return this.a / this.b;
		}
	}
};
alert("Відповідь: " + Calculator.calc())