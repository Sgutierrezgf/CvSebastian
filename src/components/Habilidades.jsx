/* eslint-disable react/jsx-props-no-spreading */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faHtml5, faReact, faGit } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';

function Habilidades(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Habilidades
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row className='row'>
            <Col>
              <section className='line-left'>
                <FontAwesomeIcon icon={faLaptopCode} size='3x' />
                <h4 className='line-down'>
                  LENGUAJES DESARROLLO
                </h4>
                <div className='line-down'>
                  <FontAwesomeIcon icon={faJsSquare} size='3x' />
                  <div>
                    <progress value='7' max='10' className='bp' />
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon icon={faHtml5} size='3x' />
                  <div>
                    <progress value='7.5' max='10' className='bp' />
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon icon={faReact} size='3x' />
                  <div>
                    <progress value='5' max='10' className='bp' />
                  </div>
                </div>
                <div className='line-down'>
                  <FontAwesomeIcon icon={faGit} size='3x' />
                  <div>
                    <progress value='7.5' max='10' className='bp' />
                  </div>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Habilidades;
