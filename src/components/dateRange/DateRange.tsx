import DateInput from '../dateInput/DateInput'
import { useData } from '../../context/DataContext'
import styles from './DateRange.module.css'

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useData()

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label='Início'
        id='inicio'
        value={inicio}
        onChange={({target}) => setInicio(target.value)}
      />
      <DateInput
        label='Final'
        id='final'
        value={final}
        onChange={({target}) => setFinal(target.value)}
      />
    </form>
  )
}

export default DateRange