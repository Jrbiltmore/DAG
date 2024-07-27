const Consensus = require('../src/consensus');
const Transaction = require('../src/transaction');

test('validate transactions with consensus', () => {
    const consensus = new Consensus();
    const transactions = [
        new Transaction('Alice', 'Bob', 50),
        new Transaction('Charlie', 'Dave', 75)
    ];
    consensus.validateTransactions(transactions);
    // Add assertions for validation logic
});
