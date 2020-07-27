/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Modal from 'react-bootstrap/Modal';

function Lenguage(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Lenguage
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <section className='line-left'>
            <div className='line-down'>
              <h1>Español</h1>
              <div>
                <h5>Nativo</h5>
                <progress value='10' max='10' className='bp' />
              </div>
            </div>
            <div className='line-down'>
              <h1>Ingles</h1>
              <div>
                <h5>Habla</h5>
                <progress value='6' max='10' className='bp' />
                <h5>Escritura</h5>
                <progress value='4' max='10' className='bp' />
                <h5>Escucha</h5>
                <progress value='8' max='10' className='bp' />
              </div>
            </div>
          </section>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Lenguage;
