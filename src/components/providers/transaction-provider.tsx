"use client";

import { Transaction } from "@/types/transaction";
import {
  ReactNode,
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

interface ContextData {
  transactions: Transaction[];

  totalIncomes: number;
  totalOutcomes: number;

  handleCreateTransaction(
    title: string,
    amount: number,
    transactionType: "income" | "outcome",
    date: Date,
    category: string
  ): void;

  handleDeleteTransaction(id: string): void;
  calcSummary(): void;
}

export const Context = createContext({} as ContextData);

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const savedTransactions = localStorage.getItem("transactions");

    if (savedTransactions) {
      return JSON.parse(savedTransactions);
    } else {
      return [];
    }
  });

  const [totalIncomes, setTotalIncomes] = useState<number>(0);
  const [totalOutcomes, setTotalOutcomes] = useState<number>(0);

  useEffect(() => {
    const incomesTransactions = transactions.filter(
      (transaction) => transaction.transactionType === "income"
    );

    const outcomesTransactions = transactions.filter(
      (transaction) => transaction.transactionType === "outcome"
    );

    const sumOfIncomes = incomesTransactions.reduce(
      (acc, t) => acc + t.amount,
      0
    );
    const sumOfOutcomes = outcomesTransactions.reduce(
      (acc, t) => acc + t.amount,
      0
    );

    setTotalIncomes(sumOfIncomes);
    setTotalOutcomes(sumOfOutcomes);
  });

  function calcSummary() {
    setTotalIncomes(
      transactions
        .filter((transaction) => transaction.transactionType === "income")
        .reduce((acc, transaction) => {
          return acc + transaction.amount;
        }, 0)
    );

    setTotalOutcomes(
      transactions
        .filter((transaction) => transaction.transactionType === "outcome")
        .reduce((acc, transaction) => {
          return acc + transaction.amount;
        }, 0)
    );
  }

  function handleCreateTransaction(
    title: string,
    amount: number,
    transactionType: "income" | "outcome",
    date: Date,
    category: string
  ) {
    const newTransaction = {
      id: crypto.randomUUID(),
      title,
      amount,
      transactionType,
      date,
      category,
    };

    const newTransactionArray = [newTransaction, ...transactions];
    localStorage.setItem("transactions", JSON.stringify(newTransactionArray));
    setTransactions(newTransactionArray);
  }

  function handleDeleteTransaction(id: string) {
    const newTransactionArray = transactions.filter(
      (transaction) => transaction.id !== id
    );
    localStorage.setItem("transactions", JSON.stringify(newTransactionArray));
    setTransactions(newTransactionArray);
  }

  return (
    <Context.Provider
      value={{
        handleCreateTransaction,
        handleDeleteTransaction,
        transactions,
        calcSummary,
        totalIncomes,
        totalOutcomes,
      }}
    >
      {children}
    </Context.Provider>
  );
}
