import React from 'react';
import './App.css';
//import { Button } from 'reactstrap';
//import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Home from './components/Home';

import Footer from './components/Footer';
import Allcourse from './components/Allcourse';
import Addcourse from './components/Addcourse';
//import Updatecourse from './components/Updatecourse'
import { Container, Row,Col } from 'reactstrap';
import Header from './components/Header';
import Menu from './components/Menu';
import {BrowserRouter as Router,Route} from "react-router-dom";



function App() {
  
  return (
    <div>
    
    <Router>
    <Header/>
    <Container>
    <Row>
    <Col md={4}>
    <Menu/>
    </Col>
  <Col md={8}>
  <Route path="/" component={Home} exact/>
  <Route path="/add-course" component={Addcourse} exact/>
  <Route path="/view-course" component={Allcourse} exact/>
  </Col>
    </Row>
    </Container>
    </Router>
    <hr/>
    <Footer/>

  </div>
    
   
  );
}

export default App;
