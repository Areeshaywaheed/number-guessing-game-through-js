let number = 25;

let a = prompt("Enter a numer! lets see you can guess on first try or not");

a = Number.parseInt(a);
let s = 1;
while (a != number){
    if (a > number){
        alert("your number is greater you should guess smaller one")
    }
    else if (a < number){
        alert("your number is smaller you should guess bigger one")
    }
    a = prompt("Enter number again , I hope you will guess correct now")
    s = s+1;
}

alert("Congratulation , you have guessed it correct after trying " + s +" time")