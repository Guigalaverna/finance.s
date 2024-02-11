"use client";

import { PlusCircle } from "lucide-react";
import { Button } from "./ui/button";

import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { z } from "zod";
import { FormEvent, useContext, useState } from "react";
import { Context } from "./providers/transaction-provider";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "O título é curto demais",
  }),
  transactionType: z.enum(["income", "outcome"]),
  amount: z.number(),
  date: z.date(),
  category: z.string(),
});

export function NewTransactionButton() {
  const [title, setTitle] = useState<string>();
  const [transactionType, setTransactionType] = useState<string>();
  const [date, setDate] = useState<string>();
  const [amount, setAmount] = useState<number>();
  const [category, setCategory] = useState<string>();

  const { handleCreateTransaction } = useContext(Context);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const result = formSchema.parse({
      title,
      amount,
      transactionType,
      date: new Date(date!),
      category,
    });

    handleCreateTransaction(
      result.title,
      result.amount,
      result.transactionType,
      result.date,
      result.category
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <PlusCircle size={20} />
          Nova transação
        </Button>
      </DialogTrigger>

      <DialogPortal>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nova transação</DialogTitle>
          </DialogHeader>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                placeholder="Hamburger"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="transactionType">Tipo da Transação</Label>
              <Select
                value={transactionType}
                onValueChange={(e) => setTransactionType(e)}
              >
                <SelectTrigger id="transactionType">
                  <SelectValue placeholder="Tipo da Transação" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income">Entrada</SelectItem>
                  <SelectItem value="outcome">Saída</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="amount">Quantia</Label>
              <Input
                id="amount"
                placeholder="50"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="date">Data</Label>
              <Input
                id="date"
                placeholder="Hamburger"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="category">Categoria</Label>
              <Input
                id="category"
                placeholder="Alimentação"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full">
              Criar transação
            </Button>
          </form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
