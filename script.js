$("#search").on("click", function(){

    var searchInput = $("#search-input").val();
    var startYear = $("#start-year").val().trim();
    var endYear = $("#end-year").val().trim();

    var article = $(this).attr("data-article");
    var queryURl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchInput + "&facet_fields=source&facet=true&begin_date=" + startYear + "101&end_date="+ endYear + "1231 &api-key=3qn4UShz1YWLleK5Fjkwg1Xto7oLJG7V"

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        for (var i = 0; i < 6; i++){

        
        }
       



        var snippet = (response.response.docs[i].snippet);
        var lead = (response.response.docs[i].lead_paragraph);
        var picture = (response.response.docs.multimedia[i]);

        console.log(response.response.docs[i].snippet);
        console.log(response.response.docs[i].lead_paragraph);
        console.log(response.response.docs.multimedia[i]);


        


      })
    })
    // user input, document

// var Number of records

// var Start Year
// var End Year


// function displayMovieInfo() {
//     var movie = $(this).attr("data-name");
//     var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
//     // Creating an AJAX call for the specific movie button being clicked
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function (response) {
//       // Creating a div to hold the movie
//       var movieDiv = $("<div class='movie'>");
//       console.log(response);
//       // Storing the rating data
//       var rating = response.Rated;
//       // Creating an element to have the rating displayed
//       var pOne = $("<p>").text("Rating: " + rating);
//       $("#movies-view").empty();
//       // Displaying the rating
//       movieDiv.append(pOne);
//       // Storing the release year
//       var released = response.Released;
//       // Creating an element to hold the release year
//       var pTwo = $("<p>").text("Released: " + released);
//       // Displaying the release year
//       movieDiv.append(pTwo);
//       // Storing the plot
//       var plot = response.Plot;
//       // Creating an element to hold the plot
//       var pThree = $("<p>").text("Plot: " + plot);
//       // Appending the plot
//       movieDiv.append(pThree);
//       // Retrieving the URL for the image
//       var imgURL = response.Poster;
//       // Creating an element to hold the image
//       var image = $("<img>").attr("src", imgURL);
//       // Appending the image
//       movieDiv.append(image);
//       $("#movies-view").empty();
//       // Putting the entire movie above the previous movies
//       $("#movies-view").prepend(movieDiv);
//     });
//   }
// Collapse



// Message Input


// Message Kyle Squarcia