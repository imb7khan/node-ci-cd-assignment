
const app = require('../app');

test('app exports an express instance', () => {
  expect(app).toBeDefined();
  expect(typeof app).toBe('function');
});
