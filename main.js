//Task N1
function isEqual(a, b){
    if(a === b)
      return "EQUAL";
    
  return "NOT EQUAL";
}

//Task N2
function fahrenheitToCelsius(fahrenheit){
    let celsius;
    celsius = (fahrenheit - 32)*5/9;

    if(typeof fahrenheit != "number")
       return false;
    
    return celsius;
}

//Task N3
function miniCalculator(a, b, operation){
    if(typeof a != "number" || typeof b != "number" || (operation != "+" && operation != "-"
       && operation != "*" && operation != "/"))
     return false;
    
    if(operation == "+")
      return a + b;
    else if(operation == "-")
      return a - b;
    else if(operation == "*")
      return a*b;
    else
      return a/b;
}

//CHECKING (if these functions work)

 let function1 = isEqual(5, 5);
 let function2 = fahrenheitToCelsius(57);
 let function3 = miniCalculator(156, 24, "/");

 console.log(function1);
 console.log(function2);
 console.log(function3);