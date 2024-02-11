"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownCircle, ArrowUpCircle, DollarSign } from "lucide-react";
import { useContext } from "react";
import { Context } from "./providers/transaction-provider";

export function Cards() {
  const { totalIncomes, totalOutcomes } = useContext(Context);

  return (
    <div className="grid grid-cols-3 mt-5 gap-5">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Entradas</CardTitle>
          <ArrowUpCircle className="text-lime-500" />
        </CardHeader>
        <CardContent className="space-x-2">
          <span className="text-2xl font-medium tracking-tight">
            {totalIncomes.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Saídas</CardTitle>
          <ArrowDownCircle className="text-red-500" />
        </CardHeader>
        <CardContent className="space-x-2">
          <span className="text-2xl font-medium tracking-tight">
            {totalOutcomes.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Total</CardTitle>
          <DollarSign className="text-orange-500" />
        </CardHeader>
        <CardContent className="space-x-2">
          <span className="text-2xl font-medium tracking-tight">
            {(totalIncomes - totalOutcomes).toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
