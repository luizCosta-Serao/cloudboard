import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Venda } from '../../context/DataContext'

type VendaDia = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

function transformData(data: Venda[]): VendaDia[] {

  const dias = data.reduce((accum: {[key: string]: VendaDia}, item) => {
    const dia = item.data.split(' ')[0]
    if(!accum[dia]) {
      accum[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0
      }
    }
    accum[dia][item.status] += item.preco
    return accum
  }, {})

  return Object.values(dias).map((dia) => ({...dia, data: dia.data.substring(5)}))
}

const GraficoVendas = ({ data }: { data: Venda[] }) => {
  const transformedData = transformData(data)

  return (
    <ResponsiveContainer width='99%' height={400}>
      <LineChart data={transformedData} >
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#a36af9" strokeWidth={3}/>
        <Line type="monotone" dataKey="processando" stroke="#fbcb21" strokeWidth={3}/>
        <Line type="monotone" dataKey="falha" stroke="#333" strokeWidth={3}/>
      </LineChart>
    </ResponsiveContainer>
  )
}

export default GraficoVendas