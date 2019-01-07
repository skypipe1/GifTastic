//makes list of the srings in the array and prints to console. cant fiusre out why it wont print to html.

// function list(){

//     var topic = ["Supercross", "Soccer", "Basketball", "Football", "Hockey","Tennis", "BMX", "Skate Boarding", "Motocross", "Nascar", "Cricket"];

//     var topicContainer = document.createElement('div');

//     document.getElementsByTagName('body')[0].appendChild(topicContainer);

//     var listElement = document.createElement('ul');

//     var numberOfListItems = topic.length;

//     for (var i = 0; i < numberOfListItems; i++){
//     var listItem = document.createElement('li');
//     listItem.innerHTML = topic[i];
//     listElement.appendChild(listItem);
//     console.log(listItem);
//     };

// }

// list();


// create a variable with multiple strings in an array
var topic = ["Supercross", "Soccer", "Basketball", "Football", "Hockey","Tennis", "BMX", "Skate Boarding", "Motocross", "Nascar", "Cricket"];

// create a function that prints out a list of buttons to the HTML
function printBtn(){
    for (var i = 0; i < topic.length; i++) {
        var btn =document.createElement("button");
        var t = document.createTextNode(topic[i]);
        btn.appendChild(t);
        document.body.appendChild(btn);
    };
};

// api key

