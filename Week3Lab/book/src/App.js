import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="features">Features</Nav.Link>
              <Nav.Link href="pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/home' element={<Header></Header>}></Route>
          <Route path='/features' element={<Content></Content>}></Route>
          <Route path='/pricing' element={<Footer></Footer>}></Route>
        </Routes>


        
        
      </div>
      </BrowserRouter>
  );
}

export default App;
