// 1.

// let a = null;
// console.log(a);
// console.log(typeof (a)); // object

// let a; //declaration
// a = 10; // initialization
// console.log(a); // printing statement

// 2.

// var b=10; // declaration and initialization
// var b=20; // re-declaration and re-initialization
// console.log(b);

// 3.

// let a=10;
// a=20; // redclaration not possible only reinitialization
// console.log(a);

// 4.

// const a=10; // re-declaration and re-initialization not possible
// console.log(a);

// 5.

// console.log(a); // can not print before declaring a variable. error is a is not defined

// 6.

// let a;
// console.log(a);  // undefined

// console.log(b);
// // let b = 10;    // error is cannot access b before initialization
// var b = 10;   // undefined

// 7. operators :

// i. arithematic operators:

// let a=10;
// let b=20;
// let sum=a+b;
// console.log(sum);
// let sub=a-b;
// console.log(sub);
// let multi=a*b;
// console.log(multi);
// let div=b/a;
// console.log(div); // gives quotient
// let mod=b%a;
// console.log(mod); // gives remainder

// ii. increment and decrement operator :-

// let a = 10;
// // a++; // post increment result=11
// ++a; // pre increment result=11
// console.log(a);

// let a = 10;
// console.log(a++); // output is 10
// // console.log(++a); // output is 11

// let a=10
// // console.log(a++ + a++); // 21
// // console.log(++a + ++a); // 23
// // console.log(++a + a++); // 22
// // console.log(a++ + ++a); // 22

// iii. string operator :

// let a = "hello";
// let b = "world";
// console.log(a + b);
// console.log(a + " " + b);
// console.log(a - b); //nan

// let a="hello"
// let b=10
// console.log(a+b); // hello10
// console.log(b+a); // 10hello
// console.log(a-b); // nan
// console.log(a*b); // nan
// console.log(a/b); // nan

// let a="hello";
// let b=20;
// let c=10;
// console.log(a+b+c); // hello2010
// console.log(a+b-c); // nan    // apply VBDMAS rule
// console.log(b-c+a); // 10hello
// console.log(a+b*c); // hello200
// console.log(a+b/c); // hello2
// console.log(b+a*c); // nan

// iv. typeof() operator :-

// let a = "hello";
// let b = 10;
// let c = true;
// let d;
// let e = null;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);

// let a = "10";
// let b = 20;
// let c = "hello";
// console.log(a + b); // 1020
// console.log(a - b); // -10
// console.log(a * b); // 200
// console.log(a / b); // 0.5
// console.log(typeof a);
// let d = a - c; // nan
// console.log(d);
// console.log(typeof d);

// v. comparison operators :-

// let a=20
// let b=10
// console.log(a>b); // true
// console.log(a<b); // false
// console.log(a>=b); // true
// console.log(a<=b); // false

// let a="10"
// let b=10
// console.log(a==b); // true
// console.log(a!=b); // false
// console.log(a===b); // false
// console.log(a!==b); // true

// let a;
// let b = null;
// console.log(a == b); //true
// console.log(a === b); //false

// let a = 0;
// let b = false;
// console.log(a == b); //true
// console.log(a === b); //false

// vi assigment operator :

// let a = 10
// let b = 20
// let c = a += b // a=a+b 30
// console.log(a);
// console.log(c);

// vii logical operator

// let a = 10;
// let b = 20;
// console.log(a || b); // 10
// console.log(a && b); // 20
// console.log(b || a); // 20
// console.log(b && a); // 10

// let a=true  //1
// let b=false //0
// console.log(a+b); // 1

// let a = 3;
// let b = a++;
// let c = ++a;
// console.log(a, b, c); //5 3 5

// let a = 3
// let b = ++a
// let c = a++
// console.log(a, b, c); // 5 4 4

// let a=1
// let b=3
// let c;
// c=b //c=3
// b=a //b=1
// a=c //a=3
// console.log(a);
// console.log(b);

// let a=1
// let b=5
// a=a-b // a=-4
// b=a+b // b=-4+5 =1
// a=b-a // a=5
// console.log(a);
// console.log(b);

// 8. decision making statments :

// let a = 10;
// let b = 5;
// if (b < a) {
//   console.log("a is greater");
// }

// let a=10
// let b=15
// if (a>b) {
//     console.log("a is greater");
// } else {
//     console.log("b is greater");
// }

// let a = 20;
// if (a % 2 == 0) {
//   console.log("a is even no");
// } else {
//   console.log("a is odd");
// }

// finding greatest of three nos
// let a = 100;
// let b = 150;
// let c = 200;
// if (a == b && b == c && a == c) {
//   console.log(" all are equal");
// } else if (a == b && a > c) {
//   console.log(" a and b are equal");
// } else if (b == c && b > a) {
//   console.log("b and c are equal");
// } else if (c == a && c > b) {
//   console.log("a and c are equal ");
// } else if (a > b && a > c) {
//   console.log("a is greater");
// } else if (b > a && b > c) {
//   console.log("b is greater");
// } else {
//   console.log("c is greater");
// }

// let floor = 2;
// switch (floor) {
//   case 0:
//     console.log("ground floor");
//     break;
//   case 1:
//     console.log("first floor");
//     break;
//   case 2:
//     console.log("second floor");
//     break;
//   default:
//     console.log(" invalid floor");
//     break;
// }

// let a=0;
// if (a>=0) {
//     console.log("no is positive");
// } else {
//     console.log(" no is negative");
// }

// 9. looping statements

// for loop:

// for (let i = 20; i >=0; i--) {
//     if (i%2==0) {
//         console.log(i,"even");
//     }
// }

// while loop:

// let i = 10
// while (i >= 0) {
//     if (i % 2 == 0) {
//         console.log(i, "even");
//     }
//     i--
// }

// do-while loop:

// let i = 5;
// do {
//     console.log("hello");
//     i++
// } while (i <= 10);

// Ternary operator: same as if-else

// let a = 10;
// let b = 15;
// // console.log((a > b) ? "a is greater" : "b is greater");
// let c = (a > b) ? "a is greater" : "b is greater"
// console.log(c);

// checking a prime no

// let a = 6;
// let count = 0;
// for (let i = 2; i < a; i++) {
//   if (a % i == 0) {
//     count = 1;
//   }
// }
// if (count == 0 && a > 1) {
//   console.log("prime");
// } else {
//   console.log("not prime");
// }

// printing prime nos:-

// for (let i = 1; i <= 20; i++) {
//   let flag = 0;
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       flag = 1;
//     }
//   }
//   if (i > 1 && flag == 0) {
//     console.log(i);
//   }
// }

// 10. functions:-

// function greet() {
//     console.log("hello");
// }
// greet()

// function greet(persons) {
//     // console.log("hello", persons);
// }
// greet("john")
// greet("sia")
// greet("priya")

// function greet(persons) {
//   //   return "hello" + " " + persons;
//   return `hello ${persons}`; // template literals
// }
// console.log(greet("alan"));

// let greet = function (persons) {
//   console.log(`hello ${persons}`);
// };
// greet("jhonny");

// let simpleInterest = function (p, r, t) {
//     console.log(`the simple interest is ${p * r * t / 100}`);
// }
// simpleInterest(10000, 2, 5)

// let nums = function (a, b) {
//   for (let i = a; i >= b; i--) {
//     console.log(i);
//   }
// };
// nums(-1, -20);
// nums(-30, -50)

// // let sum = 0; // if we write sum outside the function it will add from the beggining and if we write sum inside the function we get reulst sepaaratlely
// let sumNeg = function (a, b) {
//   let sum = 0;
//   for (let i = a; i >= b; i--) {
//     sum = sum + i;
//   }
//   console.log(sum);
// };
// sumNeg(-1, -20);
// sumNeg(-30, -50);

// 11. Arrays:-

// let foodItems = ["vadpav", "dabeli", "samosa", "pizza", "burger"];
// console.log(foodItems);
// console.log(foodItems.length); // length of array
// console.log(foodItems[0]); // 1st element
// console.log(foodItems.length - 1); // last index of array
// console.log(foodItems[foodItems.length - 1]); // last element of array

// let countries = [];
// countries[0] = "Russia";
// countries[1] = "Ukraine";
// countries[2] = "India";
// countries[3] = "USA";
// countries[5] = "Britain";
// console.log(countries);

// let fruits = ["mango", "chickoo", "banana"];
// fruits[1] = "watermelon";
// fruits[3] = "chickoo";
// fruits[5] = "kiwi";
// console.log(fruits);
// console.log(fruits[2]);
// console.log(fruits[fruits.length - 1]);

// let array = [1, 2, 3, 4, 5];
// let arr = [1, 2, 3, 4, 5];
// console.log(array == arr); // false because the reference of both arrays is different in memory space

// let array = [1, 2, 3]
// let arr = array
// console.log(array == arr); // true because the reference for both arrays is same

// let array = [2, 2, 5, 4, 15, 26, 87, 8, 19, 10];
// // for (let i = 0; i < array.length; i++) {
// //   console.log(array[i]);
// // }
// for (let arr of array) {
//   console.log(arr);
// }

// Array methods:-

let cars = ["Bugati", "mustang", "Mazarati", "aston martin", 800, "dodge"];

// pop();-

// cars.pop();
// console.log(cars);
// console.log(cars.pop()); // when written inside the log gives last element of array

// push():-

// cars.push("Supra");
// console.log(cars);
// console.log(cars.push()); // when written inside the log it gives the array length

// shift():-

// cars.shift();
// console.log(cars);
// console.log(cars.shift()); // when written inside the log gives first element of array

// unshift():-

// cars.unshift("Tesla");
// console.log(cars);
// console.log(cars.unshift()); //when written inside the log it gives the array length

//toString():-

// // let cars1 = cars.toString()
// // console.log(cars1);
// console.log(cars.toString());
// console.log(cars);

// join():-

// // let cars2 = cars.join(" & ")
// // console.log(cars2);
// console.log(cars.join(" $ "));
// console.log(cars);

// reverse():-

// cars.reverse();
// console.log(cars);

// sort():-

// cars.sort();
// console.log(cars);

// to print in descending order
// cars.sort();
// cars.reverse();
// console.log(cars);

// includes():-

// console.log(cars.includes("mustang"));

// concat():-

// let company = ["tata", "honda", "suzuki", "ford"];

// let newCars = cars.concat(company);
// console.log(newCars);
// let oldcars = company.concat(cars);
// console.log(oldcars);

// let nums = [1, 23, 3, 45, 50, 70];
// let array = cars.concat(nums, company);
// console.log(array);

// splice():-

// cars.splice(0, 2);
// cars.splice(1, 2, "Ferrari");
// cars.splice(10, 6, "mercedes");
// console.log(cars);

// slice():-

// console.log(cars.slice(0, 2));
// console.log(cars.slice(0, -2));
// console.log(cars.slice(2));
// console.log(cars.slice(-2));

// indexOf():-

// console.log(cars.indexOf(800));

// 12. Strings and its methods:-

// let language = "Malayalam"

// console.log(language.length);
// console.log(language.length - 1);
// console.log(language[language.length - 1]);
// console.log(language[1]);

// console.log(language.charAt(0));
// console.log(language.indexOf("m"));
// console.log(language.lastIndexOf("m"));
// console.log(language.indexOf("a", 2));
// console.log(language.lastIndexOf("a", 6));
// console.log(language.toUpperCase());
// console.log(language.toLowerCase());
// console.log(language.startsWith("Mal"));
// console.log(language.endsWith("am"));
// console.log(language.toUpperCase());

// console.log(language.slice(0, 4));
// console.log(language.slice(0, -4));
// console.log(language.slice(4));
// console.log(language.slice(-4));

// console.log(language.substring(1, 4));

// console.log(language.substr(1, 4));

// let lang = "kerala"
// console.log(language.concat(" ", lang));

// let food = "chicken biryani chicken"
// console.log(food.replace("chicken", "beg"));

//13. objects:-

// let db = {
//     name: "Alan",
//     age: 25,
//     salary: 25000,
//     skills: {
//         frontend: ["HTML", "CSS", "Javascript"],
//         backend: ["node", "express", "mongodb"]
//     }
// }

// console.log(db);
// console.log(db.name);
// console.log(db.skills.frontend[1]);

// let db = new Object();
// db.title = "one piece"
// db.genre = "action"
// db.year = 1996
// db.character = ["luffy", "zoro", "sanji", "nami", "brooks", "chopper", "robin", "franky", "jinbei"]
// console.log(db);
// console.log(db.title);
// console.log(db["character"][8]);
// console.log(db.character.length);

// let series = {}
// series.title = "stranger things"
// series.genre = ["horror", "sci-fi", "dark"]
// series.year = 2015
// series.rating = 4.5
// console.table(series);
// series.year = 2018
// series.awards = "N/A"
// series.content = "18+"
// console.log(series);
// delete series.genre.pop()
// delete series.genre.push("adult")
// console.log(series)

// console.log(`${series.title} was released in the year ${series.year} and it is based on ${series.genre} genre and it has an imd raing of ${series.rating}`);

// let obj = Object.keys(series)
// console.log(obj);
// let obj1 = Object.values(series)
// console.log(obj1);
// let obj2 = Object.entries(series)
// console.log(obj2);

// let obj3 = Object.keys(series).length
// console.log(obj3);

// let anime = [
//     { name: "onepiece", genre: "action", year: 1996 },
//     { name: "naruto", genre: "martial arts", year: 2000 },
//     { name: "haikyuu", genre: "sports", year: 2015 },
//     { name: "steins gate", genre: "sci-fi", year: 1990 }
// ]
// console.table(anime);
// console.log(anime[0]);
// console.log(anime[1].name);
// console.log(anime[3].genre.slice(0, 3));
// for (let i = 0; i < anime.length; i++) {
//     console.log(anime[i].name);
// }

// 14. arrow functions:-

// let greet = (persons) => {
//     // return `hello ${persons}`
//     return "hello" + persons
// }
// console.log(greet("John"));

// 15. map(), filter(), reduce() :-

// let array = [1, 2, 3, 4, 5]
// let newArray = array.map((i) => {
//     return i ** 2
// })
// console.log(newArray);

// let arr1 = array.filter((i) => {
//     return i > 3
// })
// console.log(arr1);

// let arr2 = array.reduce((i, sum) => {
//     return sum = sum + i ** 2
// })
// console.log(arr2);

// 16. spread operator :-

// let arr = [1, 2, 3]
// let arr1 = [4, 5, 6]
// let arr2 = [0, ...arr, ...arr1, 7]
// console.log(arr2);

//17. array destructuring:-

// let [a, b, ...c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c);

// 18. object destructuring :-

// let { skills } = {
//     name: "Alan",
//     age: 25,
//     salary: 25000,
//     skills: {
//         frontend: ["HTML", "CSS", "Javascript"],
//         backend: ["node", "express", "mongodb"]
//     }
// }

// console.log(skills.frontend);

// 19. oops concept:-

// class Employee {
//   constructor(firstName, lastName, age, salary, id) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.salary = salary;
//     this.id = id;
//   }
//   fullName() {
//     return `my fullname is ${this.firstName} ${this.lastName}`;
//   }
//   birthyear = () => `my birthyear is ${2022 - this.age}`;
//   annualSalary = () => `my annaualsalary is ${this.salary * 12}`;
//   package = () => `my salary package is ${(this.salary * 12) / 100000} LPA`;
// }

// let ironMan = new Employee("Tony", "Stark", 40, 300000, "iron");
// console.log(ironMan);

// let Thor = new Employee("chris", "Hemsworth", 35, 200000, "lightning")
// console.log(Thor);
// console.log(ironMan.firstName);
// console.log(Thor.firstName);
// console.log(ironMan.fullName());
// console.log(ironMan.birthyear());
// console.log(ironMan.annualSalary());
// console.log(ironMan.package());

// Inheritance :-

// class whatsApp_v1 {
//     constructor(textMessage, images) {
//         this.textMessage = textMessage
//         this.images = images
//     }
// }

// class whatsApp_v2 extends whatsApp_v1 {
//     constructor(textMessage, images, videos, documents) {
//         super(textMessage, images)
//         this.videos = videos
//         this.documents = documents
//     }

// }

// class whatsApp_v3 extends whatsApp_v2 {
//     constructor(textMessage, images, videos, documents, voiceCall, videoCall) {
//         super(textMessage, images, videos, documents)
//         this.voiceCall = voiceCall
//         this.videoCall = videoCall
//     }
// }

// let newMessage = new whatsApp_v3("hi here welcome to whatsapp", "you can send images ", "you can also send videos from your gallery", "this is for pdf and other documents", "this is for voice messages", "this is for videocalls")
// console.log(newMessage);

// get and set method :-

// class aadhar {
//   constructor(fullname, birthdate, bloodgroup, address, transactions) {
//     this.fullname = fullname;
//     this.birthdate = birthdate;
//     this.bloodgroup = bloodgroup;
//     this.address = address;
//     this.transactions = transactions;
//   }

//   get info() {
//     return this.fullname;
//   }

//   set update(value) {
//     return (this.address = value);
//   }

//   set updation(value) {
//     return this.transactions.push(value);
//   }
// }

// let person_1 = new aadhar(
//   "Abhishek Gone",
//   "27/11/1996",
//   "B+",
//   "surat,gujarat",
//   [7000, 10000]
// );
// // console.log(person_1);
// // console.log(person_1.info);
// // person_1.update = "bangalore,karnataka";
// // console.log(person_1);
// person_1.updation = 5000;
// console.log(person_1);

// 20.  for of  loop:- to iterate arrays and strings

// let numbers = [1, 2, 3, 4, 5];

// for (let num of numbers) {
//   //   console.log(`${num ** 2}`);
//   console.log(num ** 2);
// }

// let food = "Biriyani"

// for (let spicy of food) {
//     console.log(spicy);
// }

// let foodItems = ["pizza", "burger", "vadapav", "dal fry", "biriyani"];
// for (let food of foodItems) {
//     console.log(food);
// }

// 21. for in loop: to iteraate objects:-

// let testScores = {
//   shekhar: 75,
//   meghana: 95,
//   abhishek: 90,
//   priya: 70,
//   rajesh: 80,
//   dekkshit: 85,
//   chaitra: 90,
//   baby: 85,
// };

// for (let person in testScores) {
//   console.log(person); // only give keys
// }

// for (let person in testScores) {
//   //   console.log(`${person} scored ${testScores[person]}`); // give keys and values
//   console.log(testScores[person]);  // gives values
// }

// let total = 0;
// let scores = Object.values(testScores); // gives values in the form of array
// for (let score of scores) {
//   total += score;
// }
// console.log(total / scores.length);

// 22.  higher order functions:-

// return a function

// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// const isChild = makeBetweenFunc(1, 18);
// const isAdult = makeBetweenFunc(19, 60);
// const isSenior = makeBetweenFunc(61, 120);

// console.log(isChild(10));
// console.log(isAdult(60));
// console.log(isSenior(61));

// 23. forEach() array method:-

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach((element) => {
//   console.log(element);
// });

// 24. setTimeout()

// console.log("Hello....");

// setTimeout(() => {
//     console.log("....are you still there?");
// }, 3000);

// console.log("GoodBye");

// 25. setInterval()

// let id = setInterval(() => {
//     console.log(Math.random());
// }, 2000)

// 26. some() and every() :-

// let words = ["dog", "log", "bat", "cat", "rat"];

// let newwords = words.every((word) => {
//   return word.length == 3;
// });
// console.log(newwords);

// let words = ["dog", "harry", "batsman", "catwoman", "rat"];

// let oldWords = words.some(word => {
//     return word.length > 4;
// })

// console.log(oldWords);

// 27. reduce()

// let arr = [3, 5, 7, 9, 11];

// let newarr = arr.reduce((sum, i) => {
//     return sum + i;
// })
// console.log(newarr);

// 28. default params:-

// function rollDie(numSides) {
//     return Math.floor(Math.random() * numSides) + 1;
// }
// console.log(rollDie()); // if we dont pass any values output will be Nan
// console.log(rollDie(6)); // random nos between 1 to 6

// therefore when we dont pass any values we should not get nan

// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1;
// }
// console.log(rollDie()); // now even if we dont pass any values the default random nos will be between 1 to 6

// function greet(msg, person, punc) {
//     return `${msg} ${person} ${punc} `
// }
// console.log(greet("Alan"));  // output = Alan undefined undefined

// function greet(person, msg = "Hello", punc = "!!!!") {
//     return `${msg} ${person} ${punc} `
// }
// console.log(greet("Alan"));  // output = Hello Alan !!!!
// console.log(greet("Sia", "How are You", "?"));

// 29. Spread Operator :-

// console.log(Math.max(1, 2, 5, 41, 24, 12, 20)); // output = 41

// let nums = [1, 2, 5, 41, 24, 12, 20]
// console.log(Math.max(nums)); // output = NaN because before the element were separate but now they are in array

// // so we will use spread operator to single out the elements

// console.log(Math.max(...nums)); // output = 41

// call stack:

// const multiply = (x, y) => x * y;
// const square = (x) => x * x;

// const isRightTriangle = (a, b, c) => (
//     square(a) + square(b) === square(c)
// )

// console.log(isRightTriangle(3, 4, 5));

// recursion in javascript
// Recursion is a technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result.

function add(number) {
  if (number <= 0) {
    return 0;
  } else {
    return number + add(number - 1);
  }
}

console.log(add(3));
// add(3) => 3 + add(2)
//           3 + 2 + add(1)
//           3 + 2 + 1 + add(0)
//           3 + 2 + 1 + 0 = 6
