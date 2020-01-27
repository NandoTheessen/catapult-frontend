# Catapult tech test

## Installation and running

All you need is `yarn && yarn start` to get the environment running. We recommend using node version 12+.

To see the application running visit http://localhost:8080
The API is served from http://localhost:3001, please visit this page to see the structure of returned data.

## Contents

This app loads data about upcoming shifts from the server and displays these data in a list. Server is implemented using fake [json server](https://github.com/typicode/json-server).

## Project Structure

The app is built in react. The main component `App` renders `ShiftsContainer` which then loads and displays the data. We're trying to follow smart container - dumb component approach, so that containers fetching the data do the minimum (or better zero) amount of presentation.

**Directory structure `./src`:**

`./actions` - files with dispatched actions for our store

`./features` - separate pieces of application

`./lib` - used for reusable code, e.g. api requests

`./reducers` - reducers for our redux store

### State management and side effects

We are using redux for storing the data fetched from the server. For dispatching actions we're using simple action files `.src/actions/...`. However we're not opposed to using simple component state when working on one of our tasks.

### Side effects

Side effects, in this case only api calls, are handled with [redux promise middleware](https://github.com/pburtchaell/redux-promise-middleware), for an example see `.src/reducers/shiftsReducer.js`.

### Api calls

For api calls we're using axios library. `.src/lib/requests/webapi.js` contains 2 api calls that we are / will be using.

## Your approach

Do not take our setup of the application as something you have to follow, feel free to restructure, refactor or change any of the approaches that we're using. We're always happy to see a different path that we can take and you know how to reason about it.

