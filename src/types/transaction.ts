export interface Transaction {
  id: string;
  title: string;
  date: Date;
  amount: number;
  transactionType: "income" | "outcome";
  category: string;
}
