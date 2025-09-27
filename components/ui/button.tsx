import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transform active:scale-95 hover:scale-105 hover:shadow-lg",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-md hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0',
        destructive:
          'bg-destructive text-white shadow-md hover:bg-destructive/90 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
        ghost:
          'hover:bg-accent hover:text-accent-foreground hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline hover:text-primary/80',
        gradient:
          'bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white shadow-lg hover:from-gray-900 hover:via-gray-800 hover:to-black hover:shadow-xl hover:-translate-y-1 active:translate-y-0 hover:scale-105 active:scale-95',
        glow:
          'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg hover:shadow-gray-800/25 hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 hover:scale-105 active:scale-95 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700',
        arvea:
          'bg-gradient-to-r from-amber-50 to-amber-100 text-gray-800 border-2 border-gray-300 shadow-lg hover:from-amber-100 hover:to-amber-200 hover:border-gray-400 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 hover:scale-105 active:scale-95 font-semibold tracking-wide',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        xl: 'h-12 rounded-lg px-8 text-base has-[>svg]:px-6',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
