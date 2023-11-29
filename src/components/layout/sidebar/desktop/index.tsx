'use client'

import clsx from 'clsx'
import { useState } from 'react'
import style from './style.module.css'

export type LayoutSidebarDesktopProps = {
  collapsed?: boolean
}

export default function LayoutSidebarDesktop({ collapsed }: LayoutSidebarDesktopProps) {
  const [hover, setHover] = useState(false)

  const isOpen = !collapsed || hover

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <aside
      className={clsx(style.root, {
        [style.collapsed]: collapsed,
        [style.hover]: hover,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={style.inner}></div>
    </aside>
  )
}
