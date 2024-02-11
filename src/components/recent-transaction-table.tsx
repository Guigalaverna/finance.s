"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { useTransactions } from "./providers/transaction-provider";

export function RecentTransactionsTable({ className }: { className?: string }) {
  const { transactions, removeTransaction } = useTransactions();

  return (
    <Table className={className}>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Data</TableHead>
          <TableHead>Título</TableHead>
          <TableHead>Preço</TableHead>
          <TableHead>Categoria</TableHead>
          <TableHead className="text-right pr-7">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">
              {item.date.toISOString()}
            </TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>
              {new Intl.NumberFormat("pt-br", {
                style: "currency",
                currency: "BRL",
              }).format(item.amount)}
            </TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell className="flex items-end justify-end">
              <Button
                variant="ghost"
                onClick={() => removeTransaction(item.id)}
              >
                <X />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
