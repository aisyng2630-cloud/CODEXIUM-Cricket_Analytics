"use client";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

export const Select = SelectPrimitive.Root;
export const SelectValue = SelectPrimitive.Value;
export const SelectItem = SelectPrimitive.Item;
export const SelectContent = SelectPrimitive.Content;
export const SelectGroup = SelectPrimitive.Group;

export function SelectTrigger({ children }: { children: React.ReactNode }) {
  return (
    <SelectPrimitive.Trigger className="flex h-9 w-full items-center justify-between rounded-md border bg-background px-3 text-sm">
      {children}
      <ChevronDown className="h-4 w-4 opacity-70" />
    </SelectPrimitive.Trigger>
  );
}
