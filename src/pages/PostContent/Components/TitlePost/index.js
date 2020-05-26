import React from 'react'

import './TitlePost.css'

import { Row, Col } from 'reactstrap';

export default class TitlePost extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, subtitle } = this.props
    return(
      <Row className="header-post">
      <Col>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </Col>
    </Row>
    )
  }
}