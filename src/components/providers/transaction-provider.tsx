"use client";

import { Transaction } from "@/types/transaction";
import { ReactNode, createContext, useLayoutEffect, useState } from "react";

interface ContextData {
  transactions: Transaction[];
  handleCreateTransaction(
    title: string,
    amount: number,
    transactionType: "income" | "outcome",
    date: Date,
    category: string
  ): void;

  handleDeleteTransaction(id: string): void;
}

export const Context = createContext({} as ContextData);

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const savedTransactions = localStorage.getItem("transactions");
    console.log(savedTransactions);

    if (savedTransactions) {
      return JSON.parse(savedTransactions);
    } else {
      return [];
    }
  });

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

  useLayoutEffect(() => {}, []);

  return (
    <Context.Provider
      value={{
        handleCreateTransaction,
        handleDeleteTransaction,
        transactions,
      }}
    >
      {children}
    </Context.Provider>
  );
}
