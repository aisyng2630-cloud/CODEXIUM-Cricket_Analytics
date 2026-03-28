import { cn } from "@/lib/utils";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("h-9 w-full rounded-md border bg-background px-3 text-sm outline-none", props.className)} {...props} />;
}
