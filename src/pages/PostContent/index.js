import React from 'react'

import TitlePost from './Components/TitlePost'
import UserInfo from './Components/UserInfo'
import ImgPost from './Components/ImgPost'
import Content from './Components/Content'
import ViewNav from './Components/ViewNav'

import './PostContent.css'

export default class PostContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Post: {},
    }
  }

  async componentDidMount() {
    await fetch("http://localhost:8082/posts/5eaca1f6b442905ac3bb1b18")
    .then(response => response.json())
    .then(({data}) => {
      var post = data.post
      this.setState({
        Post: post
      })
      // console.log(this.state.Post)
    })
  }


  render() {
    const { 
      title,
      subtitle,
      image,
      content,
      references,
      author,
      estimatedReadTime,
      clicks
    } = this.state.Post

    return(
      <div>
        <TitlePost 
        title={title}
        subtitle={subtitle}/>
        <UserInfo 
        author={author}
        estimatedReadTime={estimatedReadTime}/>
        <ImgPost 
        image={image}/>
        <Content 
        content={content}/>
        <ViewNav 
        clicks={clicks}/>
      </div>
    )
  }
}