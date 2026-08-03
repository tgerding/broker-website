import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "on-dark";
}

export function CalloutQuote({ children, className, variant = "default" }: Props) {
  return (
    <div className={cn(variant === "on-dark" ? "neg-callout" : "callout", className)}>
      <p>{children}</p>
    </div>
  );
}
