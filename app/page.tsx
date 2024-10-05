import News from "@/components/News";
import Strategy from "@/components/Strategy";

export default function Home() {
  return (
    <main className="flex flex-col items-center m-2">
      <News />
      <Strategy />
    </main>
  );
}