







//current date will display in the jumbotron, under the header
var currentDay = document.getElementById("currentDay"); 

$(currentDay).text(moment().format('MMMM Do YYYY, h:mm:ss a'));



//textarea variables grabbed
var text9Input = document.querySelector("#ninetext"); 
var text10Input = document.querySelector("#tentext");
var text11Input = document.querySelector("#eleventext");
var text12Input = document.querySelector("#twelvetext");
var text1Input = document.querySelector("#onetext");
var text2Input = document.querySelector("#twotext");
var text3Input = document.querySelector("#threetext");
var text4Input = document.querySelector("#fourtext");
var text5Input = document.querySelector("#fivetext");
var text6Input = document.querySelector("#sixtext");

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



function saveUserInput() {
    var userInput = {
        text9Input: text9Input.value.trim(),
        text10Input: text10Input.value.trim(),
        text11Input: text11Input.value.trim(),
        text12Input: text12Input.value.trim(),
        text1Input: text1Input.value.trim(),
        text2Input: text2Input.value.trim(),
        text3Input: text3Input.value.trim(),
        text4Input: text4Input.value.trim(),
        text5Input: text5Input.value.trim(),
        text6Input: text6Input.value.trim()
    };

    localStorage.setItem("userInput", JSON.stringify(userInput));
    console.log(userInput);
}



function renderUserInput() {
    var lastInput = JSON.parse(localStorage.getItem("userInput"));

    if (lastInput !== null) {
        document.getElementById("ninetext").innerHTML = lastInput.text9Input;
        document.getElementById("tentext").innerHTML = lastInput.text10Input;
        document.getElementById("eleventext").innerHTML = lastInput.text11Input;
        document.getElementById("twelvetext").innerHTML = lastInput.text12Input;
        document.getElementById("onetext").innerHTML = lastInput.text1Input;
        document.getElementById("twotext").innerHTML = lastInput.text2Input;
        document.getElementById("threetext").innerHTML = lastInput.text3Input;
        document.getElementById("fourtext").innerHTML = lastInput.text4Input;
        document.getElementById("fivetext").innerHTML = lastInput.text5Input;
        document.getElementById("sixtext").innerHTML = lastInput.text6Input;
    } else {
        return;
    }
};

//buttons from html
var saveButton = document.querySelectorAll("#savebutton");


//event listener for save buttons. When clicked it will save user input to local storage, and then get from local storage to render on the page.
$(saveButton).on("click", function(event) {
    event.preventDefault();
    saveUserInput();
    renderUserInput();
});

//Fires when page is loaded, will also render user input on the html
init()








