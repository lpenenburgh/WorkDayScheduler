# Work-Day-Scheduler


## Description
My goal for this project was to create a simple hourly scheduler for the work day that is powered by jQuery and Moment.js.

## Usage
 Each time the user opens the daily planner, each time block is color coded depending one what time of the day it currently is so they can easily see what tasks are in the future vs the past. The app knows what time of day it is because of the use of moment.js functions. When a text block is grey, that means that time block has passed. Otherwise the time blocks will either be red, to represent the current hour, or green, to represent a future hour. Each time block is given a text area in which a user can enter a task they need to complete that day. Once the user clicks the save buttons next to each text area, the text that they entered is saved to local storage. If a user refreshes the page, the text they entered previously remains on the page- due to it being stored and rendered from local storage.


 <img src="https://i.imgur.com/y5qA1IN.png" width="600">
 <br>
 <img src="https://i.imgur.com/IoJtaDD.png" width="600">

 ### Credits
 <a href="https://momentjs.com">Moment.js</a>

 ### Deployed Application
 https://lpenenburgh.github.io/WorkDayScheduler/
