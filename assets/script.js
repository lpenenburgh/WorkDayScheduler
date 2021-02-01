


//current date will display in the jumbotron, under the header
var currentDay = $("#currentDay");

$(currentDay).text(moment().format('MMMM Do YYYY, h:mm a'));


// variables for time blocks
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


// function to save user input to local storage

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
        text6Input: $.trim($("#sixtext").val()),
    }

    window.localStorage.setItem("events", JSON.stringify(userInput));
    console.log(userInput);
}

//function to show user input on the page after its been locally stored. Stays there when page refreshed.


function renderUserInput() {
    var lastInput = JSON.parse(window.localStorage.getItem("events"));
    
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
    }
}

//buttons from html
var saveButton = $("button");

//event listener for save buttons. When clicked it will save user input to local storage.
saveButton.click(saveUserInput);
// displays what was in local storage to display on the page
renderUserInput();











