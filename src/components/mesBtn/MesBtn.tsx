import { useData } from '../../context/DataContext'
import styles from './MesBtn.module.css'

function nomeMes(n: number) {
  const date = new Date()
  date.setMonth(date.getMonth() + n)
  return new Intl.DateTimeFormat('pt-BR', {month: 'long'}).format(date)
}

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`
}

const MesBtn = ({ n }: { n: number }) => {

  const { setInicio, setFinal } = useData()

  function setMes(n: number) {
    const date = new Date()
    date.setMonth(date.getMonth() + n)
    
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0)

    setInicio(formatDate(firstDay))
    setFinal(formatDate(lastDay))
  }

  return (
    <button
      onClick={() => setMes(n)}
      className={styles.button}
    >
      {nomeMes(n)}
    </button>
  )
}

export default MesBtn