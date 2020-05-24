import React from 'react'

import { Container, Row, Col, Image } from 'reactstrap';

import Content from './Content'

import './PostContent.css'

export default class PostContent extends React.Component {
  render() {
    return(
      <div>
        <Content />
      </div>
    )
  }
}