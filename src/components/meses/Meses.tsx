import MesBtn from '../mesBtn/MesBtn'
import styles from './Meses.module.css'

const Meses = () => {
  return (
    <div className={styles.meses}>
      <MesBtn n={-3}/>
      <MesBtn n={-2}/>
      <MesBtn n={-1}/>
      <MesBtn n={0}/>
    </div>
  )
}

export default Meses