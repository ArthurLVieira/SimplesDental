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
      )}
    >
      <div className={clsx("max-w-5xl", "mx-auto", "px-8")}>
        <FormLayout>{children}</FormLayout>
      </div>
    </div>
  );
};

export default Container;
