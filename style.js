// obj

// const person = {
//   name: "ali",
//   email: "ali@gmail.com",
//   password: "123456",
//   hobbies: {
//     sport: "tennis",
//     games: "counter strike",
//   },
// };

// for (let key in person) {
//   if (typeof person[key] === "object") {
//     for (let i in person[key]) {
//       console.log(`proprty:${i}: value:${person[key][i]}`);
//     }
//   } else {
//     console.log(`proprty: ${key}: value:${person[key]}`);
//   }
// }
// // desturuktizatsiya

// const {
//   name,
//   email,
//   password,
//   hobbies: { sport, games },
// } = person;

// console.log(name);
// console.log(email);

// massiv

// const info = ["ali", "memati", "husnu", "halo", "abdulhey"];
// const num = [1, 2, 4, 5, 6, 8];

// console.log(info.length); //massiv uzunligi;

// console.log(info.pop()); // oxirgi elementni ochiradi
// console.log(info.push("erhan")); // oxiriga yengi element qoshadi

// console.log(info.shift()); // massiv oldidagi elementni ochirish
// console.log(info.unshift("jahit")); // massiv oldiga element qoshish

//  itteratsiya

// for (let i = 0; i < info.length; i++) {
//   console.log(info[i]);
// }

// for(let element of info){
//     console.log(element);
// }

// info.forEach((item , i, arr)=>{
//   console.log(`${i}:${item} in arr ${arr}`);
// })

// split

// const media = "youtube, telegram , instagram";
// const arr = media.split(", ");
// const text = media.join("- ");
// console.log(arr);
// console.log(text);

//sort

// const info = ["ali", "memati", "husnu", "halo", "abdulhey"];

// info.sort();
// console.log(info);

// const num = [1, 3, 2, 12, 6, 8];
// function compareNum(a, b){
//     return a -b
// }

// num.sort(compareNum);
// console.log(num);

// clonlash

// let a = 10;
// b = a;
// console.log(b);
// b = a + 10;
// console.log(b);

// obj-clone

const person = {
  name: "ali",
  age: 22,
};

// console.log(person);

// const newPerson = person;

// newPerson.name = "aziz";
// newPerson.age = 23;

// console.log(newPerson);

// itteratsiya

// const copyObj = (obj) => {
//   const clone = {};
//   for (let key in obj) {
//     clone[key] = obj[key];
//   }
//   return clone;
// };

// const newPerson = copyObj(person);

// newPerson.name = "xoja";
// newPerson.age = 24;

// console.log(person);
// console.log(newPerson);

// obj assign

// const newPerson = Object.assign({isMerrid: false}, person);

// newPerson.name = "xoja";
// newPerson.age = 24;

// console.log(person);
// console.log(newPerson);

//spred operator

// const newPerson = {...person};

// newPerson.name = "xoja";
// newPerson.age = 24;

// console.log(person);
// console.log(newPerson);

// arry clone

const car = ["bmw", "mers", "audi"];
const newCar = car.slice();
newCar.push("ford");
console.log(car);
console.log(newCar);
