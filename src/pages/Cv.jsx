import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
// import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faFileArchive } from '@fortawesome/free-solid-svg-icons';
import avatar from '../image/avatar.jpg';
import academia from '../image/academia.jpg';
import interes from '../image/interes.jpg';
import lenguaje from '../image/lenguaje.jpg';
import mi from '../image/mi.jpg';
import skill from '../image/skill.jpg';
import exp from '../image/exp.jpg';
import Perfil from '../components/Perfil';
import Academia from '../components/Academia';
import Experiencia from '../components/Experiencia';
import Habilidades from '../components/Habilidades';
import Lenguaje from '../components/Lenguaje';
import Intereses from '../components/Intereses';
import '../styles/cv.scss';
import cv from '../image/SebastianGutierrez.pdf';
import DarkModeToggle from '../components/DarkMode/index';

function Cv() {
  const [PerfilShow, setPerfilShow] = React.useState(false);
  const [academiaShow, setAcademiaShow] = React.useState(false);
  const [expShow, setExpShow] = React.useState(false);
  const [interesShow, setInteresShow] = React.useState(false);
  const [lenguaShow, setLenguaShow] = React.useState(false);
  const [skillShow, setSkillShow] = React.useState(false);
  return (
    <Container className='header'>
      <Row className='row'>
        <Col className='sobreMi'>
          <Image src={mi} roundedCircle className='sobreMiImage' type='submit' onClick={() => setPerfilShow(true)} />
          <h1>Sobre mi</h1>
          <Perfil
            show={PerfilShow}
            onHide={() => setPerfilShow(false)}
          />
        </Col>
        <Col>
          {/* <Image src={avatar} roundedCircle className='avatar' /> */}
        </Col>
        <Col className='academia'>
          <Image src={academia} roundedCircle className='academiaImage' type='submit' onClick={() => setAcademiaShow(true)} />
          <h1>Academia</h1>
          <Academia
            show={academiaShow}
            onHide={() => setAcademiaShow(false)}
            className='estudio'
          />
        </Col>
      </Row>
      <Row className='row'>
        <Col className='Exp'>
          <Image src={exp} roundedCircle className='expImage' type='submit' onClick={() => setExpShow(true)} />
          <h1>Experiencia</h1>
          <Experiencia
            show={expShow}
            onHide={() => setExpShow(false)}
          />
        </Col>
        <Col className='Perfil'>
          <Image src={avatar} roundedCircle className='avatarImage' />
          <div>
            <h1 className='profile-name' id='nombre'>Sebastian Gutierrez</h1>
            <h2 className='profile-profession'>Web Designer</h2>
            <div className='profile-social' id='profile-social'>
              <a href='https://twitter.com/sgutierrez24' className='twitterT'>
                <FontAwesomeIcon icon={faTwitter} className='twitter' />
              </a>
              <a href='https://www.facebook.com/sgutierrez24' className='facebookF'>
                <FontAwesomeIcon icon={faFacebook} className='facebook' href='https://twitter.com/sgutierrez24' />
              </a>
              <a href='https://www.linkedin.com/in/sebastian-gutierrez-54b403148/' className='linkenidI'>
                <FontAwesomeIcon icon={faLinkedin} className='linkedin' />
              </a>
              <a href='https://github.com/Sgutierrezgf' className='githubG'>
                <FontAwesomeIcon icon={faGithubAlt} className='github' />
              </a>
              <a href={cv} className='cvC'>
                <FontAwesomeIcon icon={faFileArchive} className='cv' />
              </a>
              {/* <a href='https://twitter.com/sgutierrez24' className='fab fa-twitter' />
              <a href='https://www.facebook.com/sgutierrez24' className='fab fa-facebook-f' />
              <a href='https://www.linkedin.com/in/sebastian-gutierrez-54b403148/' className='fab fa-linkedin-in' />
              <a href='https://github.com/Sgutierrezgf' className='fab fa-github' />
              <a href={cv} className='fa fa-download' target='_blank' /> */}
            </div>
            <DarkModeToggle />
          </div>
        </Col>
        <Col className='interes'>
          <Image src={interes} roundedCircle className='interesImage' type='submit' onClick={() => setInteresShow(true)} />
          <h1>Intereses</h1>
          <Intereses
            show={interesShow}
            onHide={() => setInteresShow(false)}
          />
        </Col>
      </Row>
      <Row className='row'>
        <Col className='lengua'>
          <Image src={lenguaje} roundedCircle className='lenguajeImage' type='submit' onClick={() => setLenguaShow(true)} />
          <h1>Lenguaje</h1>
          <Lenguaje
            show={lenguaShow}
            onHide={() => setLenguaShow(false)}
          />
        </Col>
        <Col>
          {/* <Image src={avatar} roundedCircle className='avatar' /> */}
        </Col>
        <Col className='skill'>
          <Image src={skill} roundedCircle className='skillImage' type='submit' onClick={() => setSkillShow(true)} />
          <h1>Habilidades</h1>
          <Habilidades
            show={skillShow}
            onHide={() => setSkillShow(false)}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Cv;
