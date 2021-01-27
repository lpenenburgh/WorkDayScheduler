







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


//Depending on the time of the day; the hour blocks will change color
function colorCode () {
    var currentTime = moment().format('hh:mm:ss a');
    console.log(currentTime);

    if (currentTime < '09:00am') {
        text9Input.classList.add("future");    
    } else if (currentTime > '09:00am' && currentTime < '10:00am') {
        text9Input.classList.add("present");
    } else {
        text9Input.classList.add("past");
    }

    if (currentTime < '10:00am') {
        text10Input.classList.add("future");    
    } else if (currentTime > '10:00am' && currentTime < '11:00am') {
        text10Input.classList.add("present");
    } else {
        text10Input.classList.add("past");
    }

    if (currentTime < '11:00am') {
        text11Input.classList.add("future");    
    } else if (currentTime > '11:00am' && currentTime < '12:00pm') {
        text11Input.classList.add("present");
    } else {
        text11Input.classList.add("past");
    }

    if (currentTime < '12:00pm') {
        text12Input.classList.add("future");    
    } else if (currentTime > '12:00pm' && currentTime < '01:00pm') {
        text12Input.classList.add("present");
    } else {
        text12Input.classList.add("past");
    }

    if (currentTime < '01:00pm') {
        text1Input.classList.add("future");    
    } else if (currentTime > '01:00pm' && currentTime < '02:00pm') {
        text1Input.classList.add("present");
    } else {
        text1Input.classList.add("past");
    }

    if (currentTime < '02:00pm') {
        text2Input.classList.add("future");    
    } else if (currentTime > '02:00pm' && currentTime < '03:00pm') {
        text2Input.classList.add("present");
    } else {
        text2Input.classList.add("past");
    }

    if (currentTime < '03:00pm') {
        text3Input.classList.add("future");    
    } else if (currentTime > '03:00pm' && currentTime < '04:00pm') {
        text3Input.classList.add("present");
    } else {
        text3Input.classList.add("past");
    }

    if (currentTime < '04:00pm') {
        text4Input.classList.add("future");    
    } else if (currentTime > '04:00pm' && currentTime < '05:00pm') {
        text4Input.classList.add("present");
    } else {
        text4Input.classList.add("past");
    }

    if (currentTime < '05:00pm') {
        text5Input.classList.add("future");    
    } else if (currentTime > '05:00pm' && currentTime < '06:00pm') {
        text5Input.classList.add("present");
    } else {
        text5Input.classList.add("past");
    }

    if (currentTime < '06:00pm') {
        text6Input.classList.add("future");    
    } else if (currentTime > '06:00pm' && currentTime < '07:00pm') {
        text6Input.classList.add("present");
    } else {
        text6Input.classList.add("past");
    } 

};

//run color code function
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








