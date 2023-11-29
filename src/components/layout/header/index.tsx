import style from './style.module.css'

export type LayoutHeader = {
  children?: React.ReactNode
}

export default function LayoutHeader({ children }: LayoutHeader) {
  return <header className={style.root}>{children}</header>
}
