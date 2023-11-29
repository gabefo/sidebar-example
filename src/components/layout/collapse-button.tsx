import clsx from 'clsx'
import { forwardRef } from 'react'
import style from './style.module.css'

const LayoutSidebarCollapseButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(function LayoutSidebarCollapseButton({ className, ...props }, ref) {
  return (
    <button ref={ref} className={clsx(style.collapseButton, className)} {...props}>
      <div className={style.menuIcon}>
        <span />
        <span />
        <span />
      </div>
    </button>
  )
})

export default LayoutSidebarCollapseButton
