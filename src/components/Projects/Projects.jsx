import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';

function Projects() {
  const project = [
    {
      title: "Videogame App",
      descrption:
        "Diseñar, desarrollar una App de videojuegos que incluye búsquedas, filtrados, ordenamientos y creación de los mismos.",
    },
    {
      title: "Not Waste",
      description:
        "Desarrollar renderizado condicional dependiendo el usuario que ingrese a la aplicación. Implementar formulario de proveedor para la carga de productos. Crear funcionalidad de borrado lógico. Diseño y desarrollo de landing. Asistir a dailys utilizando metodologías ágiles para mejorar el desempeño del grupo y proponer ideas para avanzar con el proyecto.",
    },
    {
      title: "DeCarboneCompraTodo",
      description: "App realizada de manera freelance para emprendimiento.",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Proyectos</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              quos consequuntur iure dolor? Corrupti vitae reprehenderit tempore
              at nam officia ab iure, autem facere nobis sequi earum modi
              deserunt accusantium.
            </p>
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
