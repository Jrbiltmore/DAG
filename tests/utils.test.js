const { generateId } = require('../src/utils');

test('generate unique id', () => {
    const id = generateId();
    expect(id).toHaveLength(32);
});
