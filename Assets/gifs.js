function displayTopicInfo() {
    var topics = $(this).attr("data-topic")

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=buInTtB1bpXKiS2U2tr5ndPo9rVGLJE9&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        $("#topic-view").text(JSON.stringify(response));
    });

};

var topic = ["Supercross", "Soccer", "Basketball", "Football", "Hockey", "Tennis", "BMX", "Skate Boarding", "Motocross", "Nascar", "Cricket"];
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



// $("#add-topic").on("click", function(event){
//     event.preventDefault();
//     var topics = $("#topic-input").val().trim();
//     topic.push(topics);
//     console.log(topic)
//     $("#topic-input").val('');
//     renderBtns();
// });

$(document).on("click",".topic-button", displayTopicInfo);

renderBtns();

