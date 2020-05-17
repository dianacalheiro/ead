import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

function Login(props) {
    const [userInput, setUserInput] = useState(
        ''
    );
    return (
        <Col style={{textAlign: 'center'}}>
        <Col xs={12} md={6} lg={4} style={{float: 'none', display: 'inline-block'}}>
            <Form>  
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Usuário</Form.Label>
                <Form.Control type="email" placeholder="Digite o seu usuário" 
                    onChange={event => setUserInput(event.target.value)}
                />
                {/*<Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
                </Form.Group>
            
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Digite a sua senha" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                {/*<Form.Check type="checkbox" label="Check me out" /> */}
                </Form.Group>
                <Link to='/conteudo'>
                    <Button variant="primary"  style={{float: 'left'}}
                        onClick={()=>props.setUser('Sala de aula de '+ userInput)}
                    >
                        
                    Entrar
                    </Button>
                </Link>
                <Button variant="primary"  style={{float:'right'}}>
                Cadastrar
                </Button>
            </Form>
        </Col>
        </Col>
    );
  }
  
  export default Login;
  