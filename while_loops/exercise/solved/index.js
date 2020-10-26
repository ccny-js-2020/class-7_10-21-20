/*

1. Create a while loop that stops when a number is greater than 50
2. Create a while loop that stops when a number that is divided by 4 is equal to 0
3. Create a while loop that stops when a number is less than -20
4. Creata a while loop that stops when you loop through the array below and one of the students age is less than 30

*/

//1
var num = 0
while(num < 51){
  //console.log(num);
  num++;
}

//2
var numTwo = 1;
var numberIsDivisbleByFour = false;
while(!numberIsDivisbleByFour){
  if(numTwo % 4 == 0){
    numberIsDivisbleByFour = true;
  } else {
    numTwo++;
  }
  //console.log(numTwo);
}

//3
var numThree = 0
while(numThree > -20){
  //console.log(numThree);
  numThree--;
}



//4
var lessThan30 = false;
var students = [
  {
    "name": "jim",
    "age": 31
  },
  {
    "name": "jill",
    "age": 32
  },
  {
    "name": "jane",
    "age": 29
  }
]

while(!lessThan30){
  for(var i = 0; i < students.length; i++){
    if(students[i].age < 30){
      lessThan30 = true;
    } else {
      //console.log(students[i])
    }
  }
}
