import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines clsx + tailwind-merge
 * clsx = conditional classnames
 * tailwind-merge = prevents duplicate/conflicting classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
