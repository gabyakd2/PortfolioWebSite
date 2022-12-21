import React from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import ProjectCard from '../ProjectCard/ProjectCard';
import colorSharp2 from '../../assets/img/color-sharp2.png';
import styles from './projects.module.css';
import Nav from 'react-bootstrap/Nav';
import imgproj1 from '../../assets/img/gamepedia2.png'
import imgproj2 from '../../assets/img/notwaste.png'
import imgproj3 from '../../assets/img/dcarbone2.png'
import TrackVisibility from 'react-on-screen';

function Projects() {
  const projects = [
    {
      title: "Videogame App",
      description:
        "Diseñar, desarrollar una App de videojuegos que incluye búsquedas, filtrados, ordenamientos y creación de los mismos.",
      imgUrl: imgproj1
      },
    {
      title: "Not Waste",
      description:
        "Desarrollar renderizado condicional dependiendo el usuario que ingrese a la aplicación. Implementar formulario de proveedor para la carga de productos. Crear funcionalidad de borrado lógico. Diseño y desarrollo de landing. Asistir a dailys utilizando metodologías ágiles para mejorar el desempeño del grupo y proponer ideas para avanzar con el proyecto.",
        imgUrl: imgproj2
      },
    {
      title: "DeCarboneCompraTodo",
      description: "App realizada de manera freelance para emprendimiento.",
      imgUrl: imgproj3
    },
  ];

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
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
                                    quos consequuntur iure dolor? Corrupti vitae reprehenderit tempore
                                    at nam officia ab iure, autem facere nobis sequi earum modi
                                    deserunt accusantium.
                                  </p>
                                </div>
                            }
            </TrackVisibility>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                <Tab.Content>
                    <Tab.Pane eventKey='first'>
                        <Row>
                            {
                            projects.map((pro, i) => {
                                return (
                                    <ProjectCard 
                                    key={i}
                                    {...pro} />
                                )
                            })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey='second'>
                            Lorem Ipsum
                    </Tab.Pane>
                    <Tab.Pane eventKey='third'>
                            Lorem Ipsum
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
