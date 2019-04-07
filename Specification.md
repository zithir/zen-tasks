# Buzzer List
A simple app to check if daily tasks have been done. The app will be implemented as a single page application that will store results in cookies, so it will be written in `html + css + JS`

The tasks are defined in `costants.js` file and the app is prepared to renred them dynamically. Basic three tasks are the following: *Time, Body, Mind*. If a new task is added, there are no entries for it in cookies, so it cannot be displayed with results.

Only tasks repeated on the daily basis will be supported. In the future, One-off tasks could be added as well.

The tasks will only have the YES/NO status, and ??? if left undefined

The tasks status can be saved in cookies using the following JS library https://github.com/js-cookie/js-cookie . The format of tasks will be a JS object: `const tasks = { 03-03-2019: {time: True, body: False, mind: True}, 04-03-2019: {time: False, body: True, mind: True}, ...}`.


The app could be rendered and handled by React.

Start with JavaScript and Adopt TypeScript later.
