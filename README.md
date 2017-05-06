# Untappd Scraper
A few scripts to scraper Untappd pages. Things are pretty manual for now, but should improve as needed. For now, the only script avaible is one to scraper a ginva user list of checked-in beers.

Go to the user you want to scrape page:

    https://untappd.com/user/username/beers

Open the browser console, [here are a few instruction](https://webmasters.stackexchange.com/questions/8525/how-do-i-open-the-javascript-console-in-different-browsers) if you don't know how to do it.

Run the following command until all beers are loaded

```javascript
    $('.more_beers.track-click').click()
```

Then run:

```javascript
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
```

The beers JSON should be printed in the console. Copy it and have fun analyzing it :)
