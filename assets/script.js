


//current date will display in the jumbotron, under the header
var currentDay = $("#currentDay"); 

$(currentDay).text(moment().format('MMMM Do YYYY, h:mm a'));



//textarea variables grabbed
var text9Input = $("#ninetext"); 
var text10Input = $("#tentext");
var text11Input = $("#eleventext");
var text12Input = $("#twelvetext");
var text1Input = $("#onetext");
var text2Input = $("#twotext");
var text3Input = $("#threetext");
var text4Input = $("#fourtext");
var text5Input = $("#fivetext");
var text6Input = $("#sixtext");

var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour1 = $("#13");
var hour2 = $("#14");
var hour3 = $("#15");
var hour4 = $("#16");
var hour5 = $("#17");
var hour6 = $("#18");
var time = moment();



//Depending on the time of the day; the hour blocks will change color
function colorCode() {
    hour = time.hours();
    $(".hour-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future");
        } else if (thisHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
}

colorCode();

function init() {
    renderUserInput();
}


var userInput = {
    text9Input: $.trim($("#ninetext").val()),
    text10Input: $.trim($("#tentext").val()),
    text11Input: $.trim($("#eleventext").val()),
    text12Input: $.trim($("#twelvetext").val()),
    text1Input: $.trim($("#onetext").val()),
    text2Input: $.trim($("#twotext").val()),
    text3Input: $.trim($("#threetext").val()),
    text4Input: $.trim($("#fourtext").val()),
    text5Input: $.trim($("#fivetext").val()),
    text6Input: $.trim($("#sixtext").val())
};

function saveUserInput() {

    var userInput = {
        text9Input: $.trim($("#ninetext").val()),
        text10Input: $.trim($("#tentext").val()),
        text11Input: $.trim($("#eleventext").val()),
        text12Input: $.trim($("#twelvetext").val()),
        text1Input: $.trim($("#onetext").val()),
        text2Input: $.trim($("#twotext").val()),
        text3Input: $.trim($("#threetext").val()),
        text4Input: $.trim($("#fourtext").val()),
        text5Input: $.trim($("#fivetext").val()),
        text6Input: $.trim($("#sixtext").val())
    };


    localStorage.setItem("userInput", JSON.stringify(userInput));
    console.log(userInput);
}

console.log(userInput);

function renderUserInput() {
    var lastInput = JSON.parse(localStorage.getItem("userInput"));
  //  console.log(lastInput);

    if (lastInput !== null) {
        $("#ninetext").html(lastInput.text9Input);
        $("#tentext").html(lastInput.text10Input);
        $("#eleventext").html(lastInput.text11Input);
        $("#twelvetext").html(lastInput.text12Input);
        $("#onetext").html(lastInput.text1Input);
        $("#twotext").html(lastInput.text2Input);
        $("#threetext").html(lastInput.text3Input);
        $("#fourtext").html(lastInput.text4Input);
        $("#fivetext").html(lastInput.text5Input);
        $("#sixtext").html(lastInput.text6Input);
    } else {
        return;
    }
};

//buttons from html
var saveButton = $("#savebutton");


//event listener for save buttons. When clicked it will save user input to local storage, and then get from local storage to render on the page.
$(saveButton).on("click", function(event) {
    event.preventDefault();
    saveUserInput();
    renderUserInput();
});

//Fires when page is loaded, will also render user input on the html
init()








