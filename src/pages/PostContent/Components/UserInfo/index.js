import React from 'react'

import './UserInfo.css'

import { Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText,
  CardSubtitle, CardBody
} from 'reactstrap';

import perfil from '../img/perfil.png'
import dots from '../img/dots.png'
import fb from '../img/fb.png'
import label from '../img/label.png'
import linkedin from '../img/linkedin.png'
import twitter from '../img/twitter.png'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { author, estimatedReadTime, date } = this.props
    return(
      <Row className="user-info">
          <Col>
            <Card className="user-link">
              <CardImg top width="18%" src={perfil} alt="Card image cap"  />
              <CardBody>
                <div className="user-link">
                  <CardText>{author}</CardText>
                  <button>Follow</button>
                </div>
                <CardSubtitle>{date} · {estimatedReadTime} Read time</CardSubtitle>
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
    )
  }
}