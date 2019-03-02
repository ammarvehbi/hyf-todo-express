const low = require('lowdb');
const nanoid = require('nanoid');
const FileSync = require('lowdb/adapters/FileSync');

// https://github.com/typicode/lowdb
const adapter = new FileSync('db.json');
const db = low(adapter);
const state = {
  todos: [], // { id: nanoid, todo: String, done: Bool }
};

db.defaults(state).write();

const getTodos = () => db.get('todos');
const getTodo = id => getTodos().find({ id });

// read
// get all or one todo by id and return its value
const get = () => getTodos().value();
const getOne = id => getTodo(id).value();

// write
// get todos array, manipulate it, write to db
const add = todo => {};
const update = (id, todo) => {};
const done = (id, done) => {};
const remove = id => {};

module.exports = {
  get,
  getOne,
  add,
  update,
  done,
  remove,
};
