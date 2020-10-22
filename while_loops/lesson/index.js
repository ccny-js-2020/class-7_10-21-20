/*

  - A while loop will end when the condition in between the parentheses equates to false

*/

//while loop using num++ to determine when it ends
var num = 0
while(num < 10){
  console.log(num);
  num++
}

//while loop using a direct boolean and redefining the variable to false when it ends
var numTwo = 0
var numDivisibleByFive = false
while(!numDivisibleByFive){
  numTwo++
  console.log(numTwo);
  if(numTwo % 5 == 0){
    numDivisibleByFive = true
  }
}

//while loop with an array and using a direct boolean and redefining the variable to false when it ends
var nameDoesNotHaveAnO = true
var names = ["Jim", "Jane", "Jill", "Joe"];
while(nameDoesNotHaveAnO){
  for(var i = 0; i < names.length; i++){
    if(names[i].indexOf("o") > -1){
      nameDoesNotHaveAnO = false;
    } else {
      console.log(names[i])
    }
  }
}
