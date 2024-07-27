const Network = require('../src/network');
const Node = require('../src/node');
const Transaction = require('../src/transaction');

test('broadcast transaction in network', () => {
    const network = new Network();
    const node1 = new Node('node1');
    const node2 = new Node('node2');
    network.addNode(node1);
    network.addNode(node2);
    const transaction = new Transaction('Alice', 'Bob', 50);
    network.broadcastTransaction(transaction);
    // Add assertions to check transaction broadcast
});
