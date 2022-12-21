import React from 'react'
import styles from './skills.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import logohtml from '../../assets/img/html.png'
import logocss from '../../assets/img/css.png'
import logojs from '../../assets/img/javascript.png'
import logoreact from '../../assets/img/react.png'
import logoredux from '../../assets/img/redux.png'
import logobootstrap from '../../assets/img/bootstrap.png'
import logonode from '../../assets/img/node.png'
import logoexpress from '../../assets/img/express.png'
import logopost from '../../assets/img/postgresql.png'
import logoseq from '../../assets/img/sequelize.png'
import colorSharp from '../../assets/img/color-sharp.png'

function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className={styles.skill} id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className={styles.skillbx}>
                        <h2>
                            Habilidades
                        </h2>
                        <p>Tecnologías en las que trabajé, me destaco y cuento con experiencia.</p>
                        <Carousel responsive={responsive} infinite={true} className={styles.skillSlider}>
                            <div className={styles.image}>
                                <img className={styles.imgCar} src={logohtml} alt="logo html" />
                                <h5>HTML</h5>
                            </div>
                            <div className={styles.image}>
                                <img className={styles.imgCar} src={logocss} alt="logo css" />
                                <h5>CSS</h5>
                            </div>
                            <div className={styles.image}>
                                <img className={styles.imgCar} src={logojs} alt="logo js" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className={styles.image}>
                                <img className={styles.imgCar} src={logoreact} alt="logo react" />
                                <h5>React Js</h5>
                            </div>
                            <div className={styles.image}>
                                <img className={styles.imgCar} src={logoredux} alt="logo redux" />
                                <h5>Redux</h5>
                            </div>
                            <div className={styles.image}>
                                <img className={styles.imgCar} src={logobootstrap} alt="logo bootstrap" />
                                <h5>Bootsrap</h5>
                            </div>
                            <div className={styles.image}>
                                <img className={styles.imgCar} src={logonode} alt="logo node" />
                                <h5>Node Js</h5>
                            </div>
                            <div className={styles.image}>
                                <img className={styles.imgCar} src={logoexpress} alt="logo express" />
                                <h5>Express Js</h5>
                            </div>
                            <div className={styles.image}>
                                <img className={styles.imgCar} src={logopost} alt="logo postgresql" />
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className={styles.image}>
                                <img className={styles.imgCar} src={logoseq} alt="logo sequelize" />
                                <h5>Sequelize</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className={styles.backgroundImageLeft} src={colorSharp} alt="colorsharp" />
    </section>
  )
}

export default Skills