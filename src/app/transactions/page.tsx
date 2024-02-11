import { NewTransactionButton } from "@/components/new-transaction-button";
import { RecentTransactionsTable } from "@/components/recent-transaction-table";

export default function Transactions() {
  return (
    <section className="mt-10">
      <header className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Transações</h2>
          <span className="text-sm tracking-tight font-medium opacity-60">
            Veja todas as suas transações
          </span>
        </div>

        <NewTransactionButton />
      </header>

      <RecentTransactionsTable className="mt-10" />
    </section>
  );
}
