//declaring an empty names array
var names = [];
//creating an orderred list outside of the click function because it will get redefined every on click if you put it inside of the click function
var orderedList = $("<ol>");
var orderedListTwo = $("<ol>");
//adding a click function to the button in the html
$("#add-name").click(function(){
  //storing the input value when the button is clicked to a variable
  var nameInputValue = $("#enter-name-input").val();
  //logging that value
  console.log(nameInputValue);

  //2 ways we're going to add to the dom here

  //without looping
  //creating a list element and storing it in a variable
  var listItem = $("<li>");
  //adding the input value text to a list item
  listItem.text(nameInputValue);
  //adding that list item to the ordered list that we created above
  orderedList.append(listItem);
  //accessing the html class and appending the ordered list to it
  $(".add-without-array").append(orderedList)

  //with looping
  //pushing that input value to an array
  names.push(nameInputValue);
  console.log(names);

  //creating a list element and storing it in a variable
  var listItemTwo = $("<li>");
  //looping through the names array
  for(var i = 0; i < names.length; i++){
    //emptying the div in order to repopulate/redefine the html value
    //see what happens if you remove this .empty()
    // $(".add-with-array").empty();
    //adding text to the list item for every name in the array
    listItemTwo.text(names[i]);
    //adding that list item with the name text to the ordered list
    orderedListTwo.append(listItemTwo);
  }
  //adding that ordered list to the div in the dom
  $(".add-with-array").append(orderedListTwo);

});

//Scope, names dont get added to the array outside of the on click function
console.log(names)
