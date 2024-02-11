"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { toast } from "sonner";

interface Transaction {
  id: string;
  title: string;
  date: Date;
  amount: number;
  category: string;
}

interface ContextData {
  transactions: Transaction[];
  resume: {
    totalIncome: number;
    totalWithdraw: number;
    total: number;
  };
  addTransaction: (transaction: Transaction) => Promise<boolean>;
  removeTransaction: (id: string) => Promise<boolean>;
}

const Context = createContext({} as ContextData);

export function TransactionProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "1",
      title: "Compra de mantimentos",
      date: new Date("2024-02-10"),
      amount: 50.75,
      category: "Alimentação",
    },
    {
      id: "2",
      title: "Pagamento de conta de luz",
      date: new Date("2024-02-05"),
      amount: 80.0,
      category: "Serviços públicos",
    },
    {
      id: "3",
      title: "Jantar em restaurante",
      date: new Date("2024-02-08"),
      amount: 90.5,
      category: "Alimentação",
    },
    {
      id: "4",
      title: "Compra de roupas",
      date: new Date("2024-02-03"),
      amount: 120.0,
      category: "Vestuário",
    },
    {
      id: "5",
      title: "Recarga de celular",
      date: new Date("2024-02-07"),
      amount: 25.0,
      category: "Comunicação",
    },
  ]);

  const resume = {
    totalIncome: 2000,
    totalWithdraw: 1000,
    total: 1000,
  };

  async function addTransaction({
    title,
    amount,
    category,
  }: {
    title: string;
    amount: number;
    category: string;
  }) {
    try {
      const newTransaction: Transaction = {
        id: crypto.randomUUID(),
        date: new Date(),
        title,
        amount,
        category,
      };

      setTransactions([newTransaction, ...transactions]);
      toast.success("Trasação criada");
      return true;
    } catch (error) {
      toast.error("Erro ao criar uma transação");

      return false;
    }
  }
  async function removeTransaction(id: string) {
    try {
      const transactionArray = transactions.filter(
        (transaction) => transaction.id !== id
      );

      setTransactions(transactionArray);
      toast.success("Trasação removida");

      return true;
    } catch (error) {
      toast.error("Error ao deletar a transação");

      return false;
    }
  }

  return (
    <Context.Provider
      value={{
        addTransaction,
        removeTransaction,
        resume,
        transactions,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useTransactions() {
  return useContext(Context);
}
