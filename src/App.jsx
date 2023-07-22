import './App.css'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './componentes/Contacto/Contacto'
import { CarritoProvider } from './Context/CarritoContext'
import Cart from './componentes/Cart/Cart'
import Checkout from './componentes/Checkout/Checkout'

function App() {


  return (
    <>

      <BrowserRouter>
        <CarritoProvider>

          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/contacto' element={<Contacto />} />




          </Routes>
        </CarritoProvider>
      </BrowserRouter>





    </>


  )
}

export default App

/*<BrowserRouter>

<NavBar/>
<Routes>
   <Route path= '/' element = {<ItemListContainer/>} />
   <Route path=  '/categoria/:idCategoria' element = {<ItemListContainer/>} />
  <Route path= '/item/:idItem' element = {<ItemDetailContainer/>} />


  
</Routes>
</BrowserRouter>
*/