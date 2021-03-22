// // JOIN

// let fructs = ["Apple", "Limon", "Orange".];
// console.log("before join");
// console.log(fructs);

// let changeArray = fructs.join(" ");
// console.log("after join");
// console.log(changeArray);

// let newArr = changeArray.split(" , ");
// console.log("after split");
// console.log(newArr);

// CONCAT

// let input;
// let fructs = ["Apple", "Limon", "Orange"];

// while (input !== null) {
// 	input = prompt("Enter name fructs:\n\n Already:\n\n" + fructs.join("\n"));
// 	fructs = fructs.concat(input);
// }

// document.write(fructs.join("</br>"));

// REVERSE

// let fructs = ["Apple", "Limon", "Orange"];

// console.log("Before: " + fructs);
// console.log("First fructs:" + fructs[0]);

// fructs = fructs.reverse();

// console.log("After: " + fructs);
// console.log("First fructs: " + fructs[0]);

// SLICE

// let fructs = ["Apple", "Limon", "Orange", "Peach", "Strawberry"];
// console.log(fructs);

// let slice = fructs.slice(1, 4);
// console.log("After slice 1: " + slice);

// slice = fructs.slice(1, 5);
// console.log("After slice 2: " + slice);

// slice = fructs.slice(0, 3);
// console.log("After slice 3: " + slice);

// SPLICE

// let fructs = ["Apple", "Limon", "Orange", "Peach", "Strawberry"];
// console.log("First masiv): " + fructs);

// let del = fructs.splice(2, 5);
// console.log("After del: " + del);
// console.log("Leave: " + fructs);

// SORT

// let fructs = ["Apple", "Orange", "Limon", "Strawberry", "Peach"];
// console.log(fructs + "befor sort" + fructs[0]);

// fructs.sort();
// console.log(fructs + "after sort" + fructs[0]);


// PUSH

// let fructs = ["Apple", "Orange", "Limon", "Strawberry", "Peach"];
// console.log("First: " + fructs);

// console.log("Lenght: " + + fructs.length);

// let lenght = fructs.push(0, 0, 0, 0, 0, 0);
// console.log("Second: " + fructs);
// console.log("New Lenght: " + lenght);

// POP

// let fructs = ["Apple", "Orange", "Limon", "Strawberry", "Peach"];
// console.log("First: " + fructs);

// let del = fructs.pop();
// console.log("Second: " + fructs);
// console.log("Del element: " + del);

// UNSHIFT

// let fructs = ["Apple", "Orange", "Limon", "Strawberry", "Peach"];
// console.log("First: " + fructs);

// let newSize = fructs.unshift("Cucumber");
// console.log("After add Cucucmber: " + fructs);
// console.log("New size: " + newSize + ", new element - " + fructs[0]);
