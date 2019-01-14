var topic = ["Supercross", "Soccer", "Basketball", "Football", "Hockey", "Tennis", "BMX", "Skate Boarding", "Motocross", "Nascar", "Cricket"];
var still;
var rating;
var gifPlay;

function displayTopicInfo() {

    var topics = $(this).attr("data-topic")



    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=buInTtB1bpXKiS2U2tr5ndPo9rVGLJE9&limit=10";
    console.log(topics);
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {

        for (var i = 0; response.data.length; i++) {
            still = response.data[i].images.downsized_still.url;
            rating = response.data[i].rating;
            gifPlay = response.data[i].images.original.url;
            $("#gifDisplay").append("<figure><img class = 'stillGif' id='playGif' src=" + still + "animated=" + gifPlay + "stillImage=" + still + "imageState ='notPlaying' height='200' width='300'></img></figure>");

        };

    });

};

// renter buttons works
function renderBtns() {

    $("#buttons").empty();

    for (var i = 0; i < topic.length; i++) {

        var topicBtn = $("<button>");
        topicBtn.addClass("topic-button topic topic-button-color")
        topicBtn.attr("data-topic", topic[i]);
        topicBtn.text(topic[i]);
        $("#buttons").append(topicBtn);
    };
};

// looks to be able to click through buttons and send to ajax
$(".topic-button").on("click"), function () {
    var topicPush = $("<div>");
    topicPush.addClass("letter topic-color");
    topicPush.text($(this).attr("data-topic"));
    $("#display").append(topicPush);
    console.log(topicPush);
};


// add a button throuch search
$("#addInput").on("click", function (event) {
    event.preventDefault();
    var topics = $("#topic-input").val().trim();
    topic.push(topics);
    $("#topic-input").val('');
    renderBtns();
});

// pause play images
$(document).on("click", ".topic-button", displayTopicInfo);
$(document).on("click", ".stillGif", function () {

    var state = $(this).attr("imageState");

    if (state === "notPlaying") {
        $(this).attr("src", $(this).attr("animated"));
        $(this).attr("imageState", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("imageState", "notPlaying");
    }
});



renderBtns();






// new bs

var topic = ["Supercross", "Soccer", "Basketball", "Football", "Hockey", "Tennis", "BMX", "Skate Boarding", "Motocross", "Nascar", "Cricket"];

function renderButtons() {

    $("buttons-view").empty();

    for (var i = 0; i < topic.length; i++) {
        var topicBtn = $("<button>");
        topicBtn.addClass("topics");
        topicBtn.attr("data-name")
        topicBtn.text(topic[i]);
        $("#buttons-view").append(topicBtn);
    };
};
$("#add-topic").on("click", function (event) {
    event.preventDefault();

    var topics = $("#topic-input").val().trim();
    topics.push(topic);
    $("#topic-input").val('');
    renderButtons();
})

renderButtons();


// dereks stuff
var
    loadGifs = ["Bugs Bunny",
        "Daffy Duck", "Elmer Fudd",
        "Yosemite Sam", "Tweety Bird",
        "Foghorn Leghorn",
        "Sylvester the cat"];



// when the page loads the "more gifs" button is hidden

$(document).ready(function () {

    $(".addGifs").hide();

});



// for loop that creates a button for the cartoon characters in the loadGifs array

function
    makeButtons() {

    $("#buttons").empty();

    for (var
        i =
            0; i <
        loadGifs.length;
        i++) {

        var
            gifBtn = $("<button>");

        gifBtn.addClass("gifButton");

        gifBtn.addClass("btn btn-success");

        gifBtn.attr("toonName",
            loadGifs[i]);

        $(gifBtn).text(loadGifs[i]);

        $("#buttons").append(gifBtn);

    };

};

// function for adding new buttons to the button list research prevent default

var
    userInput;

$(".submitButton").click(function (event) {

    event.preventDefault();

    userInput =
        $("#toonInput").val().trim();

    console.log(userInput);

    if (userInput !=
        "") {

        loadGifs.push(userInput);

    };

    console.log(loadGifs);

    makeButtons();

    $("#toonInput").val('');

});



makeButtons();



// variable for holding the limit of the query

var
    limit = 10;

// variable for storing "this"

var
    toon;

// variable that represents the giphy query search and images

var
    searchObject;

var
    gifStill;

var
    gifPlaying;

var
    rating;

var
    still;

// varaible for the gif being played or not

var
    playingGif = false;

// funciton for creating a query based on the button clicked

$(document).on('click',
    '.gifButton',
    function () {

        $(".addGifs").show();

        $("#gifs").empty();

        $("#gifsTwo").empty();

        limit =
            10;

        toon =
            $(this).attr("toonName");

        $(".addGifs").attr("toonName",
            toon)

        var
            giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" +
                toon +
                "&api_key=fk15UAOOrgq9oDZfXGgEc9XPVbDuh715&limit=" +
                limit + "";

        console.log(toon);

        $.ajax({

            url:
                giphyUrl,

            method:
                "GET"

        }).then(function (response) {

            console.log(response);

            // for loop that goes through the data array and displays the images recieved from the query

            for (var
                i =
                    0; i <
                response.data.length;
                i++) {

                // create a variable that will hold the url of the desired image

                still =
                    response.data[i].images.downsized_still.url;

                // variable that will hold the ratings 

                rating =
                    response.data[i].rating

                // variable that holds the url of animated gif

                gifPlaying =
                    response.data[i].images.original.url

                // add the still images to the html

                if (i <=
                    4) {

                    $("#gifs").append("<figure><img class='stillGif' id='playGif' src= " +
                        still +
                        " animated=" + gifPlaying +
                        " stillImage=" + still +
                        " imageState='notPlaying' height='200' width='300'><figcaption>Rating: " +
                        rating +
                        "</figcaption></figure>");

                } else {

                    $("#gifsTwo").append("<figure><img class='stillGif' id='playGif' src= " +
                        still +
                        " animated=" + gifPlaying +
                        " stillImage=" + still +
                        " imageState='notPlaying' height='200' width='300'><figcaption>Rating: " +
                        rating +
                        "</figcaption></figure>");

                };

            };

        });

    });



// function for adding more gifs to the page

$(".addGifs").click(function () {

    limit +=10

    console.log(limit)

    toon = $(this).attr("toonName");

    var
        giphyUrl = "https://api.giphy.com/v1/gifs/search?q=" +
            toon +
            "&api_key=fk15UAOOrgq9oDZfXGgEc9XPVbDuh715&limit=" +
            limit + "";

    console.log(toon);

    $.ajax({

        url:
            giphyUrl,

        method:
            "GET"

    }).then(function (response) {

        console.log(response)

        for (var
            i =
                0; i <
            response.data.length;
            i++) {

            // create a variable that will hold the url of the desired image

            still = response.data[i].images.downsized_still.url;

            // variable that will hold the ratings 

            rating = response.data[i].rating

            // variable that holds the url of animated gif

            gifPlaying = response.data[i].images.original.url

            // add the still images to the html

            if (i > (limit - 11) &&i < (limit - 5)) {

                $("#gifs").append("<figure><img class='stillGif' id='playGif' src= " +
                    still +
                    " animated=" + gifPlaying +
                    " stillImage=" + still +
                    " imageState='notPlaying' height='200' width='300'><figcaption>Rating: " +
                    rating +
                    "</figcaption></figure>");

            } else
                if (i > (limit -
                    6)) {

                    $("#gifsTwo").append("<figure><img class='stillGif' id='playGif' src= " +
                        still +
                        " animated=" + gifPlaying +
                        " stillImage=" + still +
                        " imageState='notPlaying' height='200' width='300'><figcaption>Rating: " +
                        rating +
                        "</figcaption></figure>");

                };

        };

    });

});



$(document).on('click',
    '.stillGif',
    function () {

        state =
            $(this).attr("imageState")

        imageSrc =
            $(this).attr("src");

        animeGifUrl =
            $(this).attr("animated");

        stillUrl =
            $(this).attr("stillImage");

        if (state ==="notPlaying") {

            $(this).attr("src",animeGifUrl);

            $(this).attr("imageState", "playing")

        } else
            if (state ==="playing") {

                $(this).attr("src",stillUrl);

                $(this).attr("imageState","notPlaying");

            };

    });
