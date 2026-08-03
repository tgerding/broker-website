import { cn } from "@/lib/utils";

interface Props {
  eyebrow: string;
  className?: string;
  eyebrowClassName?: string;
  ruleClassName?: string;
  centered?: boolean;
}

export function EyebrowHeader({
  eyebrow,
  className,
  eyebrowClassName,
  ruleClassName,
  centered = false,
}: Props) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <span className={cn("eyebrow", eyebrowClassName)}>{eyebrow}</span>
      <div
        className={cn("rule", centered && "mx-auto", ruleClassName)}
        style={centered ? { marginLeft: "auto", marginRight: "auto" } : undefined}
      />
    </div>
  );
}
