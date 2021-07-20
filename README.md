# Work-Day-Scheduler


## Description
My goal for this project was to create a simple hourly scheduler for the work day that is powered by jQuery and Moment.js.

## Usage
 Each time the user opens the daily planner, each time block is color coded depending one what time of the day it currently is so they can easily see what tasks are in the future vs the past. The app knows what time of day it is because of the use of moment.js functions. When a text block is grey, that means that time block has passed. Otherwise the time blocks will either be red, to represent the current hour, or green, to represent a future hour. Each time block is given a text area in which a user can enter a task they need to complete that day. Once the user clicks the save buttons next to each text area, the text that they entered is saved to local storage. If a user refreshes the page, the text they entered previously remains on the page- due to it being stored and rendered from local storage.

 <br>
 <img src="https://i.imgur.com/7bdIgQv.png" width="600">
 <br>
 

 ## Deployed Application
 https://lpenenburgh.github.io/WorkDayScheduler/

 ## Technologies Used
 <a href="https://api.jquery.com/">jQuery</a>
 <br>
 <a href="https://momentjs.com">Moment.js</a>
 <br>
 <a href="https://getbootstrap.com/">Bootstrap</a>
 <br>
 <a href="https://fontawesome.com/start">Font Awesome</a>
 <br>
 <a href="https://fonts.google.com/">Google Fonts</a>

## Collaborators 
Lauren Penenburgh
<a href="https://github.com/lpenenburgh">Github</a>
<a href="https://lpenenburgh.github.io/responsive-portfolio/">Portfolio</a>
<a href="https://www.linkedin.com/in/lauren-penenburgh-00852a99/">LinkedIn</a>


## License
MIT License

Copyright (c) [2021] [Lauren Penenburgh]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.