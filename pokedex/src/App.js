import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Pages/Contact';
import { Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import PokemonPage from './Pages/PokemonPage';

function App() {
  return (
    <Router>
      <div>
        
        <div>
          <Header id="Header" />
        </div>

        <Routes>
          <Route path="/" element={
            <main>



              <Container className="my-5 text-center">
                <h1 className='he1'>Pokedéx</h1>
                <div className='row d-flex'>      
                <div className='col-sm-6'>
                  <Image src="./PIKACHU.gif" className="img-fluid" alt="Pikachu_Gif" />
                  </div> 
                  <div className='col-sm-6'>
                  <Image className="img-fluid" src="https://clipart-library.com/image_gallery/n1582570.gif" alt="Charizard_Gif" />
                  </div>
                    <a href="/PokemonPage">Veja os pokemons</a>
                  </div>
              </Container>


              
            </main>
          } />
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/PokemonPage" element={<PokemonPage />}/>

        </Routes>

        <div>
          <Footer id="Footer"/>
        </div>
     
      </div>
    </Router>
  );
}

export default App;
