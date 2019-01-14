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
            $("#gifDisplay").append("<figure><img class = 'stillGif' id='playGif' src="+still+"animated="+gifPlay+"stillImage="+still+"imageState ='notPlaying' height='200' width='300'></img></figure>");

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
$(".topic-button").on("click"), function(){
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
$(document).on("click", ".stillGif",function() {
   
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

    for (var i = 0; i < topic.length; i++){
        var topicBtn = $("<button>");
        topicBtn.addClass("topics");
        topicBtn.attr("data-name")
        topicBtn.text(topic[i]);
        $("#buttons-view").append(topicBtn);
    };
};
$("#add-topic").on("click", function(event){
    event.preventDefault();

    var topics = $("#topic-input").val().trim();
    topics.push(topic);
    $("#topic-input").val('');
    renderButtons();
})

renderButtons();