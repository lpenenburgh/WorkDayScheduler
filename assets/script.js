$(document).ready(function() {


//variables
var currentDay = document.getElementById("currentDay"); 



//current date will display in the jumbotron, under the header
$(currentDay).text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// include 14 time blocks (9am-10pm) 
//time blocks incude; the hour, an input area, and a save button

//time blocks are color coded depending on what hour in the day it is currently

//save button works as an event listener- when it is clicked, the info put in the input area is saved to local storage

//when the page is refreshed, it pulls the input area info from local storage and saved on the page






});


