const Transaction = require('../src/transaction');

test('create transaction', () => {
    const transaction = new Transaction('Alice', 'Bob', 50);
    expect(transaction.from).toBe('Alice');
    expect(transaction.to).toBe('Bob');
    expect(transaction.amount).toBe(50);
    expect(transaction.timestamp).toBeDefined();
});
