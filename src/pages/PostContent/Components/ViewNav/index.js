import React from 'react'

import './ViewNav.css'

import { Row, Col } from 'reactstrap';
import { Card, CardImg, CardText } from 'reactstrap';

import dots from '../img/dots.png'
import fb from '../img/fb.png'
import label from '../img/label.png'
import linkedin from '../img/linkedin.png'
import twitter from '../img/twitter.png'
import view from '../img/view.svg'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { clicks } = this.props
    return(
      <Row xs="2" className="user-info">
        <Col className="views-container">
          <Card className="view-link">
            <CardImg className="icon-img" top width="10%" src={view} alt="Card image cap"  />
            <CardText>{clicks} views</CardText>
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

