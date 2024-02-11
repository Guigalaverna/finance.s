import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { TransactionProvider } from "@/components/providers/transaction-provider";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/header";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "finance.s",
};
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased p-5",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TransactionProvider>
            <main>
              <Header />
              {children}
            </main>
          </TransactionProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
