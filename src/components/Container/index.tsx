import FormLayout from "@/layouts/FormLayout/index.tsx";
import { clsx } from "cn";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className={clsx(
        "text-slate-900",
        "bg-slate-100",
        "min-h-screen",
        "font-sans",
        "font-medium",
        "p-0 m-0",
      )}
    >
      <div className={clsx("w-full", "mx-auto")}>
        <FormLayout>{children}</FormLayout>
      </div>
    </div>
  );
};

export default Container;
