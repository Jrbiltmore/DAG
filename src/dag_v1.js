const crypto = require('crypto');

class Transaction {
    constructor(from, to, amount) {
        this.id = crypto.randomBytes(16).toString('hex');
        this.from = from;
        this.to = to;
        this.amount = amount;
        this.timestamp = Date.now();
        this.approvedBy = [];
    }
}

class DAG {
    constructor() {
        this.transactions = [];
    }

    addTransaction(transaction) {
        if (this.validateTransaction(transaction)) {
            this.transactions.push(transaction);
            return true;
        }
        return false;
    }

    validateTransaction(transaction) {
        // Basic validation for demo purposes
        return transaction.from && transaction.to && transaction.amount > 0;
    }

    approveTransaction(transactionId, approverId) {
        const transaction = this.transactions.find(tx => tx.id === transactionId);
        if (transaction) {
            transaction.approvedBy.push(approverId);
            return true;
        }
        return false;
    }

    getTransaction(transactionId) {
        return this.transactions.find(tx => tx.id === transactionId);
    }

    getAllTransactions() {
        return this.transactions;
    }
}

module.exports = { DAG, Transaction };
