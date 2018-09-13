// Business logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is front-end logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result = add(number1, number2);
    $("#additionoutput").text(result);
 });

 $("form#division").submit(function(event) {
   event.preventDefault();
   var number1 = parseInt($("#divide1").val());
   var number2 = parseInt($("#divide2").val());
   var result = divide(number1, number2);
   $("#divisionoutput").text(result);
 });

 $("form#multiply").submit(function(event) {
   event.preventDefault();
   var number1 = parseInt($("#multiply1").val());
   var number2 = parseInt($("#multiply2").val());
   var result = multiply(number1, number2);
   $("#multiplicationoutput").text(result);
 });
});
