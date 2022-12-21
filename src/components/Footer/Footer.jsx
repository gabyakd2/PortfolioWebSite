import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import logogith from '../../assets/img/github.svg';
import logolink from '../../assets/img/linkedin.svg';
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
                        <a href=''> <img src={logogith} alt="" /> </a>
                        <a href=''> <img src={logolink} alt="" /> </a>
                    </div>
                    <p>CopyRight 2022. All Right Reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer