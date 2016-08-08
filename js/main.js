// Awesome job on this assignment! Your code is clean and effective, and the way you separated out the setValueInHTML() is awesome. Looks great.

$('document').ready(function() {

var city = $('input:text').val(); //defines var city to store user input
function setValueInHTML () {
	$("input:text").css({
    		"background-color":'white',
    		"color":'#111',
    	});
	// I usually recommend doing any styling changes in your CSS and using .addClass(); it becomes important to separate it out when your code base gets bigger. "Separation of concerns" is a big programming concept that I'm an advocate of!
	$("body").removeClass('nyc');
	$("body").removeClass('austin');
	$("body").removeClass('sf');
	$("body").removeClass('la');
	$("body").removeClass('sydney');
	$("input:text").val('');
	$("input:text").attr('placeholder','Enter another city...');
};

// The fact that you separated this out into another function is awesome! Great way to avoid repitition in your code; also, replacing the input text is great for user experience.

$('#submit-btn').click(function(){ //conditional statements to change background img upon submit
	if ($('input:text').val().trim().toLowerCase() === 'nyc' || $('input:text').val().trim().toLowerCase() === 'new york city' || $('input:text').val().trim().toLowerCase() === 'new york') {
		// I love that you used the .toLowerCase() function to account for differences in capitalization; you'll definitely use this in the real world too
		// $("body").removeClass("nyc");
		setValueInHTML();
		// I think you forgot to switch out the old code with your new setValueInHTML() function for this conditional statement
		$('body').addClass('nyc');
		console.log('nyc works.');
	} else if ($('input:text').val().trim().toLowerCase() === 'la' || $('input:text').val().trim().toLowerCase() === 'lax' || $('input:text').val().trim().toLowerCase() === 'los angeles') {
		setValueInHTML();
		$('body').addClass('la');
		console.log('la works.');
	} else if ($('input:text').val().trim().toLowerCase() === 'sydney') {
		setValueInHTML();
		$('body').addClass('sydney');
		console.log('sydney works.');
	} else if ($('input:text').val().trim().toLowerCase() === 'austin') {
		setValueInHTML();
		$('body').addClass('austin');
		console.log('austin works.');
	} else if ($('input:text').val().trim().toLowerCase() == 'sf' || $('input:text').val().trim().toLowerCase() == 'san fran' || $('input:text').val().trim().toLowerCase() == 'san franciscio') {
		setValueInHTML();
		$('body').addClass('sf');
		console.log('sf works.');
	} else { //tells user they did not enter a valid city name
		$('input:text').css({
			'background-color':'white',
			'color':'gray',
			'font-size': '24px'
		});
		$('input:text').val('Oops! Please check your entry and try again.')
		console.log('invalid entry.')
	};
	event.preventDefault(); //prevents form submission
});


}); // close .ready function
