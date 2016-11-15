This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Tic-Tac-Toe browser client written using React

## Dependencies

This project has only bee tested with the following:

* Node.js v6.9.*
* Latest version of Chrome

## Running

This is really part of a bigger project which includes a backend server (also written in Node.js). Although a Node.js server is included here for development purposes, it is only designed to be spawned from the parent directory, and will probably fail to start unless the backend server has already been started.

Therefore it is highly recommended to follow the instructions from the root directory of this entire project.

The main reason for keeping this separate is to encompass all the dependencies in one place for building the project, which once built would provide static assets that can be served by a regular web server like nginx or lighttpd.

## More detailed summary

Please bear in mind this is my first ever React application, so this project should not be used as a guide for best practises using React (although I have tried to follow them as best I can). If you are new to React you should consider the following non exhaustive list of resources:

* https://facebook.github.io/react/tutorial/tutorial.html: This also builds a tic-tac-toe game. Unfortunately I managed to overlook this particular tutorial until very late in my implementation, so if you yourself are trying to build this game you may find the tutorial version much better.
* https://facebook.github.io/react/docs/hello-world.html (The Quick start section): The resource I used to get acquainted with React.
* https://www.fullstackreact.com/articles/using-create-react-app-with-a-server/: Useful if your project also involves writing a simple backend service.

This project is composed of four important files:

* App.css: The CSS, its delivers only a few rules to make the game board usable.
* App.js: The main entry point to the Frontend application. This is where the game state is handled and communication to the backend server initiated.
* Client.js: An abstraction of calls to the backend server.
* Game.js: Exposes one React component called "Game", which renders the board and a "restart game" button.

