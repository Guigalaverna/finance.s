export const dynamic = "force-dynamic";
export default function TransactionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
