


//variables
var currentDay = document.getElementById("currentDay"); 



//current date will display in the jumbotron, under the header

$(currentDay).text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//Depending on the time of the day; the hour blocks will change color
var text9 = document.getElementById("9am-text");
var text10 = document.getElementById("10am-text");
var text11 = document.getElementById("11am-text");
var text12 = document.getElementById("12pm-text");
var text1 = document.getElementById("1pm-text");
var text2 = document.getElementById("2pm-text");
var text3 = document.getElementById("3pm-text");
var text4 = document.getElementById("4pm-text");
var text5 = document.getElementById("5pm-text");
var text6 = document.getElementById("6pm-text");

function colorCode () {
    var currentTime = moment().format('hh:mm:ss a');
    //console.log(currentTime);

    if (currentTime < '09:00am') {
        text9.classList.add("future");    
    } else if (currentTime > '09:00am' && currentTime < '10:00am') {
        text9.classList.add("present");
    } else {
        text9.classList.add("past");
    }

    if (currentTime < '10:00am') {
        text10.classList.add("future");    
    } else if (currentTime > '10:00am' && currentTime < '11:00am') {
        text10.classList.add("present");
    } else {
        text10.classList.add("past");
    }

    if (currentTime < '11:00am') {
        text11.classList.add("future");    
    } else if (currentTime > '11:00am' && currentTime < '12:00pm') {
        text11.classList.add("present");
    } else {
        text11.classList.add("past");
    }

    if (currentTime < '12:00pm') {
        text12.classList.add("future");    
    } else if (currentTime > '12:00pm' && currentTime < '01:00pm') {
        text12.classList.add("present");
    } else {
        text12.classList.add("past");
    }

    if (currentTime < '01:00pm') {
        text1.classList.add("future");    
    } else if (currentTime > '01:00pm' && currentTime < '02:00pm') {
        text1.classList.add("present");
    } else {
        text1.classList.add("past");
    }

    if (currentTime < '02:00pm') {
        text2.classList.add("future");    
    } else if (currentTime > '02:00pm' && currentTime < '03:00pm') {
        text2.classList.add("present");
    } else {
        text2.classList.add("past");
    }

    if (currentTime < '03:00pm') {
        text3.classList.add("future");    
    } else if (currentTime > '03:00pm' && currentTime < '04:00pm') {
        text3.classList.add("present");
    } else {
        text3.classList.add("past");
    }

    if (currentTime < '04:00pm') {
        text4.classList.add("future");    
    } else if (currentTime > '04:00pm' && currentTime < '05:00pm') {
        text4.classList.add("present");
    } else {
        text4.classList.add("past");
    }

    if (currentTime < '05:00pm') {
        text5.classList.add("future");    
    } else if (currentTime > '05:00pm' && currentTime < '06:00pm') {
        text5.classList.add("present");
    } else {
        text5.classList.add("past");
    }

    if (currentTime < '06:00pm') {
        text6.classList.add("future");    
    } else if (currentTime > '06:00pm' && currentTime < '07:00pm') {
        text6.classList.add("present");
    } else {
        text6.classList.add("past");
    } 

};

//run color code function
colorCode();


var btn9 = document.querySelector("#save-button9");
var btn10 = document.querySelectorAll("#save-button10");
var btn11 = document.querySelectorAll("#save-button11");
var btn12 = document.querySelectorAll("#save-button12");
var btn1 = document.querySelectorAll("#save-button1");
var btn2 = document.querySelectorAll("#save-button2");
var btn3 = document.querySelectorAll("#save-button3");
var btn4 = document.querySelectorAll("#save-button4");
var btn5 = document.querySelectorAll("#save-button5");
var btn6 = document.querySelectorAll("#save-button6");

//time blocks are color coded depending on what hour in the day it is currently

//save button works as an event listener- when it is clicked, the info put in the input area is saved to local storage

//when the page is refreshed, it pulls the input area info from local storage and saved on the page








