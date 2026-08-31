import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding font-semibold whitespace-nowrap transition-all outline-none select-none hover:-translate-y-0.5 hover:shadow-lg disabled:pointer-events-none disabled:opacity-65 disabled:bg-gray-300 disabled:text-gray-400 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:text-white",
        secondary:
          "bg-brand-200 text-primary hover:bg-primary hover:text-white hover:shadow-none",
        "secondary-alt":
          "bg-extra-twelve text-secondary hover:bg-secondary hover:text-white hover:shadow-none",
        black:
          "bg-black text-white hover:text-black hover:bg-white hover:shadow-none",
        gray: "bg-brand-50 text-heading hover:bg-primary hover:text-white",
        "gray-light":
          "bg-gray-200 text-gray-500 hover:bg-black hover:text-white hover:shadow-none",
        white: "bg-white text-heading hover:bg-primary hover:text-white",
        naked:
          "bg-transparent text-heading hover:bg-black hover:text-white hover:shadow-none",
        outline:
          "bg-transparent border-2 border-primary text-heading hover:bg-primary hover:text-white",
        "outline-dark":
          "bg-transparent border-2 border-black text-heading hover:bg-black hover:text-white",
        "outline-white":
          "bg-transparent border-2 border-white text-white hover:bg-primary hover:border-primary hover:text-black",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[50px] px-10 text-[18px]",
        sm: "h-[36px] px-8 text-[14px]",
        "sm-2": "h-[36px] px-[18px] text-[14px]",
        xs: "h-[32px] px-4 text-[14px]",
        md: "h-[40px] px-8 text-[16px]",
        icon: "size-10 rounded-full",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
