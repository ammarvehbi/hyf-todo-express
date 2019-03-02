# Todo App

## Routes

- GET /todos
- GET /todos/ID
- POST /todos `{ todo: "todo item" }`
- PATCH /todos/ID `{ todo: "todo item update" }`
- DELETE /todos/ID
- PATCH /todos/ID/done `{ done: true }`

## Todo structure

```js
{
    todo: "Todo content",
    done: false,
    id: "a unique string"
}
```

### Libraries

[Express](https://expressjs.com/en/4x/api.html)  
[Lowdb](https://github.com/typicode/lowdb)  
[Pug](https://pugjs.org/language/attributes.html)  
[nanoid](https://github.com/ai/nanoid)
