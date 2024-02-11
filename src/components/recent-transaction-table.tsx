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
import { useContext } from "react";
import { Context } from "./providers/transaction-provider";

interface RecentTransactionsTableProps {
  className?: string;
}

export function RecentTransactionsTable({
  className,
}: RecentTransactionsTableProps) {
  const { transactions, handleDeleteTransaction } = useContext(Context);

  return (
    <Table className={className}>
      <TableCaption>Lista das recentes transações</TableCaption>
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
              {new Date(item.date).toLocaleDateString("pt-br")}
            </TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>
              {item.amount.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </TableCell>
            <TableCell>{item.category}</TableCell>
            <TableCell className="flex items-end justify-end">
              <Button
                variant="ghost"
                onClick={() => handleDeleteTransaction(item.id)}
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
