import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "flex h-12 items-center justify-center rounded-full px-5 text-base font-medium transition-colors",
        variant === "primary" &&
          "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
        variant === "secondary" &&
          "border border-solid border-black/[.08] hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
