import resumo from '../../assets/icons/resumo.svg'
import vendas from '../../assets/icons/vendas.svg'
import webhooks from '../../assets/icons/webhooks.svg'
import configuracoes from '../../assets/icons/configuracoes.svg'
import contato from '../../assets/icons/contato.svg'
import sair from '../../assets/icons/sair.svg'
import { NavLink } from 'react-router-dom'
import styles from './Sidenav.module.css'

const Sidenav = () => {
  return (
    <nav className={styles.sidenav}>
      <h1 className={styles.title}>CloudBoard</h1>
      <ul className={styles.menu}>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <NavLink to="/" end>Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a href="">Webhooks</a>
        </li>
        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <a href="">Configurações</a>
        </li>
        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <a href="">Contato</a>
        </li>
        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a href="">Sair</a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav