// src/components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// 1️⃣ Define base styles + variants
const buttonVariants = cva(
  // base classes (common to all buttons)
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#ff6908] text-white hover:bg-orange-600 shadow-md",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
        ghost: "bg-transparent text-slate-800 hover:bg-slate-100",
        outline: "border border-slate-300 text-slate-900 hover:bg-slate-100",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-6 text-base",
        icon: "h-9 w-9 p-0", // square button for icons only
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// 2️⃣ ButtonProps type = normal <button> props + variant + size + asChild
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// 3️⃣ Actual Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // If asChild=true, render whatever child component instead of <button>
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

// We export Button as default so your imports stay simple
export { buttonVariants };
export default Button;
