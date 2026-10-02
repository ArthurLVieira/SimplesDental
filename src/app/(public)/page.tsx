import Hero from "@/app/(public)/_components/Hero";
import { Profissionals } from "@/app/(public)/_components/Profissionals";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Profissionals />
    </div>
  );
}
