import { clsx } from "cn";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "text-slate-900",
        "bg-white",
        "min-h-screen",
        "font-sans",
        "font-medium",
        "p-0 m-0",
      )}
    >
      {children}
    </div>
  );
}
