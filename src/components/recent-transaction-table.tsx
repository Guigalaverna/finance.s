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

export function RecentTransactionsTable({ className }: { className?: string }) {
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
        <TableRow>
          <TableCell className="font-medium">02/06</TableCell>
          <TableCell>McDonald's</TableCell>
          <TableCell>R$250,00</TableCell>
          <TableCell>Alimentação</TableCell>
          <TableCell className="flex items-end justify-end">
            <Button variant="ghost">
              <X />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
