# Tic-Tac-Toe Game

## Dependencies

This project has only bee tested with the following:

* Nodejs v6.9.*
* Latest version of Chrome

## Quick start

```shell
npm install
npm start
```

This will install all the dependencies, start up the server, and launch the application in your browser.

## More detailed summary

This project is composed of three main parts:

* Backend API (/backend): A simple Node.js server that exposes a basic API fro playing tic-tac-toe against an AI while enforcing the game rules.
* Frontend application (client): An application using React that consumes the backend API and presents a tic-tac-toe board that can be interacted with.
* End-to-End tests (e2e-tests): A very small test suite using Nightwatch.js to test the combination of the Backend and Frontend as one application with a real browser.

## Running tests

### Backend server tests

The backend tests are composed of unit tests, and tests that run against the backend API.

```shell
cd backend
npm test
```

### End-to-End tests

These tests run the application in your browser (only chrome is supported). Remember the application must be already be started before running these tests.

```shell
npm start
cd e2e-tests
npm test
```
