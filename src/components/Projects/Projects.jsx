import React from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
// import ProjectCard from '../ProjectCard/ProjectCard';
import colorSharp2 from '../../assets/img/color-sharp2.png';
import styles from './projects.module.css';
import imgproj1 from '../../assets/img/gamepedia2.png'
import imgproj2 from '../../assets/img/notwaste.png'
import imgproj3 from '../../assets/img/dcarbone2.png'
import TrackVisibility from 'react-on-screen';
import { ArrowRightCircle } from 'react-bootstrap-icons';

function Projects() {
  // const projects = [
  //   {
  //     title: "Videogame App",
  //     description:
  //       "Diseñar, desarrollar una App de videojuegos que incluye búsquedas, filtrados, ordenamientos y creación de los mismos.",
  //     imgUrl: imgproj1
  //     },
  //   {
  //     title: "Not Waste",
  //     description:
  //       "Desarrollar renderizado condicional dependiendo el usuario que ingrese a la aplicación. Implementar formulario de proveedor para la carga de productos. Crear funcionalidad de borrado lógico. Diseño y desarrollo de landing. Asistir a dailys utilizando metodologías ágiles para mejorar el desempeño del grupo y proponer ideas para avanzar con el proyecto.",
  //       imgUrl: imgproj2
  //     },
  //   {
  //     title: "DeCarboneCompraTodo",
  //     description: "App realizada de manera freelance para emprendimiento.",
  //     imgUrl: imgproj3
  //   },
  // ];

  return (
    <section className={styles.project} id="projects">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
                            {
                              ( { isVisible } ) => 
                                <div className={isVisible ? 'animate__animated animate__bounceInLeft' : ''}>
                                  <h2>Proyectos</h2>
                                  <p>
                                    Algunos proyectos en los cuales trabajé y pude desarrollar de manera freelance. Donde me pude desempeñar en algunos como Fullstack y otros como Frontend. 
                                  </p>
                                </div>
                            }
            </TrackVisibility>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                <Tab.Content>
                    <Tab.Pane eventKey='first'>
                        <Row>
                            {/* {
                            projects.map((pro, i) => {
                                return (
                                    <ProjectCard 
                                    key={i}
                                    title={pro.title}
                                    description={pro.description}
                                    imgUrl={pro.imgUrl}
                                    // github={pro.github}
                                    // deploy={pro.deploy}
                                    // {...pro} 
                                    />
                                )
                            })
                            } */}
                            <Col sm={6} md={4}>
                              <div className={styles.projimgbx}>
                                <img src={imgproj1} alt="img card" className='img-fluid'/>
                                <div className={styles.projtxtx}>
                                  <h4>Videogames App</h4>
                                  <span>"Aplicación de videojuegos donde se pueden realizar búsquedas, filtrados, ordenamientos y creación de los mismos."</span>
                                  <div>
                                    <a href="https://github.com/gabyakd2/Videogames-App"><button className={styles.buttonCard}>Repo <ArrowRightCircle size={25} /></button></a>
                                    <a href="https://deploy-videogames-jet.vercel.app/"><button className={styles.buttonCard}>Deploy <ArrowRightCircle size={25} /></button></a>
                                  </div>
                                </div>
                              </div>
                            </Col>
                            <Col sm={6} md={4}>
                              <div className={styles.projimgbx}>
                                <img src={imgproj2} alt="img card" className='img-fluid'/>
                                <div className={styles.projtxtx}>
                                  <h4>Not Waste</h4>
                                  <span>"E-commerce desarrollado con la idea principal de evitar la generación de residuos, hacer que más personas puedan acceder a alimentos comprando a precio reducido a través de la compra-venta de los mismos que sean sobrantes o proximos a vencer. "</span>
                                  <div>
                                    <a href="https://github.com/SerCM/not-waste_PF-HENRY"><button className={styles.buttonCard}>Repo <ArrowRightCircle size={25} /></button></a>
                                    <a href="https://not-waste-app.vercel.app/"><button className={styles.buttonCard}>Deploy <ArrowRightCircle size={25} /></button></a>
                                    <a href="https://www.youtube.com/watch?v=Ricsgx0oQ84&ab_channel=GabrielSalda%C3%B1a"><button className={styles.buttonCard}>Video <ArrowRightCircle size={25} /></button></a>
                                  </div>
                                </div>
                              </div>
                          </Col>
                          <Col sm={6} md={4}>
                              <div className={styles.projimgbx}>
                                <img src={imgproj3} alt="img card" className='img-fluid'/>
                                <div className={styles.projtxtx}>
                                  <h4>DeCarboneCompraTodo</h4>
                                  <span>"App realizada de manera freelance para emprendimiento."</span>
                                  <div>
                                    {/* <button>Repo <ArrowRightCircle size={25} /></button> */}
                                    <a href="https://dcarbonetecompratodo.com/"><button className={styles.buttonCard}>Deploy <ArrowRightCircle size={25} /></button></a>
                                  </div>
                                </div>
                              </div>
                          </Col>
                        </Row>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className={styles.backgroundimageright} src={colorSharp2} alt="img bg" />
    </section>
  );
}

export default Projects;
