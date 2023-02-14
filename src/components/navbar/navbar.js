import React, {useState, useEffect} from 'react';
import './navbar.css';

import { Container, Nav, Navbar } from 'react-bootstrap';

import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';


function NavbarComponent() {
    // class that helps us manage the link we are in at the moment 
    const [activeLink, setActiveLink] = useState('home');

    // changes background when user scrolls
    const [scrolled, setScrolled] = useState(false);

    //determines if page is scrolled or not 
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

        }

        // window event listener that will be fired on scroll
        // and calls onScroll function to handle any state changes
        window.addEventListener("scroll", onScroll);

        // remove event listener when component is removed from DOM
        return () => window.removeEventListener("scroll", onScroll)
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icons">
                <a href="#"> <img src={navIcon1} alt="" /></a>
                <a href="#"> <img src={navIcon2} alt="" /></a>
                <a href="#"> <img src={navIcon3} alt="" /></a>
            </div>
            <button className='vvd' onClick={() => console.log('connect')}>
                <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;