import { ComponentProps } from "react";
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'text-zinc-400 rounded-lg hover:text-zinc-100 hover:bg-zinc-800 transision-all disabled:opacity-50 disabled:pointer-events-none',
  variants: {
    size: {
      default: 'px-3 py-2',
      icon: 'p-2',
      'icon-sm': 'p-1'
    },
  },
  defaultVariants: {
    size: 'default'
  }
})

export type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>

export function Button({ size, className, ...props }: ButtonProps) {
  return <button className={buttonVariants({ size, className })} {...props} />
}