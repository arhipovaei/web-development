//Задание №7
console.log('№7');
let d1 = [45, 78, 10, 3];
d1[7]=100
console.log(d1);
console.log(d1[6]);
console.log(d1[7]);

console.log('');

//Задание №8
console.log('№8');
let d2 = [45, 78, 10, 3];
sum2 = 0;
for (let i = 0; i < d2.length; i++) {
    sum2 += d2[i];
}
console.log(sum2);

console.log('');

//Задание №9
console.log('№9');
let d3 = [45, 78, 10, 3];
d3[4] = 100;
sum3 = 0;
for(let i = 0; i < d3.length; i++) {
    sum3 += d3[i];
}
console.log(sum3);

console.log('');

//Задание №10
console.log('№10');
let d4 = [45, 78, 10, 3];
function my(a, b) {
    return b - a;
}
d4.sort(my);
console.log(d4);

console.log('');

//Задание №11
console.log('№11');
let d5 = [];
for (i = 0; i < 3; i++) {
    d5[i] = [];
    for (j = 0; j < 4; j++){
        d5[i][j]= 5;
    }
}
console.log(d5);

console.log('');

//Задание №12
console.log('№12');
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

console.log('');

//Задание №13
console.log('№13');
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


console.log('');

//Задание №14
console.log('№14');
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
console.log('\n');
logFive(new RangeSeq(100, 1000));

console.log('');

//Задание №22
console.log('№22');
Number.prototype.isOdd = function () {
    if (self % 2 == 1){
        return true;
    } return false;
}
let c = 6;
console.log(c.isOdd());

console.log('');