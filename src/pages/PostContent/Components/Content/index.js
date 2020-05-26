import React from 'react'

import { Container, Row, Col } from 'reactstrap';
import {
  Card, Button, CardImg, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';
// images
import perfil from '../img/perfil.png'
import dots from '../img/dots.png'
import fb from '../img/fb.png'
import label from '../img/label.png'
import linkedin from '../img/linkedin.png'
import twitter from '../img/twitter.png'
import view from '../img/view.svg'

import './Content.css'

export default class Content extends React.Component {
  render() {
    return(
      <Container className="themed-container" fluid={true}>
        <Row className="header-post">
          <Col>
            <h1>Coronavirus: Por qué Debemos Actuar Ya</h1>
            <h3>Políticos, empresarios, asociaciones y comunidades: ¿Qué deberían hacer y cuándo?</h3>
          </Col>
        </Row>
        <Row className="user-info">
          <Col>
            <Card className="user-link">
              <CardImg top width="18%" src={perfil} alt="Card image cap"  />
              <CardBody>
                <div className="user-link">
                  <CardText>UserName</CardText>
                  <Button >Follow</Button>
                </div>
                <CardSubtitle>May 25 · 5 min read</CardSubtitle>
              </CardBody>
            </Card>
          </Col>
          <Col className="icons-container">
            <div>
              <button><CardImg top width="90%" src={twitter} alt="Card image cap"  /></button>
            </div>
            <div>
              <button><CardImg top width="90%" src={linkedin} alt="Card image cap"  /></button>
            </div>
            <div>
              <button><CardImg top width="90%" src={fb} alt="Card image cap"  /></button>
            </div>
            <div>
              <button><CardImg top width="90%" src={label} alt="Card image cap"  /></button>
            </div>
            <div>
              <button><CardImg top width="90%" src={dots} alt="Card image cap"  /></button>
            </div>
          </Col>
        </Row>
        <Row className="info-post">
          <Col>
            <Card>
              <CardImg top width="90%" src="https://miro.medium.com/max/2000/1*6RYGpxj37Kzp_7q2ycMKQg.jpeg" alt="Card image cap"  />
              <CardBody className="text-content">
                <CardText>Something is happening in the world that we should pay attention to. Sadly we are ignoring it and the many warnings it represents. There is a country that may do a worse job and have a worse outcome addressing Covid-19 than the US — Brazil. It’s not getting better but is likely to get worse and worse. Cuando termines de leer el artículo, esto es con lo que deberías quedarte:
El coronavirus está yendo hacia a ti.
Lo está haciendo a velocidad exponencial: primero gradualmente y luego repentinamente.
Es cuestión de días. Quizás una semana o dos.
Cuando llegue, tu sistema sanitario estará saturado.
La gente tendrá que ser atendida en los pasillos.
El personal sanitario estará agotado. Algunos de ellos contagiados, otros morirán.
Tendrán que decidir qué pacientes reciben el oxígeno y cuáles dejan morir.
La única manera de prevenir esto es el aislamiento social hoy. No mañana. Hoy.
Esto significa mantener a cuanta más gente posible en casa, desde ya.
Como político, empresario o representante de tu comunidad, tienes el poder y la responsabilidad de prevenir esta catástrofe.
Puede que te asalten las dudas: ¿Y si estoy exagerando? ¿Se va a reír la gente de mí? ¿Se van a enfadar? ¿Estoy provocando el pánico? ¿No será mejor esperar a que otros hagan algo primero? ¿Estaré causando un daño irreparable a la economía?
Pero en 2–4 semanas, cuando el mundo entero esté en aislamiento, cuando estos pocos y tan preciados días de distanciamiento social te hayan permitido salvar vidas, nadie te va a criticar: te agradecerán que hayas hecho lo correcto.
Vamos a ello.
                </CardText>
              </CardBody>
              <Row xs="2" className="user-info">
                <Col className="views-container">
                  <Card className="view-link">
                    <CardImg top width="10%" src={view} alt="Card image cap"  />
                    <CardText>nº views</CardText>
                  </Card>
                </Col>
                <Col className="icons-container">
                  <div>
                    <button><CardImg top width="90%" src={twitter} alt="Card image cap"  /></button>
                  </div>
                  <div>
                    <button><CardImg top width="90%" src={linkedin} alt="Card image cap"  /></button>
                  </div>
                  <div>
                    <button><CardImg top width="90%" src={fb} alt="Card image cap"  /></button>
                  </div>
                  <div>
                    <button><CardImg top width="90%" src={label} alt="Card image cap"  /></button>
                  </div>
                  <div>
                    <button><CardImg top width="90%" src={dots} alt="Card image cap"  /></button>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

