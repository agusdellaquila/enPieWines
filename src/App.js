import './Atoms.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './components/CartContext/CartContext'
import { NotificationProvider } from './components/NotificationContext/NotificationContext'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import SobreNosotros from './components/SobreNosotros/SobreNosotros'
import Footer from './components/Footer/Footer'
import Carrito from './components/Carrito/Carrito'
import TerminosYCondiciones from './components/TerminosYCondiciones/TerminosYCondiciones'
import PoliticaDePrivacidad from './components/PoliticaDePrivacidad/PoliticaDePrivacidad'
import Checkout from './components/Checkout/Checkout'
import Contacto from './components/Contacto/Contacto'

function App() {
  return (
    <div className="App">
      <NotificationProvider>
        <CartContextProvider>
          <BrowserRouter>
              <header>
                  <NavBar/>
                  <Routes>
                    <Route path='/' element={<Home/>}/>	
                    <Route path='/item/:category' element={<ItemListContainer/>}/>
                    <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='/carrito' element={<Carrito/>}/>
                    <Route path='/SobreNosotros' element={<SobreNosotros/>}/>
                    <Route path='/TerminosYCondiciones' element={<TerminosYCondiciones/>}/>
                    <Route path='/PoliticaDePrivacidad' element={<PoliticaDePrivacidad/>}/>
                    <Route path='/checkout' element={<Checkout/>}/>
                    <Route path='/contacto' element={<Contacto/>}/>
                  </Routes>
              </header>
                <footer>
                  <Footer/>
                </footer>
          </BrowserRouter>
        </CartContextProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
