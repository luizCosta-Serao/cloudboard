import React from 'react'
import useFetch from '../hooks/useFetch'

type DataContext = {
  data: Venda[] | null
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
}

export type Venda = {
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | 'processando' | 'falha';
  pagamento: 'boleto' | 'pix' | 'cartao';
  data: string;
  parcelas: number | null;
}

const DataContext = React.createContext<DataContext | null>(null)

export const useData = () => {
  const context = React.useContext(DataContext)
  if(!context) throw new Error('useData precisa estar em DataContextProvider')
  return context
}

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n)
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`
}

export const DataContextProvider = ({
  children
}: React.PropsWithChildren ) => {

  const [inicio, setInicio] = React.useState(getDate(30))
  const [final, setFinal] = React.useState(getDate(0))

  const { data, loading, error } = useFetch<Venda[]>(`https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`)

  const value = {
    data,
    loading,
    error,
    inicio,
    setInicio,
    final,
    setFinal
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}