import { NavLink } from 'react-router-dom'
import { Venda } from '../../context/DataContext'
import styles from './VendaItem.module.css'

const VendaItem = ({ venda }: { venda: Venda }) => {

  return (
    <div className={styles.vendaItem}>
      <NavLink to={`/vendas/${venda.id}`} style={{fontFamily: 'monospace'}}>{venda.id}</NavLink>
      <div className={styles.nome}>{venda.nome}</div>
      <div className={styles.preco}>{venda.preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</div>
    </div>
  )
}

export default VendaItem