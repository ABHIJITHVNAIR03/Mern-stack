//1. write a js to sort a given number in ascending order {a=(1,5,2,3,10,9,8,7,6)}
//2. descending order
//3. no inbuilt sorting should be used apart from for loop

//1.
var a = [1,5,2,3,10,9,8,7,6];
for (var i = 1; i < a.length; i++)
    for (var j = 0; j < i; j++)
        if (a[i] < a[j]) {
            var x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
console.log(a);



//2.
var a = [1, 5, 2, 3, 10, 9, 8, 7, 6];
for (var i = 0; i < a.length - 1; i++) {
    for (var j = i + 1; j < a.length; j++) {
        if (a[i] < a[j]) {
            var x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
    }
}
console.log(a);