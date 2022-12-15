import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/astronauta4.png'
import styles from './banner.module.css'

function Banner() {

    const [ loopNum, setLoopNum ] = useState(0);
    const [ isDeleting, setIsDeleting ] = useState(false);
    const [ text, setText ] = useState('');
    const [ delta, setDelta ] = useState(300 - Math.random() * 100)
    const toRotate = [ 'Web Developer', 'Web Designer' ];
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
                <div className={styles.divContainter}>
                    <div>
                        <Col xs={12} md={6} xl={7}>
                            <span className={styles.tagline}>Bienvenidos a mi Portafolio</span>
                            <h1>
                                {'Hola, mi nombre es Gabriel y soy '}
                                <span className={styles.wrap}>{text}</span>
                            </h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus necessitatibus, reiciendis veniam dolorem eos placeat sed officiis a dolor rem, eveniet recusandae, nesciunt cupiditate temporibus earum doloribus voluptates blanditiis dignissimos.</p>
                            <button onClick={() => console.log('connect')}>Conectemos <ArrowRightCircle size={25} /> </button>
                        </Col>
                    </div>
                    <div className={styles.divImg}>
                        <Col xs={12} md={6} xl={7}>
                            <img className={styles.imgBanner} src={headerImg} alt="Headder Img" />
                        </Col>
                    </div>
                </div>
                </Row>
        </Container>
        
    </section>
  )
}

export default Banner