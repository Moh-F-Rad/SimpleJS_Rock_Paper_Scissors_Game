$(document).ready(function(){

	// move focus to first text box 
	$("#fName").focus();
	
	// the handler for the click event of submit button
	$("#form").submit(
		function(event) {
			var isValid = true;
			
			// validate the first name entry
			var firstName = $("#fName").val().trim();
			if (firstName == "") {
				$("#fName").next().text("This field is required.");
				isValid = false;
			} else {
				$("#fName").next().text("✔");
			}
			$("#fName").val(firstName);
			
			// validate the last name entry
			var lastName = $("#lName").val().trim();
			if (lastName == "") {
				$("#lName").next().text("This field is required.");
				isValid = false;
			} else {
				$("#lName").next().text("✔");
			}
			$("#lName").val(lastName);
			
			// validate the email entry with a regular expression
			var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
			var email = $("#email").val().trim();
			if (email == "") {
			$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("✔");
			}
			$("#email").val(email);				
			
			// validate the username entry
			var username = $("#username").val().trim();
			if (username == "") {
				$("#username").next().text("This field is required.");
				isValid = false;
			} else if ( username.length < 8 ) {
				$("#username").next().text("Username: atleast 8 characters");
				isValid = false;
			} else {
				$("#username").next().text("✔");
			}
			$("#username").val(username);
			
			
			// prevent the default action of submitting the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault();
			 			
			} 
			
		} // end function
	);	// end submit
	
	// the handler for the click event of reset button
	$("#reset").click(function(){
		$("#form input").next().text(" *");
	
	}); //End of reset function
	
	/////////////////////////////////////////////////////////////////////////////////////
	/* Main Game JS codes */
	
	$("#guid").hide();		//hides game instructions
    $(".cpuHand").hide();	// hides cpu hands
	$("#gameBoard").hide();	// hides game board
	
	// the handler for the click event of start button 
	$("#startButton").click(function(){
		
		$("#gameBoard").show();		// Displays the game board
	
	}); // end of start button function
	

	// Generates random numbers in range 1-3 (any form of CPU hands)//
	function randomGeneratorFunction() {
		return (Math.floor(Math.random() * 3))+1;
	};		// End of random function	

	$(".userHand").click(function(){							//when a form is clicked by user
    var cpuForm = randomGeneratorFunction();					// A random value corresponding a form of CPU's forms
	var userFormValue = parseInt($(this).attr("alt"));			// retrives the value of users clicked form (image)
	var currentUserPoint = parseInt(document.getElementById("screenUser").innerHTML);
	var currentCPUPoint = parseInt(document.getElementById("screenCPU").innerHTML);
	
	if (cpuForm == 1){											// if CPU's choice is equal to Scissors
		$("#cpuFormImage").attr("src", "images/ScissorsR2L.jpg");		//Displays CPU's form: Scissors
			if (userFormValue == 3) {							// if user's choice is equal to Paper
				currentCPUPoint++;
				$("#screenCPU").text(currentCPUPoint.toString());
			
			} else if (userFormValue == 2) {					// if user's choice is equal to Rock
				currentUserPoint++;
				$("#screenUser").text(currentUserPoint.toString());
				}
		
		} else if (cpuForm == 2){								// if CPU's choice is equal to Rock
			$("#cpuFormImage").attr("src", "images/RockR2L.jpg");	//Displays CPU's form: Rock
				if (userFormValue == 1) {						// if user's choice is equal to Scissors
					currentCPUPoint++;
					$("#screenCPU").text(currentCPUPoint.toString());
				} else if (userFormValue == 3) {				// if user's choice is equal to Paper
					currentUserPoint++;
					$("#screenUser").text(currentUserPoint.toString());
					}
		
			} else if (cpuForm == 3) {							// if CPU's choice is equal to Paper
				$("#cpuFormImage").attr("src", "images/PaperR2L.jpg");	//Displays CPU's form: Paper
					if (userFormValue == 2) {					// if user's choice is equal to Rock
						currentCPUPoint++;
						$("#screenCPU").text(currentCPUPoint.toString());
					} else if (userFormValue == 1) {			// if user's choice is equal to Scissors
						currentUserPoint++;
						$("#screenUser").text(currentUserPoint.toString());
						}
			}
	
  
	}); // End of game function
	
	// the handler for the click event of Game instructions button
	$("#button").click(function(){
		$("#gameInstructionGuid").load("gamesInstruction.html #guid");
		
	}); // End of button click function
	
	
	
 }); //End of ready function
  
  





