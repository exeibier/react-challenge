import React from 'react'

import { Container, Row, Col } from 'reactstrap';
import {
  Card, Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody
} from 'reactstrap';

import './Content.css'

export default class Content extends React.Component {
  render() {
    return(
      <Container className="themed-container" fluid={true}>
        <Row className="header-post">
          <Col>
            <h1>This is the Title</h1>
            <h3>This is the Subtitle</h3>
          </Col>
        </Row>
        <Row className="user-info">
          <Col>user info</Col>
          <Col>icons</Col>
        </Row>
        <Row className="info-post">
          <Col sm="12" xs="9">
            <Card>
              <CardImg top width="90%" src="https://miro.medium.com/max/2000/1*6RYGpxj37Kzp_7q2ycMKQg.jpeg" alt="Card image cap"  />
              <CardBody className="text-content">
                <CardText>Something is happening in the world that we should pay attention to. Sadly we are ignoring it and the many warnings it represents. There is a country that may do a worse job and have a worse outcome addressing Covid-19 than the US — Brazil. It’s not getting better but is likely to get worse and worse.
                </CardText>
              </CardBody>
              <Row className="user-info">
                <Col>user info</Col>
                <Col>icons</Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}


// perfil and social networks code
{/* <div class="profile-box mb-4 d-sm-flex flex-row-reverse justify-content-between">
  <div class="social-networks d-flex mb-3">
    <div class="network-logo mx-1">
      <img src="./assets/images/twitter icon.png" alt="">
    </div>
    <div class="network-logo mx-1">
      <img src="./assets/images/linkedin-icon.png" alt="">
    </div>
    <div class="network-logo mx-1">
      <img src="./assets/images/fb-icon.png" alt="">
    </div>
    <div class="network-logo mx-1">
      <img src="./assets/images/label-icon.png" alt="">
    </div>
    <div class="network-logo mx-1">
      <button data-target="popover" id="doot-menu">
        <img src="./assets/images/three-dots-icon.png" alt="">
      </button>
  </div>        
</div> */}