"use client";
import { DownloadCloud } from "lucide-react";
import { Button } from "../ui/button";

import * as xlsx from "xlsx";

export function SaveToExcel() {
  function handleExport(type: string, fn?: any, dl?: any) {
    const tableEl = document.querySelector("table");

    const workbook = xlsx.utils.table_to_book(tableEl, { sheet: "Transações" });

    return dl
      ? xlsx.write(workbook, {
          bookType: "xlsx",
          bookSST: true,
          type: "base64",
        })
      : xlsx.writeFile(
          workbook,
          fn ||
            `Lista de Transações - finances - ${new Date().toLocaleDateString()}.${
              type || "xlsx"
            }`
        );
  }

  return (
    <Button
      onClick={() => handleExport("xlsx")}
      variant="secondary"
      className="flex items-center gap-2"
    >
      <DownloadCloud size={20} />
      Exportar para o Excel
    </Button>
  );
}
