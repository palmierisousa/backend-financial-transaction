# Financial Transaction Backend
A simple node.js application to control personal transactions. It's possible to create and list transactions. It's one of the challenges that makes part of the Rocketseat bootcamp.

The app was build with Node.js and Express using typescript.

## Running
- Install all the dependencies: `yarn`
- Run in dev mode: `yarn dev:server`
- Run tests: `yarn test`

## Routes

### Create transaction
The transaction is the type of income or outcome. If an outcome exceeds the total cash stored, an error message is returned.

HTTP Method: `post`

Route: `/transactions`

Request body:
```json
{
  "title": "Salary",
  "value": 3000,
  "type": "income"
}

or

{
  "title": "Computer",
  "value": 2000,
  "type": "outcome"
}
```


### List all transactions
HTTP Method: `get`

Route: `/transactions`

Return:
```json
{
  "transactions": [
    {
      "id": "9ad39f00-0ca0-4f50-9e18-089014b2e024",
      "title": "Salary",
      "value": 3000,
      "type": "income"
    },
    {
      "id": "0a896213-7a1e-4884-8509-b7cbda96d36f",
      "title": "Computer",
      "value": 2000,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 3000,
    "outcome": 2000,
    "total": 1000
  }
}
```
