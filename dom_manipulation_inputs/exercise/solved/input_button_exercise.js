/*

For the name input
1. when you enter a name and then click on the button, turn all the letters to uppercase and put it in the "put-name-here" h1
2. when you enter your name and then click on the button, add an h2 tag to the 'name-results' class and put in the input name with all letters uppercase except the first letter

For the Increment and Decrement buttons
1. Create a number variable outside of the onclick function
2. increment that number with the appropriate on click, and append the changed number to the dom
3. Make number decrease with appropriate button

For the emoji input
1. When you input an emoji type, i.e. happy, laughing, sleepy, etc., write logic to append an emoji of that Type
   to 'put-emoji-here' div.
   - obviously you dont need to write the logic for every emoji. just write the logic for 5-10 emojis
*/

//name input
$("#name-button").click(function(){
  var name = $("#name-input").val();
  $('#put-name-here').text(name.toUpperCase());

  var h2 = $("<h2>");
  var upper = $("#name-input").val().toUpperCase();
  var lower = upper[0].toLowerCase() + upper.substring(1, upper.length);
  h2.text(lower);

  $(".name-results").append(h2);
});

//increment and decrement button
var num = 0;
$("#num-inc-button").click(function(){
  num++;
  console.log(num)
  $("#span-element").text(num)
})

$("#num-dec-button").click(function(){
  num--;
  console.log(num)
  $("#span-element").text(num)
})

//emoji input
$("#enter-emoji-button").click(function(){
  var emojiInput = $("#emoji-input").val();

  if(emojiInput == "happy"){
    var emojiHtml = "<p>&#128515;</p>"
    $("#put-emoji-here").html(emojiHtml);
  } else if (emojiInput == "sad"){
    var emojiHtml = "<p>&#128532;</p>"
    $("#put-emoji-here").html(emojiHtml);
  } else if (emojiInput == "wink"){
    var emojiHtml = "<p>&#128521;</p>"
    $("#put-emoji-here").html(emojiHtml);
  } else if (emojiInput == "devil"){
    var emojiHtml = "<p>&#128520;</p>"
    $("#put-emoji-here").html(emojiHtml);
  } else if (emojiInput == "angel"){
    var emojiHtml = "<p>&#128519;</p>"
    $("#put-emoji-here").html(emojiHtml);
  } else {
    var alertNoEmoji = $("<div>");
    alertNoEmoji.attr("class", "alert alert-primary");
    alertNoEmoji.text("No Emoji for that");
    alertNoEmoji.fadeOut(5000);

    $("#put-emoji-here").append(alertNoEmoji);
  }
});
