import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/astronauta4.png'
import styles from './banner.module.css'
import TrackVisibility from 'react-on-screen';
import 'animate.css'

function Banner() {

    const [ loopNum, setLoopNum ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const [ text, setText ] = useState('');
    const [ delta, setDelta ] = useState(300 - Math.random() * 100)
    const toRotate = [ 'Frontend Developer', 'Web Designer' ];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker) };
    }, [text])

    function tick () {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

  return (
    <section className={styles.banner} id='home'>
        <Container>
            <Row className='align-items-center'>
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                            {( { isVisible } ) => 
                                <div className={isVisible ? 'animate__animated animate__backInLeft' : ''}>
                                    <span className={styles.tagline}>Bienvenidos a mi Portafolio</span>
                                    <h1>
                                        {'Hola, mi nombre es Gabriel y soy '}
                                        <span className={styles.wrap}>{text}</span>
                                    </h1>
                                    <p>Mi objetivo principal es desarrollarme profesionalmente, evolucionar en mi sector, enriquecer y aportar mis conocimientos. Me destaco por saber trabajar en equipo, adaptarme a cambios para la resolución de problemas, saber escuchar e impulsar el trabajo individual y colectivo para poder alcanzar el objetivo en común. </p>
                                    <a href='mailto:gabrielsal00@hotmail.com'><button>Conectemos <ArrowRightCircle size={25} /> </button></a>
                                </div>
                            }
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <TrackVisibility>
                                    {( { isVisible } ) => 
                                        <div className={isVisible ? 'animate__animated animate__backInRight' : ''}>
                                                <img className={styles.imgBanner} src={headerImg} alt="Headder Img" />
                                        </div>
                                    }
                            </TrackVisibility>
                        </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner