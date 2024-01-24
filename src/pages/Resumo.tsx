import GraficoVendas from '../components/graficoVendas/GraficoVendas'
import { useData } from '../context/DataContext'
import styles from './Resumo.module.css'

const Resumo = () => {
  const { data } = useData()

  if(data === null) return null
  return (
    <section className={styles.resumo}>
      <div className={styles.dados}>
        <div className={styles.dadosItem}>
          <h2>Vendas</h2>
          <span>
            {data.filter((item) => item.status !== 'falha')
            .reduce((accum, item) => accum + item.preco, 0).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
          </span>
        </div>
        <div className={styles.dadosItem}>
          <h2>Recebido</h2>
          <span>
            {data.filter((item) => item.status === 'pago')
              .reduce((accum, item) => accum + item.preco, 0).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
          </span>
        </div>
        <div className={styles.dadosItem}>
          <h2>Processando</h2>
          <span>
            {data.filter((item) => item.status === 'processando')
              .reduce((accum, item) => accum + item.preco, 0).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
          </span>
        </div>
      </div>
      <div className={styles.grafico}>
        <GraficoVendas data={data}/>
      </div>
    </section>
  )
}

export default Resumo