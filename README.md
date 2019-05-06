# Zen-tasks
This project is a small single-page application which can be used for tracking fulfilment of repeated **Daily Tasks** as well as individual one-off **ToDos**. It provides a visual feedback on how well you do and this way it enforces the positive habits.

The "zen" signifies that the application tries to help organize everyday's activities but at the same time it should as simple as possible.

The basic purpose of this app is based on the method from the book The End of Procrastination by Peter Ludwig.

## Usage
If you do not want to customize the Daily Tasks,  simply download the `public` folder and place its contents to the root directory of your system (e.g. C:\\), then you can create a shortcut to `index.html` and run it from anywhere. *Yes, I know this is not a perferct solution, hopefully I will fix this in future*

### ToDos
Click on the plus to add a new ToDo, then click on checkmark when it is done, that's all. The text of ToDo can be edited after it is created.

### Daily Tasks
By default, there are three Daily Tasks wich I use: **Time, Body, Mind**.
 - Time - the effective use of time throughout day (no hangig around, playing games or watching TV series all day)
 - Body - do something for your body (excercise, eat healthy)
 - Mind - do something for your mind (educate yourself, read)

If you want o use your own Daily Tasks, you have to edit the value of `taskNames` in `src/js/constants.js` and build the aplication again using `npm run build`.

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
