const DAG = require('../src/dag');
const Transaction = require('../src/transaction');

test('add and validate transaction', () => {
    const dag = new DAG();
    const transaction = new Transaction('Alice', 'Bob', 50);
    dag.addTransaction(transaction);
    expect(dag.transactions).toContain(transaction);
});
