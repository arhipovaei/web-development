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