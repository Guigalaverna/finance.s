import { Header } from "@/components/header";
import { RecentTransactionsTable } from "@/components/recent-transaction-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowDownCircle,
  ArrowUpCircle,
  DollarSign,
  PlusCircle,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="mt-10">
        <header className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Olá, Guilherme</h2>
            <span className="text-sm tracking-tight font-medium opacity-60">
              Veja o resumo da semana
            </span>
          </div>

          <Button className="flex items-center gap-2">
            <PlusCircle size={20} />
            Nova transação
          </Button>
        </header>

        <div className="grid grid-cols-3 mt-5 gap-5">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Entradas</CardTitle>
              <ArrowUpCircle />
            </CardHeader>
            <CardContent className="space-x-2">
              <span className="text-sm font-bold">R$</span>
              <span className="text-2xl font-medium tracking-tight">
                2,000.00
              </span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Saídas</CardTitle>
              <ArrowDownCircle />
            </CardHeader>
            <CardContent className="space-x-2">
              <span className="text-sm font-bold">R$</span>
              <span className="text-2xl font-medium tracking-tight">
                1,000.00
              </span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Total</CardTitle>
              <DollarSign />
            </CardHeader>
            <CardContent className="space-x-2">
              <span className="text-sm font-bold">R$</span>
              <span className="text-2xl font-medium tracking-tight">
                1,000.00
              </span>
            </CardContent>
          </Card>
        </div>

        <RecentTransactionsTable className="mt-10" />
      </section>
    </main>
  );
}
