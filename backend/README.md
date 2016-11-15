# Tic-Tac-Toe server with a simple AI

## Dependencies

This project has only bee tested with the following:

* Nodejs v6.9.*

## Quick start

This is really part of a bigger project which includes a UI written with React. However if you inclined to just run this backend server standalone you can do the following:

```shell
npm install
npm start
```

This will install all the dependencies, and start up the server. You can create a new game with the following HTTP request:

```shell
curl --data '' http://localhost:3001/api/game
```

This will give the following JSON response:

```json
{
   "id":"88c9aee6-1e11-4342-932f-f59039c76180",
   "tiles":[
      {
         "id":1
      },
      {
         "id":2
      },
...
      {
         "id":9
      }
   ]
}
```

To make a move, for example in the top right corner:

```shell
curl -H 'Content-Type: application/json' --data '{"tileId":3}' http://localhost:3001/api/game/88c9aee6-1e11-4342-932f-f59039c76180
```

Note, you will always be player X, and the AI will be player O. The above will return the following response:

```json
{
  "id": "88c9aee6-1e11-4342-932f-f59039c76180",
  "tiles": [
    {
      "id": 1
    },
    {
      "id": 2
    },
    {
      "id": 3,
      "value": "X"
    },
    {
      "id": 4,
      "value": "O"
    },
...
  ],
  "winner": null
}
```

This shows that the AI played the middle row left tile. The winner property will be populated with either "X" or "O" once either yourself or the AI has made a winning move. If there are no more tiles available and winner is still null, then it can be assumed the game has ended with a draw.

## More detailed summary

This server is composed of a single express application responsible for handling incoming HTTP requests, and the following key modules:

* lib/game.js: enforces the game rules and keep track which moves have already been made.
* lib/ai.js: A really poor AI that will just make random moves. It will play whichever player has the next move for the game it is provided.
* lib/store.js: A poor implementation of a memory store, whose only role in this project is to maintain persistence between each HTTP request. It is imagined this would be replaced with some other type of storage in real life.

## Running tests

The backend tests are composed of the following:

* /tests/lib/*: Unit tests or the key modules.
* /tests/routes/*: HTTP tests run against the server (using supertest).

```shell
cd backend
npm test
```
