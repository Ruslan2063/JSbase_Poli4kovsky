var user = prompt("Вибиріть:Бумага, Ножниці, Камінь?")

var computer = Math.random();

if (computer <= 0.33) {
	computer = "Камінь";
}

else if (computer <= 0.66) {
	computer = "Бумага";
}

else {
	computer = "Ножниці";
}

console.log("Computer: " + computer);

var compare = function (choice1, choice2) {
	if (choice1 === choice2) {
		return "НІЧИЯ!";
	}

	else if (choice1 === "Камінь") {
		if (choice2 === "Ножниці") {
			return "Камінь виграв";
		}
		else {
			return "Бумага виграла";
		}
	}

	else if (choice1 === "Бумага") {
		if (choice2 === "Камінь") {
			return "Бумага виграла";
		}
		else {
			return "Ножниці виграли";
		}
	}

	else if (choice1 === "Ножниці") {
		if (choice2 === "Бумага") {
			return "Ножниці виграли";
		}
		else {
			return "Камінь виграв";
		}
	}
};

compare();