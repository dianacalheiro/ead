import React, { useState } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './Login'
import Conteudo from './Conteudo'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [user, setUser] = useState(
    ''
  );
  return (
  <Router>  
    <Container fluid>
      <Row>
      <Col xs={12} ls={12} lg={12}>
      <Navbar bg="light">
        <Navbar.Brand href="/">Plataforma EAD</Navbar.Brand>
        <Badge>{user}</Badge>
      </Navbar>
      </Col> 
        <Switch>
          
          <Route exact path='/login'>
            <Login setUser={setUser} user={user}/>
          </Route>

          <Route exact path='/conteudo'>
            <Conteudo/>
          </Route>

          <Route path='/'>
          <Login setUser={setUser} user={user}/>
          </Route>
        </Switch>  
      </Row>
    </Container>
  </Router>  
  );
}

export default App;
