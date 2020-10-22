//accessing the element with an id of 'add-numbers' and attaching a click event
$("#add-numbers").on('click', function(){
	//accessing the element in the dom with an id of 'input-one'
	//getting the value of an element with an id of 'input-one' once the button is clicked and storing it in a variable
	var num1 = $('#input-one').val();
	//accessing the element in the dom with an id of 'input-two'
	//getting the value of an element with an id of 'input-two' once the button is clicked and storing it in a variable
	var num2 = $('#input-two').val();

	console.log(num1);
	console.log(num2);

	//validation with logic
	//if input one isnt blank and input 2 isnt blank
	if(num1 != "" && num2 != ""){
		//if both inputs arent blank
		//accessing the element in the dom with an id of 'result-numbers' and changing the text of the element to the addition of the value of both inputs
		$('#result-numbers').text(parseInt(num1) + parseInt(num2))
	} else {
		//if 1 or both inputs are blank
		//alert/toast/modal
		var alertDiv = $("<div>");
		alertDiv.attr("class", "alert alert-primary").attr("id", "num-alert");
		alertDiv.text("Please Enter Numbers in Both Inputs")
		$(".add-numbers-div").append(alertDiv);

		$("#num-alert").fadeOut(1000);
	}
});


//accessing the element with an id of 'add-string' and attaching a click event
$("#add-strings").on('click', function(){
	//accessing the element in the dom with an id of 'input-three'
	//getting the value of an element with an id of 'input-three' once the button is clicked and storing it in a variable
	var string1 = $('#input-three').val();
	//accessing the element in the dom with an id of 'input-four'
	//getting the value of an element with an id of 'input-four' once the button is clicked and storing it in a variable
	var string2 = $('#input-four').val();

	console.log(string1);
	console.log(string2);

	//validation with logic
	//if input one isnt blank and input 2 isnt blank
	if(string1 != "" && string2 != ""){
		//if both inputs arent blank
		//accessing the element in the dom with an id of 'result-strings' and changing the text of that element to the addition of the value of both inputs
		$('#result-strings').text(string1 + " " + string2)
	} else {
		//if 1 or both inputs are blank
		//alert/toast/modal
		//alert("Please enter text in both inputs")
		var alertDiv = $("<div>");
		alertDiv.attr("class", "alert alert-danger").attr("id", "string-alert");
		alertDiv.text("Please Enter Strings in Both Inputs")
		$(".add-strings-div").append(alertDiv)

		$("#string-alert").fadeOut(3000);
	}

});
