let fructs = ["Apple", "Orange", "Limon", "Strawberry", "Peach"];
console.log("Our fructs: " + fructs);
let show = prompt("Enter fructs: " + fructs);

let plusEl = prompt("Which one fructs: ");
for (let i = 0; i <= fructs.length; i++) {
	if (fructs[i] == show) {
		fructs.splice(i + 2, 1, plusEl);
		break;
	}
	if (i == fructs.length) {
		fructs.push(plusEl);
		break;
	}
}
console.log("Last masiv:" + fructs);