import React from 'react'

import Content from './Components/Content'

import './PostContent.css'

export default class PostContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Posts: [],
    }
  }
  componentDidMount() {
    fetch("http://localhost:8082/posts")
    .then(response => response.json())
    .then(({data: {Posts}}) => {
      console.log(Posts)
      var postsArray = []
      postsArray.push(Posts)
      console.log(postsArray)
      // this.setState({
      //   Posts: postsArray
      // })
    })
  }

  render() {
    return(
      <div>
        <Content />
      </div>
    )
  }
}