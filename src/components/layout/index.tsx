'use client'

import { useEffect, useState } from 'react'
import LayoutSidebarCollapseButton from './collapse-button'
import LayoutHeader from './header'
import LayoutSidebarDesktop from './sidebar/desktop'
import LayoutSidebarMobile from './sidebar/mobile'
import style from './style.module.css'

export type LayoutProps = {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleCollapsed = () => {
    setIsCollapsed((prev) => !prev)
  }

  const handleOpenMobileSidebar = () => {
    setIsMobileSidebarOpen(true)
  }

  const handleCloseMobileSidebar = () => {
    setIsMobileSidebarOpen(false)
  }

  return (
    <div className={style.root}>
      {isDesktop ? (
        <LayoutSidebarDesktop collapsed={isCollapsed} />
      ) : (
        <LayoutSidebarMobile open={isMobileSidebarOpen} onClose={handleCloseMobileSidebar} />
      )}
      <div className={style.content}>
        <LayoutHeader>
          <LayoutSidebarCollapseButton
            onClick={isDesktop ? toggleCollapsed : handleOpenMobileSidebar}
          />
        </LayoutHeader>
        {children}
      </div>
    </div>
  )
}
