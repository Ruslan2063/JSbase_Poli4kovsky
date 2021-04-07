let companyEmployees = [];
function createEmp() {
	companyEmployees.push({
		name: prompt("Введіть ім'я"),
		Name: prompt("Введіть прізвищ "),
		age: +prompt("Введіть вік"),
		posada: prompt("Введіть посаду"),
		show() {
			document.write("Ім'я: " + this.name
				+ "<br> Прізвище: " + this.Name
				+ "<br> Вік: " + this.age
				+ "<br> Посада: " + this.posada
				+ "<hr>");
		}
	});
}
let nextEmp = true;
do {
	createEmp();
	nextEmp = confirm("Хочете добавити ще одного праціника:")
} while (nextEmp == true);


function addSalary() {
	for (let i = 0; i < companyEmployees.length; i++) {
		switch (companyEmployees[i].posada) {
			case "manager":
				companyEmployees[i].salary = 1500;
				break;
			case "programmer":
				companyEmployees[i].salary = 2000;
				break;
			case "director":
				companyEmployees[i].salary = 3000;
				break;
			default: companyEmployees[i].salary = 1000;
		}
		companyEmployees[i].show = function () {
			document.write("Ім'я: " + this.name
				+ "<br> Прізвище: " + this.Name
				+ "<br> Вік: " + this.age
				+ "<br> Посада: " + this.posada
				+ "<hr>");
		};
	}
}
addSalary();
companyEmployees.forEach(x => x.show());