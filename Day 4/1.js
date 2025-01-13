//1 push()
var a=[1,5,2,8,4];
a.push(9);
console.log(a);

//2 pop()
var b=[1,5,2,8,4];
b.pop();
console.log(b);

//3 shift()
var c=[1,5,2,8,4];
c.shift();
console.log(c);

//4 unshift()
var d=[1,5,2,8,4];
d.unshift(8,5);
console.log(d);

//5 slice()
var a=[1,5,2,8,4];
var b=a.slice(1,3);
console.log(b);

//6 concat()
var a=[1,5,2,8,4];
var b=[99,34,65,11,44];
var c=a.concat(b);
console.log(c);

// indexOf()
var a="Hey, I am fine."
var b=a.indexOf("am");
console.log(b);