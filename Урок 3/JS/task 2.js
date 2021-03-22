let odd = ["odd", "odd", "odd"];
let even = ["even", "even", "even"];

let size = +prompt("Enter size masiv: ");
let masiv = [];

for (let i = 0; i < size; i++) {
	if (i % 2 == 0) {
		masiv[i] = ["even", "even", "even"];
	}

	else {
		masiv[i] = ["odd", "odd", "odd"];
	}
}
console.log(masiv);