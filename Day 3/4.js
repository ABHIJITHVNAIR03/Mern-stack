//write a js to find first 5 multiple of 5 in a natural number and if multiple of 5 then add 3 to it .if not multiple of 5 then multiply by 5.

let i=1;
while(i<5){
    if(i%5==0){
        var result=i+3;
    }
    else
    {
    var result=i*5
    }
    console.log(result);
    i++;
}