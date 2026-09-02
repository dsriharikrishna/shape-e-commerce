import * as React from "react";
import { cn } from "@/lib/utils";
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[193px] w-full rounded-md border border-gray-200 bg-transparent px-[15px] py-[15px] text-[16px] text-gray-500 shadow-sm transition-colors outline-none focus:border-primary disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
