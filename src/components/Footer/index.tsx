import Link from "@/components/Link";
import { cacheTag } from "next/cache";

export default async function Footer() {
  return (
    <footer className="mt-20 py-6">
      <p className="text-center text-zinc-600 text-sm">
        <span>Copyright &copy; {new Date().getFullYear()} -</span>
        <Link href={"/"}>SimplesDental</Link>
      </p>
    </footer>
  );
}
