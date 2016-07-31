
$('document').ready(function() {

var city = $('input:text').val(); //defines var city to store user input
function setValueInHTML () {
	$("input:text").css({
    		"background-color":'white',
    		"color":'#111',
    	});
	$("body").removeClass('nyc');
	$("body").removeClass('austin');
	$("body").removeClass('sf');
	$("body").removeClass('la');
	$("body").removeClass('sydney');
	$("input:text").val('');
	$("input:text").attr('placeholder','Enter another city...');
};


$('#submit-btn').click(function(){ //conditional statements to change background img upon submit
	if ($('input:text').val().trim().toLowerCase() === 'nyc' || $('input:text').val().trim().toLowerCase() === 'new york city' || $('input:text').val().trim().toLowerCase() === 'new york') {
		$("body").removeClass("nyc");
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