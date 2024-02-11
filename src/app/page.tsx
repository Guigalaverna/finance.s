import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <span className="font-medium">finance.s</span>
          <nav>
            <Button variant="link">Home</Button>
            <Button variant="link">Transações</Button>
          </nav>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/Guigalaverna.png" />
          <AvatarFallback>GG</AvatarFallback>
        </Avatar>
      </header>
    </main>
  );
}
