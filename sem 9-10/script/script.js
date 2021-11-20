//Задание №1

console.log('Задание №1');
for (let i = 1; i <= 7; i++) {
  console.log('#'.repeat(i));
}

console.log('');

//Задание №2
console.log('Задание №2');
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) { 
        console.log('FizzBuzz')
    } else if(i % 3 == 0) {
        console.log('Fizz')
    } else if(i % 5 == 0) {
        console.log('Buzz')
    } else console.log(i);
}

console.log('');

//Задание №3
console.log('Задание №3');
for(let i = 0; i < 8; i++) {
  let board = '';
  for(let j = 0; j < 8; j++){
      if (i % 2 == 0 && j % 2 == 0) {
      board += '#';
    } else if (i % 2 == 1 && j % 2 == 0) {
      board += ' ';
    } else if (i % 2 == 0 && j % 2 == 1) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  console.log(board);
}

console.log('');

//Задание №4
console.log('Задание №4');
function min(a, b){
    if (a < b){
        console.log(a)
    } else console.log(b)
}
console.log('Найти наименьшее значение между 5 и 7')
min(5, 7)

console.log('');

//Задание №5
console.log('Задание №5');
function countBs(string) {
    let totalB = 0;
    for(let i=0; i<string.length; i++) {
        if (string.charAt(i) == 'B') {
            totalB++
        }
    }
    console.log(`Количество символов B в строке ${string}: ${totalB}`)
}
function countChar(string, char) {
    let totalChar = 0;
    for(let i=0; i<string.length; i++) {
        if (string.charAt(i) == char) {
            totalChar++
        }
    }
    console.log(`Количество символов ${char} в строке ${string}: ${totalChar}`)
}
countBs('Bee');
countChar('корова', 'о');

console.log('');

//Задание №6
console.log('Задание №6')
function range(start, end, step) {
    let i = start, arr = [];
    if (!step) {  
        step = 1
    }
    if (step < 0) {
        start = end; 
        end = i;
    }
    for (; i >= start && i <= end; i += step) { 
        arr.push(i);  
    }
    return arr;
}
function sum(arr) {
    let counter = arr[0];
    for (let i = arr[0]; i < arr.length; i++) {
        counter += arr[i];
    }
    return counter
}
console.log('Sum of the range(1, 10): '+sum(range(1, 10)));
console.log('Range (5, 2, -1): '+range(5, 2, -1));

console.log('');

//Задание №7
console.log('Задание №7')
function reverseArray(arr) {
    let i;
    result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
    }
    return result;
    }
    function reverseArrayInPlace(arr) {
    let i;
    let old;
    for (let i = 0; i < Math.floor(arr.length / 2); i++ ) {
    old = arr[i];
    arr[i] = arr[arr.length - (1 + i)];
    arr[arr.length - (1 + i)] = old;
    }
    return arr;
    }
console.log(reverseArray([0,4,8,2]));
let arVal  = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arVal));
