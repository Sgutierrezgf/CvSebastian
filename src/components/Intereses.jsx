/* eslint-disable react/jsx-props-no-spreading */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faJsSquare, faHtml5, faReact, faGit } from '@fortawesome/free-brands-svg-icons';
import { faFilm, faBookOpen, faBicycle, faGamepad, faDrumstickBite, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Modal from 'react-bootstrap/Modal';

function Intereses(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Intereses
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='container Interest'>
          <div className='row row-cols-2'>
            <div className='col'>
              <FontAwesomeIcon icon={faFilm} size='3x' />
              <h2>Cine</h2>
            </div>
            <div className='col'>
              <FontAwesomeIcon icon={faBookOpen} size='3x' />
              <h2>Leer</h2>
            </div>
            <div className='col'>
              <FontAwesomeIcon icon={faBicycle} size='3x' />
              <h2>Bicicleta</h2>
            </div>
            <div className='col'>
              <FontAwesomeIcon icon={faGamepad} size='3x' />
              <h2>Videojuegos</h2>
            </div>
            <div className='col'>
              <FontAwesomeIcon icon={faDrumstickBite} size='3x' />
              <h2>Comida</h2>
            </div>
            <div className='col'>
              <FontAwesomeIcon icon={faDumbbell} size='3x' />
              <h2>ejercicio</h2>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Intereses;
