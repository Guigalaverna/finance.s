import { NewTransactionButton } from "@/components/buttons/new-transaction-button";
import { SaveToExcel } from "@/components/buttons/save-to-excel";
import { RecentTransactionsTable } from "@/components/recent-transaction-table";
import { Button } from "@/components/ui/button";
import { DownloadCloud } from "lucide-react";

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

        <div className="flex items-center gap-3">
          <SaveToExcel />
          <NewTransactionButton />
        </div>
      </header>

      <RecentTransactionsTable className="mt-10" />
    </section>
  );
}
