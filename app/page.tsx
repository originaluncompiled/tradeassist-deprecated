import News from "@/components/News";
import Strategy from "@/components/Strategy";

// Id of each strategy checklist item is: [number corresponding to group, for e.g. 0 - first group].[1 = title; 2 = items].[item's index]
// then use first number as index to go to correct group, etc.

export default function Home() {
  return (
    <main className="flex flex-col items-center m-2">
      <News />
      <Strategy />
    </main>
  );
}