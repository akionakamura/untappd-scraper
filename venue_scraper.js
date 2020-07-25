// Run this first. It should load the rest of the venues.
$('.more_venues.track-click').click()

// Read all venues.
var venues = [];
$('.venue-item').each(function(i, venue) {
    venues[i] = {};
    var venueDetails = $(venue).find('.venue-details');
    var details = $(venue).find('.details');
    venues[i].name = venueDetails.find('.name').text();
    venues[i].category = venueDetails.find('.category').text();
    venues[i].address = venueDetails.find('.address').text();
})

// Prints in the console all venues in JSON format. Copy and save the result in a text or json file.
console.log(JSON.stringify(venues));

