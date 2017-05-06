// Run this until everything is loaded.
// TODO Find out a way to do this automatically.
$('.more_beers.track-click').click()

// Read all beers.
var beers = [];
$('.beer-item').each(function(i, beer) {
	beers[i] = {};
	var beerDetails = $(beer).find('.beer-details');
	var details = $(beer).find('.details');
	beers[i].name = beerDetails.find('.name').text();
	beers[i].brewery = beerDetails.find('.brewery').text();
	beers[i].style = beerDetails.find('.style').text();
	beers[i].myScore = parseFloat(beerDetails.find('.ratings').find('.you p').html().replace("Your Rating (", "").replace(")", ""));
	beers[i].globalScore = parseFloat(beerDetails.find('.ratings').find('.you p').last().html().replace("Global Rating (", "").replace(")", ""));
	beers[i].abv = parseFloat(details.find('.abv').html().trim().replace("% ABV", ""));
	beers[i].ibu = parseFloat(details.find('.ibu').html().trim().replace(" IBU", ""));
	// TODO Images are loaded lazily, find out a way to get the proper URL of all images.
})

// Prints in the console all beers in JSON format. Save the result in a text file.
console.log(JSON.stringify(beers));
