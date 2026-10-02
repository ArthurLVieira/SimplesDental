import Hero from "@/components/Hero";
import { Profissional } from "@/components/Profissional";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Profissional />
    </div>
  );
}
