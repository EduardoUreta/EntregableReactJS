import { Header } from './componentes/Header'
import { ItemListContainer } from './componentes/ItemListContainer'

import '../src/style/style.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { ItemDetailContainer } from './componentes/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import { DarkModeProvider } from './context/DarkModeContext'
// import { Contacto } from './componentes/Contacto'
import { CartView } from './componentes/CartView'
import { Checkout } from './componentes/Checkout'
import { Error404 } from './componentes/Error404'
import { Productos } from './componentes/Productos'
import { CarouselComponent } from './componentes/Carrusel'
import { Acordion } from './componentes/Acordion'
import { Footer } from './componentes/Footer'


function App() {

  return (
    <DarkModeProvider>
      <CartProvider>
        {/* El CartContext está envolviendo todo, por el uso del children */}
        <BrowserRouter>
        {/* Controlo la navegabilidad */}

          <div className='custom-font'>
            <Routes>
              <Route path="*" element={<Header/>}/>
            </Routes>
            
            <CarouselComponent/>

            <Routes>
              <Route path="/" element={<Acordion saludo={"TIENDA ONLINE DE BEBIDAS, ALCOHOL, SNACKS, CARNES, VERDURAS Y MÁS..."}/>}></Route>
              <Route path="/productos" element={
              <div>
                  <ItemListContainer saludo={"TIENDA ONLINE DE BEBIDAS, ALCOHOL, SNACKS, CARNES, VERDURAS Y MÁS..."} />
                  <Productos/>
              </div>
              }/>
              <Route path="/productos/:categoryId" element={<Productos/>}></Route>
              <Route path="/detail/:itemId" element={<ItemDetailContainer/>}></Route>
              
              {/* <Route exact path='/contacto' element={<Contacto/>}></Route> */}
              <Route exact path='/cart' element={<CartView/>}></Route>
              <Route exact path='/checkout' element={<Checkout/>}></Route>
              <Route path="*" element={<Error404/>}></Route>
              {/* <Route exact path='/orders' element={<OrdersList/>}></Route> */}

            </Routes>
            <Footer/>
          </div>
        </BrowserRouter>
      </CartProvider>
    </DarkModeProvider>
  )
}

export default App
