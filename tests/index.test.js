// tests/index.test.js
const { addTodo } = require('../src/index');

test('should add a new todo to the list', () => {
  const todos = ['Buy milk'];
  const newTodo = 'Write code';
  const result = addTodo(todos, newTodo);
  expect(result).toEqual(['Buy milk', 'Write code']);
});