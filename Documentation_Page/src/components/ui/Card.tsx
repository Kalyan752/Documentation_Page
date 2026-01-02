// src/components/ui/Card.tsx
import { cn } from "../../lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "w-full max-w-2xl min-h-[350px] px-10 py-8 rounded-3xl bg-white",
        "shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
        "animate-soft-pop  z-50",
        className
      )}
      {...props}
    />
  )
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div className={cn("mb-4 flex items-center gap-4", className)} {...props} />
  )
}

export function CardIcon({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        "flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-2xl",
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-2xl font-semibold text-slate-900", className)}
      {...props}
    />
  )
}

export function CardDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm leading-relaxed text-slate-500", className)}
      {...props}
    />
  )
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mt-4 space-y-2", className)} {...props} />
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mt-6 text-sm font-semibold text-orange-500 cursor-pointer",
        className
      )}
      {...props}
    />
  )
}
