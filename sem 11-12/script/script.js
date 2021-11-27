//Задание №1
console.log("Задача №1");
let city1 = {};
city1.name = "ГородN";
city1.population = 10000000;
console.log(`Название ${city1.name}, население ${city1.population}`);

console.log('\n');

//Задание №2
console.log("Задача №2");
let city2 = {name: "ГородM", population: 1e6};
console.log(`Название ${city2.name}, население ${city2.population}`);

console.log('\n');

//Задание №3
console.log("Задача №3");
function getName(){
    return this.name
};
city1.getName = getName;
city2.getName = getName;
console.log(city1.getName());
console.log(city2.getName());

console.log('\n');

//Задание №4
console.log("Задача №4");
function exportStr(){
    return `name=${this.name}\npopulation=${this.population}\n` };
city1.exportStr = exportStr;
city2.exportStr = exportStr;
console.log(city1.exportStr());
console.log(city2.exportStr());

console.log('\n');

//Задание №5
console.log("Задача №5");
function getObj() { 
    return this
};
city1.getCity = getObj;
city2.getCity = getObj;
console.log(city1.getCity().getName());
console.log(city2.getCity().getName());

console.log('\n');

//Задание №6
console.log("Задача №6");
let obj = {
    method1:function(){
        return this
    },
    method2:function(){
        return this
    },
    method3:function(){
        console.log('метод3')
    }
}
obj.method1().method2().method3()

console.log('\n');

//Задание №15
console.log("Задача №15");
function Card(from, to) {
    this.from = from;
    this.to = to;
    this.show = function () {
        return `${this.from},${this.to}`;
    };
}
let c1 = new Card('Екатеринбург', 'Москва');
Card.Show=c1
console.log(Card.Show)

console.log('\n');

//Задание №16
console.log("Задача №16");
class Human {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    getInfo() {
        return `${this.name}, ${this.age}, ${this.height}`;
    }
    get firstname() {
        return this.name;
    }
}
let humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)
];
for (let human of humans)
    console.log(human.getInfo());

console.log('\n');

//Задание №17
console.log("Задача №17");
function sortByName(arr) {
    let tracking = true;
    while (tracking) {
        tracking = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].name < arr[i - 1].name) {
                const tmp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = tmp;
                tracking = true;
            }
        }
    }
    return arr;
}
function sortByHeight(arr) {
    let tracking = true;
    while (tracking) {
        tracking = false;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].height < arr[i - 1].height) {
                const tmp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = tmp;
                tracking = true;
            }
        }
    }
    return arr;
}
console.log(sortByHeight(humans));

console.log('\n');

//Задание №18
console.log("Задача №18");
let dt1 = new Date(2045, 0, 1);
console.log(dt1);

console.log('\n');

//Задание №19
console.log("Задача №19");
let dt2 = +new Date() / 1000;
console.log(dt2);

console.log('\n');

//Задание №20
console.log("Задача №20");
function getDays (month, year) {
    return new Date(year, month, 0).getDate();
}
console.log(getDays(11, 2021));
console.log(getDays(12, 2021));