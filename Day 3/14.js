//write a js to print fibonacci series til n term

var limit=10;
var a=0;
var b=1;
console.log(a);
for(let i=0;i<=limit;i++){
    console.log(b);
    let temp=a+b;
    a=b;
    b=temp;
}