import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import logogith from '../../assets/img/github.svg';
import logolink from '../../assets/img/linkedin.svg';
import logomail from '../../assets/img/envelope.svg'
import './footer.css'


function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                <Col sm={6}>
                    <img className='imgLogo' src={logo} alt="logo footer" />
                </Col>
                <Col sm={6} className='text-center text-sm-end'>
                    <div className='social-icon'>
                        <a href='https://github.com/gabyakd2'> <img src={logogith} alt="logo gith" /> </a>
                        <a href='https://www.linkedin.com/in/gabriel-saldana00/'> <img src={logolink} alt="logo link" /> </a>
                        <a href='mailto:gabrielsal00@hotmail.com'><img src={logomail} alt="logomail" /></a>
                    </div>
                    <p>CopyRight 2022. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer