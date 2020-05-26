import React from 'react'

import { Container, Row, Col } from 'reactstrap';
import { CardText,CardBody } from 'reactstrap';

import './Content.css'

export default class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { content } = this.props
    return(
      <Container className="themed-container" fluid={true}>
        <Row className="info-post">
          <Col>
              <CardBody className="text-content">
                <CardText>{content}</CardText>
              </CardBody>
          </Col>
        </Row>
      </Container>
    )
  }
}

