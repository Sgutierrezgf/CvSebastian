/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';

function Experiencia(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Experiencia
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className='row'>
            <Col>
              <div>
                <h4>Empresa:</h4>
                ARUS
                <h4>Tiempo</h4>
                2018-2019
                <h4>Actividad</h4>
                Compra de inventario para los usuarios que lo requerian
                Equipos de computo, tablets y demas equipos tecnologicos
              </div>
              <div>
                <h4>Empresa:</h4>
                ARUS
                <h4>Tiempo</h4>
                2019-Presente
                <h4>Actividad</h4>
                Administracion de las bases de datos en lenguajes tales como SQL server, oracle
                y en este momento aprendiendo AWS ya que nuestro cliente esta migrando a este nuevo servicio
              </div>
            </Col>
            <Col>
              <h4>Otros</h4>
              <div>
                <h4>Platzi</h4>
                <p>De los diferentes cursos, en cada uno se realizar pequeños proyectos a modo de practica</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Experiencia;
