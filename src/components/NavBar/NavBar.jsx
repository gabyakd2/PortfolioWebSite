import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/img/logo.png';
import logogith from '../../assets/img/github.svg'
import logolink from '../../assets/img/linkedin.svg'


function NavBar() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        if (window.scrollY > 50) {
            setScrolled(true)
        }else{
            setScrolled(false)
        }

        window.addEventListener('scroll', onscroll)
        return () => window.removeEventListener('scroll', onscroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : '' }>
      <Container>
        <Navbar.Brand href="#home">
            <img className='imgLogo' src={logo} alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href='https://github.com/gabyakd2'><img src={logogith} alt='logogit'/></a>
                <a href='https://www.linkedin.com/in/gabriel-saldana00/'><img src={logolink} alt='logolinked'/></a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}><span>Conectemos</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar