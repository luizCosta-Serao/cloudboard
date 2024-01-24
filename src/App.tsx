import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Sidenav from './components/sidenav/Sidenav'
import { DataContextProvider } from './context/DataContext'
import Resumo from './pages/Resumo'
import Vendas from './pages/Vendas'
import VendaUnica from './pages/VendaUnica'

function App() {

  return (
    <BrowserRouter>
      <DataContextProvider>
        <section className='container'>
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path='/' element={<Resumo />}/>
              <Route path='/vendas' element={<Vendas />}/>
              <Route path='/vendas/:id' element={<VendaUnica />}/>
            </Routes>
          </main>
        </section>
      </DataContextProvider>
    </BrowserRouter>
  )
}

export default App
