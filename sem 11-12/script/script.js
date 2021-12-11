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

//Задание №7
console.log('Задача №7');
let d1 = [45, 78, 10, 3];
d1[7]=100
console.log(d1);
console.log(d1[6]);
console.log(d1[7]);

console.log('\n');

//Задание №8
console.log('Задача №8');
let d2 = [45, 78, 10, 3];
sum2 = 0;
for (let i = 0; i < d2.length; i++) {
    sum2 += d2[i];
}
console.log(sum2);

console.log('\n');

//Задание №9
console.log('Задача №9');
let d3 = [45, 78, 10, 3];
d3[4] = 100;
sum3 = 0;
for(let i = 0; i < d3.length; i++) {
    sum3 += d3[i];
}
console.log(sum3);

console.log('\n');

//Задание №10
console.log('Задача №10');
let d4 = [45, 78, 10, 3];
function my(a, b) {
    return b - a;
}
d4.sort(my);
console.log(d4);

console.log('\n');

//Задание №11
console.log('Задача №11');
let d5 = [];
for (i = 0; i < 3; i++) {
    d5[i] = [];
    for (j = 0; j < 4; j++){
        d5[i][j]= 5;
    }
}
console.log(d5);

console.log('\n');

//Задание №12
console.log('Задача №12');
class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    plus(point) {
        return new Vector(this.x + point.x, this.y + point.y)
    }

    minus(point) {
        return new Vector(this.x - point.x, this.y - point.y)
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

console.log('\n');

//Задание №13
console.log('Задача №13');
function StretchCell(inner, width, height) {
	this.inner = inner;
	this.width = width;
	this.height = height;
}
function repeat(string, times) {
	let result = "";
	for (let i = 0; i < times; ++i)
		result += string;
	return result;
}
function TextCell(text) {
	this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
	return this.text.reduce(function(width, line) { return Math.max(width, line.length); }, 0);
};
TextCell.prototype.minHeight = function() {
	return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
	let result = [];
	for (let i = 0; i < height; ++i) {
		let line = this.text[i] || "";
		result.push(line + repeat(" ", width - line.length));
	}
	return result;
};
StretchCell.prototype.minWidth = function() {
	return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
	return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
	return this.inner.draw(width, height);
}
let sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));


console.log('\n');

//Задание №14
console.log('Задача №14');
function logFive(next) {
    len = next.length;
    if (len > 5) {
        len = 5;
    }
    for (var i = 0; i < len; i++) {
        console.log(next[i]);
    }
}

function ArSeq(arr){
    self.mass=[];
    for (let i in arr){
        self.mass.push(arr[i]);
    }
    return(self.mass)
}

function RangeSeq(from, to) {
    this.from = from;
    this.to = to;
    self.mass=[];
    for (var i = from; i < to; i++) {
        self.mass.push(i);
    }
    return(self.mass)   
}
logFive(new ArSeq([1, 2]));
logFive(new RangeSeq(100, 1000));

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

console.log('\n');

//Задание №22
console.log('№22');
Number.prototype.isOdd = function () {
    if (self % 2 == 1){
        return true;
    } return false;
}
let c = 6;
console.log(c.isOdd());

