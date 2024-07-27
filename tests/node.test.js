const Node = require('../src/node');
const Transaction = require('../src/transaction');

test('validate and add transaction to node', () => {
    const node = new Node('node1');
    const transaction = new Transaction('Alice', 'Bob', 50);
    node.validateAndAddTransaction(transaction);
    expect(node.transactions).toContain(transaction);
});
