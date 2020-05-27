import React from 'react'

import Header from '../../components/Header'
import TitlePost from './Components/TitlePost'
import UserInfo from './Components/UserInfo'
import ImgPost from './Components/ImgPost'
import Content from './Components/Content'
import ViewNav from './Components/ViewNav'
import Footer from '../../components/Footer'
import LogIn from '../LogIn'

import './PostContent.css'

export default class PostContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Post: {},
    }
  }
 
  async componentDidMount() {
    await fetch("https://medium-api-post.mybluemix.net/articles/5ecdbe86d4d6ac0086ea90e6")
    .then(response => response.json())
    .then(({ data }) => {
      console.log(data)
      var post = data.article
      this.setState({
        Post: post
      })
      // console.log(this.state.Post)
    })
  }


  render() {
    const {isUserLogedIn} = this.props
    const { 
      title,
      // subtitle,
      image,
      description,
      // references,
      author,
      estimatedReadTime,
      date,
      views
    } = this.state.Post
    console.log(title)

    return(
      <div>
        {
          isUserLogedIn ? (
            <div>
            <Header />
            <TitlePost 
            title={title}
            subtitle="Content of Medium"/>
            <UserInfo 
            author={author}
            estimatedReadTime={estimatedReadTime}
            date={date}/>
            <ImgPost 
            image={image}/>
            <Content 
            content={description}/>
            <ViewNav 
            clicks={views}/>
            <Footer />
          </div>
          ) : (
            <LogIn/>
          )
        }
      </div>
     
    )
  }
}