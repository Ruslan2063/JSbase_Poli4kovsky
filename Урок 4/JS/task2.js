let a = +prompt("Enter number: ");
let b = +prompt("Enter stepi	n: ");

function stepin(a, b) {
	let res = a;

	for (let i = 1; i < b; i++) {
		res *= a;
	}
	return res;
}

alert(stepin(a, b));	
