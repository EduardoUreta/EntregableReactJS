import { Header } from './componentes/Header'
import { ItemListContainer } from './componentes/ItemListContainer'
import { BotonBienvenida } from './componentes/BotonBienvenida'

import '../src/style/style.css'
import './App.css'
import { PokeApi } from './componentes/PokeApi'
import { PokeList } from './componentes/PokeList'
import { PokeCard } from './componentes/PokeCard'
import { Contacto } from './componentes/contacto'

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { ItemDetailContainer } from './componentes/ItemDetailContainer'




function App() {

  return (

    <BrowserRouter>
    {/* Controlo la navegabilidad */}

      <div>
        <Routes>
          <Route path="/PokeApi" element={<Header poke/>}/>
          <Route path="*" element={<Header/>}/>
        </Routes>

        <Routes>
          <Route path="/" element={<ItemListContainer saludo={"Tienda Online de bebidas y alcohol"}></ItemListContainer>}/>
          <Route path="/PokeApi" element={<PokeApi/>}></Route>
          {/* <Route path="*" element={<h2>Página no encontrada - Error 404</h2>}></Route> */}
          <Route path="*" element={<Navigate to="/"/>}></Route>
            {/* Puedo definir si quiero usar un comodin para las rutas
            que no existen, o si redirecciono a otra que si existe,
            esto cuando se ingresa a un path que no existe */}
    
          <Route exact path="/productos/:categoryID" element={<ItemListContainer/>}></Route>
          {/* El : significa que es un valor dinámico */}

          <Route exact path="/detail/:itemId" element={<ItemDetailContainer/>}></Route>
          
        </Routes>


        {/* <PokeList/>
        <PokeCard/> */}

        <Contacto/>

      </div>
    </BrowserRouter>
  )
}

export default App
