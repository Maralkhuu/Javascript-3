// const student = {
//   firstName: "Bat",
//   age: 13,
//   isHeStudent: true
// };

// console.log(student);
// const fruits = ["apple" , "banana" , "orange"]
// console.log(fruits);

// const person = { firstName: "Ану", age: 20 }
// console.log(person.firstName);

// const colors = ["Улаан", "Ногоон", "Цэнхэр"]
// console.log(colors[0]);

// const product = { firstName: "Дэвтэр", price: 2500 }
// console.log(product["price"]);

// const students = ["Бат", "Ану", "Болд"]
// console.log(students[1]);

// const person = { firstName: "Бат", age: 18 }
// console.log(`${person.firstName} ${person.age} nastai.`);

// const animals = ["Нохой", "Муур", "Туулай", "Морь"]
// console.log(animals.length);

// const numbers = [10, 20, 30, 40, 50]
// console.log(numbers[4]);

// const student = { name: "Сараа", age: 16, grade: 10 }
// const key = "grade"
// console.log(student[key]);

// const fruits = ["Алим", "Банана", "Жүрж"]
// fruits[1] = "Усан үзэм"
// console.log(fruits);

// const person = { name: "Болд", age: 17 }
// person.isAdult = person.age >= 18;
// console.log(person);

// const books = ["Математик", "Англи хэл"]
// books.push("Программчлал")
// console.log(books);

// const student = { name: "Ану", age: 15, grade: 9 }
// console.log(student);

// const player = { name: "Тэмүүлэн", score: 100 }
// if (player.score >= 100) {
//     console.log(player.score + 50);
// } else if(player.score < 100) {
//     console.log(player.score +10);
// }

// const items = ["Дэвтэр", "Бал", "Баллуур"]
// items.pop("Баллуур")
// const removedItem = "Баллуур"
// console.log(items, removedItem);

// const queue = ["Бат", "Ану"]
// queue.unshift("Болд")
// console.log(queue);

// const lamp = { isOn: false }
// if (lamp.isOn) {
//     lamp.isOn = false;
//     console.log("Гэрлийг унтраалаа");
// } else {
//     lamp.isOn = true;
//     console.log("Гэрлийг асаалаа");
// }
// console.log(lamp);

// const queue = ["Болд", "Бат", "Ану"]
// queue.shift("Болд")
// const firstPerson = "Болд"
// console.log(queue, firstPerson);

// const user = { name: "Бат", isVerified: true, temporaryCode: "ABC123" }
// if (user.isVerified) {
//     delete user.temporaryCode
// } else {
//     console.log("Эхлээд бүртгэлээ баталгаажуулна уу");

// }
// console.log(user);

// const product = { name: "Дэвтэр", price: 2500, quantity: 4 }
// console.log(product.price * product.quantity);

// const rectangle = { width: 5, height: 8 }
// rectangle.area = rectangle.width * rectangle.height
// console.log(rectangle);

// const scores = { math: 80, english: 90, programming: 100 }
// scores.dundaj = ((scores.math + scores.english + scores.programming) / 3)
// console.log(scores.dundaj);

// const product = { price: 50000, discountPercent: 20 }
// if (product.discountPercent > 0) {
//     console.log(product.price - (product.price * product.discountPercent / 100));

// } else {
//     console.log(product.price);

// }

// const account = { owner: "Болд", balance: 50000 }
// const withdrawAmount = 60000
// if (account.balance >= withdrawAmount) {
//     console.log("Гүйлгээ амжилттай");

// } else {
//     console.log("Үлдэгдэл хүрэлцэхгүй", account.balance);

// }

// const product = { name: "Бал", stock: 0 };

// const message = product.stock > 0 ? "Belen baina" : "Bhgui bna";
// console.log(message);

// const numbers = [15, 25, 10]
// console.log(numbers[0] + numbers[1] + numbers[2]);

// const scores = [80, 90, 100]
// console.log((scores[0] + scores[1] + scores[2]) / 3);

// const customer = { money: 10000 },
//   product = { price: 8000, stock: 3 };
// if (customer.money > product.price && product.price > 0) {
//     console.log("Авч болно",);

// } else {
//     console.log("Авч болохгүй");

// }

// const student = { name: "Сараа", score: 85 }
// if (student.score >= 90) {
//     console.log("Маш сайн");

// } else if (student.score >= 60 && student.score < 90){
//     console.log("Тэнцсэн");

// } else if (student.score < 60) {
//     console.log("Тэнцээгүй");
// }

// const student = { name: "Бат", age: 16 }
// console.log("age" in student);
// console.log("email" in student);

// const student = {
//   name: "Болд",
//   address: { city: "Улаанбаатар", district: "Хан-Уул" },
// };
// console.log(student.address.city);

// const person = {
//   name: "Ану",
//   address: { city: "Улаанбаатар", district: "Баянзүрх" },
// };
// if (person.address.city === "Улаанбаатар") {
//     console.log(person.address.district);

// } else {
//     console.log("Орон нутгийн оршин суугч");

// }

// const student = { name: "Бат", scores: { math: 70, english: 80 } };
// if (student.scores.math < 80) {
//     console.log(student.scores.math + 10);

// } else {
//     console.log("Нэмэлт оноо шаардлагагүй");

// }

// const names = ["Бат", "Ану"]
// const temp = names[0];
// names[0] = names[1];
// names[1] = temp;
// console.log(names);

// const fruits = ["Алим", "Банана", "Жүрж"]
// fruits.includes("Банана")
// if (fruits.includes("Банана")) {
//     console.log("Банана байна");

// } else console.log("Банана алга");

// const students = ["Бат", "Ану", "Болд", "Сараа"]
// const index = students.indexOf("Болд")
// console.log(index);

// const order = { product: { price: 5000, quantity: 3 }, delivery: { fee: 2500 } }
// if (order.product.price * order.product.quantity > 20000) {
//     console.log(order.product.price * order.product.quantity);

// } else {
//     console.log(order.product.price* order.product.quantity + order.delivery.fee);

// }

// const user1 = { name: "Болд", age: 20 };
// const user2 = { email: "bold@example.com", city: "Улаанбаатар" };
// const user = Object.assign ({}, user1, user2);
// console.log(user);

// const cart = []
// console.log(cart.length);
// if (cart.length == 0) {
//     console.log("Сагс хоосон");

// } else {
//     console.log("Сагсанд бараа байна");

// }

// const numbers = [35, 20]
// if (numbers[0] > numbers[1]) {
//     console.log(numbers[0]);

// } else if (numbers[0] < numbers[1]) {
//     console.log(numbers[1]);
// } else if (numbers[0] == numbers[1]) {
//     console.log("Хоёр тоо тэнцүү");
// }

// const students = ["Бат", "Ану"];
// const newStudent = "Сараа";

// if (!students.includes(newStudent)) {
//   students.push(newStudent);
//   console.log(students);
// } else {
//   console.log("Энэ нэр бүртгэлтэй байна");
// }

// const user1 = { name: "Ану", age: 18 };
// const user2 = { email: "anu@example.com", city: "Улаанбаатар" };
// const user = { ...user1, ...user2 };
// console.log(user);

// const groupA = ["Бат", "Ану"]
// const groupB = ["Болд", "Сараа"];
// const allStudents = groupA.concat(groupB)
// console.log(allStudents);

// const original = [10, 20, 30]
// const copied = [...original]
// copied[0] = 99;
// console.log("original:", original);
// console.log("copied:", copied);

// const numbers = [10, 20, 30, 40, 50]
// const slice = numbers.slice(1, 4)
// console.log(slice);

// const user = { name: "Сараа", age: 22, email: "saraa@example.com" }
// const profile = {name: "Сараа", age: 22}
// profile.name = "Bat"
// console.log(user.name, profile.name);

// const colors = ["Улаан", "Ногоон", "Цэнхэр", "Шар"]
// const slice = colors.splice(1,1)
// console.log(colors);

// const days = ["Даваа", "Лхагва"]
// const day = days.splice(1, 0, "Мягмар")
// console.log(days);

// const words = ["Би", "JavaScript", "сурч", "байна."]
// console.log(words.join(" "));

// const students = [{ name: "Бат", score: 75 }, { name: "Ану", score: 90 }]
// const bat = students[0].score + 10
// console.log(students[0].name, bat);

// if (students[1] <= 90) {
//     console.log("Ану маш сайн");
    
// } else {
//     console.log("Ану хичээгээрэй");
    
// }