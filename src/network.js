class Network {
    constructor() {
        this.nodes = [];
    }

    addNode(node) {
        this.nodes.push(node);
    }

    broadcastTransaction(transaction) {
        // Broadcast transaction to all nodes
    }
}

module.exports = Network;
