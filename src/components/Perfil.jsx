/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Modal from 'react-bootstrap/Modal';

function Perfil(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Sobre mi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Mucho gusto, como ya abras visto arriba mi nombre es sebastian gutierrez,
          soy una persona que le gusta aprender, que sabe el conocimiento esta ahi para todos,
          y ya es de cada quien aprovecharlo.
          Me concidero alguien con hambre, hambre de crecer, tome el tiempo que me tome, que independientemente
          de que las cosas no salga a la primera, hay que continuar avanzando.
        </p>
        <h3 className='title'>Informacion Sobre mi</h3>
        <div>
          <div>
            <span>EDAD . . . . </span>
            31 Años
          </div>
          <div>
            <span>CIUDAD . . . . </span>
            Medellin, Colombia
          </div>
          <div>
            <span>TELEFONO . . . . </span>
            301 236 36 06
          </div>
          <div>
            <span>DIRECCION . . . . </span>
            Carrera 91 # 37 - 12 Medellin, Colombia
          </div>
        </div>
        <br />
        <p>
          Si te interesa saber mas sobre y lo que he estado realizando o como ver como soy, no dejes de mirar mis redes sociales
          arriba estan los links para acceder a estas y tambien descargar mi hoja de vida si lo que quieres es hacerme una propuesta
          Feliz que te pases por aqui
        </p>
      </Modal.Body>
    </Modal>
  );
}

export default Perfil;
