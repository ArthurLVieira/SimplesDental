import Link from "@/components/Link";

export default async function Footer() {
  return (
    <footer className="py-6 bg-white">
      <p className="text-center text-zinc-600 text-sm">
        <span>Copyright &copy; {new Date().getFullYear()} -</span>
        <Link href={"/"}>SimplesDental</Link>
      </p>
    </footer>
  );
}
