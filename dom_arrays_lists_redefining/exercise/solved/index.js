/*
  - Using both inputs, enter a movie name and the year it was made
  - append the value of both inputs to the table

  Bonus:
  - Make sure the table rows dont disappear when you click the button to add a row to the table
  - give the table a border via jquery
  - change the border color of the table every time you click on the add movie button
  - make table text font-size larger by 1px every time you click on the add movie button
*/
//giving all the table, tr, th, & td elements a solid black border
$("table, tr, th, td").css("border", "1px solid black")

//creating an array of colors to use below
var colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'magenta', 'yellow', 'black'];
//creating a font size integer to be used below
var fontSize = 12;

//accessing the html element with an id of 'add-movie' and adding an click event
$("#add-movie").click(function(){
  //incrementing the font size by 1
  fontSize++;
  //getting the value of the html element with an id of 'enter-actor-input' and storing it in a variable
  var personInput = $("#enter-actor-input").val();
  //getting the value of the html element with an id of 'enter-movie-input' and storing it in a variable
  var movieInput = $("#enter-movie-input").val();

  //creating a 'tr' html element and storing it in a variable
  var tr = $("<tr>");
  //creating a 'td' html element and setting font-size css property, which will have the value of the font size variable
  var personTd = $("<td>").css("font-size", fontSize);
  //creating a 'td' html element and setting font-size css property, which will have the value of the font size variable
  var movieTd = $("<td>").css("font-size", fontSize);

  //setting the text of the 'td' element
  personTd.text(personInput);
  //setting the text of the 'td' element
  movieTd.text(movieInput);
  //appending both 'td' elements to the 'tr' created above
  tr.append(personTd).append(movieTd);

  //appending the tr to the "table" that was set in the html
  $("table").append(tr);

  //getting a random index out the randomColors array
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  //setting the css of the table, th, tr & td with the randomColor
  $("table, th, tr, td").css("border", "1px solid " + randomColor)
});
