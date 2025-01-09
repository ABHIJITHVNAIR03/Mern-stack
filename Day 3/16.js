//write a js to check palindrome or not

let str="amma";
for(let i=0;i<str.length/2;i++){
    if(str[i]==str[str.length-1-i]){
        console.log("palindrome");
    }
    else{
        console.log("Not Palindrome")
    }
    break;
}