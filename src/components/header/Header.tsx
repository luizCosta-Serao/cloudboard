import React from 'react'
import DateRange from '../dateRange/DateRange'
import Meses from '../meses/Meses'
import { useLocation } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  const [title, setTitle] = React.useState('Resumo')
  const { pathname } = useLocation()

  React.useEffect(() => {
    if(pathname === '/') {
      setTitle('Resumo')
      document.title = 'CloudBoard | Resumo'
    } else if (pathname === '/vendas') {
      setTitle('Vendas')
      document.title = 'CloudBoard | Vendas'
    }
  }, [pathname])

  return (
    <header className={styles.header}>
      <div className={styles.data}>
        <DateRange />
        <h1>{title}</h1>
      </div>
      <Meses />
    </header>
  )
}

export default Header