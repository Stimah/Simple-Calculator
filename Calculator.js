
let operator = prompt("Enter an Operator:(+, -, /, *)");
let num1=parseFloat(prompt("Enter the first Number"));
let num2=parseFloat(prompt("Enter the Second Number"));

let Result;

switch(operator){
    case "+":
        result=num1+num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":

        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error : Can't divide by 0 .";
               }
        break;
        default:
            result = "invalid Operator.";
}

alert("Le résultat est : " + result);


