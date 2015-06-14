function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');

	var fullName = firstName + ' ' + lastName;

	console.log(fullName);

	if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {
		console.log('It\'s a non-Assembly General!');
		alert('G\'day General!');
	} else if (firstName == 'general' && lastName == 'assembly') {
		alert('Sorry, GA, you\'re not welcome.');
	} else {
		alert('Website for Generals only.');
	}

}


// When the page is loaded
$(function() {

	$('img').on('click', askQuestions);

	// Hide the content when the page loads
	$('h3').next().hide();

	// When the user clicks on an h3
	$('h3').on('click', function(){

		// Find the next element and hide it
		$(this).next().slideToggle();
		// Toggle a class of 'open' when clicked
		$(this).toggleClass('open');

	});

});