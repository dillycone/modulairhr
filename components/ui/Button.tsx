'use client'

import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  // Base styles - ensures consistent height across all variants
  [
    'inline-flex items-center justify-center',
    'rounded-lg text-sm font-semibold',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    // Fixed height to ensure consistency
    'h-11', // 44px height - accessible touch target
    'px-6', // Consistent horizontal padding
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-gradient-to-r from-blue-600 to-indigo-600',
          'text-white',
          'shadow-md hover:shadow-lg',
          'border-2 border-transparent', // Important: invisible border for consistent sizing
          'hover:from-blue-700 hover:to-indigo-700',
          'focus-visible:ring-blue-500',
        ],
        secondary: [
          'bg-transparent',
          'text-gray-700',
          'border-2 border-gray-300',
          'hover:border-blue-600 hover:text-blue-600',
          'focus-visible:ring-gray-500',
        ],
        ghost: [
          'bg-transparent',
          'text-gray-700',
          'border-2 border-transparent', // Consistent with other variants
          'hover:bg-gray-100',
          'focus-visible:ring-gray-500',
        ],
        destructive: [
          'bg-red-600',
          'text-white',
          'border-2 border-transparent',
          'shadow-md hover:shadow-lg',
          'hover:bg-red-700',
          'focus-visible:ring-red-500',
        ],
      },
      size: {
        sm: ['h-9', 'px-4', 'text-xs'], // 36px height
        md: ['h-11', 'px-6', 'text-sm'], // 44px height (default)
        lg: ['h-12', 'px-8', 'text-base'], // 48px height
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
