import { Header } from './componentes/Header'
import { ItemListContainer } from './componentes/ItemListContainer'
import { BotonBienvenida } from './componentes/BotonBienvenida'

import '../src/style/style.css'
import './App.css'



function App() {

  return (
    <div>
      <Header></Header>

      <ItemListContainer saludo={"Tienda Online de bebidas y alcohol"}></ItemListContainer>
    </div>
  )
}

export default App
