import React from 'react'

import { CardImg } from 'reactstrap';

export default class ImgPost extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    const { image } = this.props
    return(
      <CardImg top width="80%" src={image} alt="Card image cap"  />
    )
  } 
}
