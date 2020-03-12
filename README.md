# 05 Third-Party APIs: Work Day Scheduler
## Description
This application takes the Moment.js API and creates a daily planner which dynamically reacts to the true, current date and time.
When starting the application, there are a few aspects which are listening to the Moment.js API factors. 
The first one on the application is the current date. 
It is calling for the Moment.js to create the current date with a specific format ("dddd" + "," + +MMM Do"). This results in the following:
<br>
<img src="./Assets/planner_current-day">
<br>
Moment.js is also used in creating the color coded divs. 
Using the moment().hour() call, I established the classes for each column based on the hour.
It was necessary to parse my IDs into integers - in order to validate my credentials - since the Moment.js also produces the current hour as an integer.
So when the hour is set to 11, the application renders this:
<br>
<img src="./Assets/planner_hour">
<br>
On the purely JavaScript/jQuery side, I created the parameters to set the user's input data into the local storage on a button press.
This means you can create reminders or events in the planner, shut down the page, and come back to it with all your text saved.
<br>
<img src="./Assets/planner_localstorage-set">
<br>
Finally, I created a function which clears all the divs' input value and empties the localstorage when the planner recognize it is a new day.
All the other coding was based around HTML classes and Bootstrap design. It was simply a matter of tweaking it how I wanted it.


##Contributers
Angela Stevenson 

## License
MIT License

Copyright (c) [2020] [DrakeDeMuyt]

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

