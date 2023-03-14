// 문자열 관련 함수, 속성


let str1 = 'stroberry moon'
let str2 = '   stroberry moon'

console.log(str1[0]);
console.log(str1[0] + str1[12]);

let msg = "Happy Birthday";
console.log(msg.toLocaleUpperCase());
console.log(msg.toLocaleLowerCase());
console.log(str2.trim());

let msg2 = "Hello World";
console.log(msg2.trim().toUpperCase());

let fruit = 'applemango';
console.log(fruit.indexOf('a'));
console.log(fruit.indexOf('apple'));

console.log(fruit.charAt(3));

console.log(fruit.slice(5));
console.log(fruit.slice(3, 6));
console.log(fruit.slice(-3));

let msg3 = "wow it is so amazing";
console.log(msg3.replace('wow', 'lol'));

let date = '23. 03. 10';
console.log(date.split('.'));


let arr1 = [1,2,3,4,5];
let arr2 = ['dog', 'cat', 'bird', 'rabbit'];
arr1[5] = 6

arr1 = [1,2,3,4,5];
arr1.push(6);
arr1.push(10);
arr1.pop(10);

arr2.unshift('fox');
arr2.shift();

console.log(arr2.includes('quaka'));
console.log(arr2.indexOf('quaka'));
console.log(arr1.reverse());
console.log(arr1);

str1 = arr1.join('');
console.log(str1);

// 

let arr3 = [1,3,5,4,6];
let alphabets = ['a', 'b', 'c', 'd', 'e'];

for(let i=0; i<arr1.length; i++){
    console.log(arr3(i));
}

for(let number of arr3){
    console.log(number);
}

arr3.forEach(function(data, index, arr){
    console.log(data, index, arr);
})

console.log('------');
arr3.filter(function(num){
    return num > 3;
})
console.log(arr3)

let sa=arr2.filter(function(el){
    return el.length >= 4
})
console.log(sa);

let arr4=[1,2,3].map(function(el){
    return el * 3;
});

let arr5 = new Array();

for(let i=1; i>101; i++){
    arr5.push(i);
}
console.log(arr5);

let sum1=0;
for(let number of arr5){
    sum1= sum1+number;
}

let sum2=0;
arr5.forEach((number)=>{
    sum2 = sum2 + number;
})

