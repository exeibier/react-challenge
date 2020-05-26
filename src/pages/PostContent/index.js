import React from 'react'

import Header from '../../components/Header'
import TitlePost from './Components/TitlePost'
import UserInfo from './Components/UserInfo'
import ImgPost from './Components/ImgPost'
import Content from './Components/Content'
import ViewNav from './Components/ViewNav'
import Footer from '../../components/Footer'

import './PostContent.css'

export default class PostContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Post: {},
    }
  }
 
  async componentDidMount() {
    await fetch("medium-api-post.mybluemix.net/articles/5eacab4b9091998421035ea0")
    .then(response => response.json())
    .then(({data}) => {
      console.log(data)
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
    console.log(title, subtitle)

    return(
      <div>
        <Header />
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
        <Footer />
      </div>
    )
  }
}