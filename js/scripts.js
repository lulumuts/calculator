var BMI = function(number1, number2) {
return (number1 / number2)/number2;
};

var number1 = parseInt(prompt("Enter Your Weight"));
var number2 = parseInt(prompt("Enter Your Height:"));



 var result = BMI(number1, number2);

alert(result);
