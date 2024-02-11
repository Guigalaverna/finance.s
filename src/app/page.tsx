import { Cards } from "@/components/cards";
import { NewTransactionButton } from "@/components/buttons/new-transaction-button";
import { RecentTransactionsTable } from "@/components/recent-transaction-table";

export default function Home() {
  return (
    <section className="mt-10">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <span className="text-sm tracking-tight font-medium opacity-60">
            Veja o resumo da semana
          </span>
        </div>

        <NewTransactionButton />
      </header>

      <Cards />

      <RecentTransactionsTable className="mt-10" />
    </section>
  );
}
