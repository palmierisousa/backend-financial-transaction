import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    let balance: Balance = {
      income: 0,
      outcome: 0,
      total: 0,
    };

    balance = this.transactions.reduce((previousBalance, transaction) => {
      const income =
        transaction.type === 'income'
          ? previousBalance.income + transaction.value
          : previousBalance.income;

      const outcome =
        transaction.type === 'outcome'
          ? previousBalance.outcome + transaction.value
          : previousBalance.outcome;

      return {
        income,
        outcome,
        total: income - outcome,
      };
    }, balance);

    return balance;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
