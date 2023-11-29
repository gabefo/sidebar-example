import style from './style.module.css'

export type LayoutSidebarProps = {
  open?: boolean
  onClose?: () => void
}

export default function LayoutSidebarMobile({ open, onClose }: LayoutSidebarProps) {
  if (!open) {
    return null
  }

  return (
    <>
      <div className={style.backdrop} onClick={onClose} />
      <aside className={style.root}></aside>
    </>
  )
}
