let num1 = prompt("Please enter your first division number");
let num2 = prompt("Please enter your second division number");
let result = num1 / num2;

if (Number.isFinite(result)) {
    console.log(result);
} 
else {
    console.log("Math error");
}
