/* eslint-disable react/jsx-props-no-spreading */
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import '../styles/academia.scss';

function Academia(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Estudios
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className='row'>
            <Col className='academia'>
              <h1>Academicos</h1>
              <div>
                <h4>Colegio:</h4>
                Instituto Uniban
                <h4>Tiempo</h4>
                1992 - 2005
                <h4>Titulo Obtenido</h4>
                Bachiller
              </div>
              <div>
                <h4>Universidad:</h4>
                Instituto tecnologico Metropolitano
                <h4>Tiempo</h4>
                2012 - 2018
                <h4>Titulo Obtenido</h4>
                Tecnologia de sistemas
              </div>
            </Col>
            <Col className='otros'>
              <h1>Otros</h1>
              <div>
                <h4>Platzi Masters:</h4>
                Platzi
                <h4>Tiempo</h4>
                2020 - Actual
                <p>Curso intensivo para aprender toda la parte frontend</p>
              </div>
              <div>
                <h4>Platzi:</h4>
                Cursos Onlines
                <h4>Tiempo</h4>
                2018 - atual
                <h4>Titulo Obtenido</h4>
                Diferentes Cursos de desarrollo frontend
              </div>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Academia;
