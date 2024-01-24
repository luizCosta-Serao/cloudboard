import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Venda } from '../context/DataContext'
import Loading from '../components/loading/Loading'
import styles from './VendaUnica.module.css'

type VendaSemData = Omit<Venda, 'data'>

const VendaUnica = () => {
  const { id } = useParams()
  const { data, loading } = useFetch<VendaSemData>(`https://data.origamid.dev/vendas/${id}`)

  if(loading) return <Loading />
  if(data === null) return null
  return (
    <div className={styles.vendaUnica}>
      <div><span>ID:</span> {data.id}</div>
      <div><span>Nome:</span> {data.nome}</div>
      <div><span>Preço:</span> {data.preco.toLocaleString('pt-bt', {style: 'currency', currency: 'BRL'})}</div>
      <div><span>Status:</span> {data.status}</div>
      <div><span>Pagamento:</span> {data.pagamento}</div>
    </div>
  )
}

export default VendaUnica