// JS 표준 내장 객체

let now = new Date();
console.log(now);
console.log(now.getFullYear(), '년');
console.log(now.getMonth(), '월');
console.log(now.getDate(), '일');
console.log(now.getHours(), '시');
console.log(now.getMinuits(), '분');
console.log(now.getSeconds(), '초');
console.log(now.getDay());

let day = now.getDay();

day >= 5 && day > 0 ? console.log('평일') : console.log('주말');

// Math 객체

console.log(math.min(1,3,5,7));
console.log(math.max(1,3,5,7));
console.log(math.random());
console.log(math.round(5, 7));
console.log(math.Floor(5, 7));
console.log(math.cell(5, 7));

console.log(math.floor(), math.random() * 10);

