import React, { Component } from 'react'
import './Posts.css'
export default class HideContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    };

    componentDidMount() {
        //fetch("https://medium-api-post.mybluemix.net/articles")
        fetch("http://localhost:8080/articles")
            .then(response => response.json())
            .then(({ data }) => {
                console.log(data.articles)
                var postsArray = []
                for (let key in data.articles) {
                    postsArray.push({
                        key,
                        title: data.articles[key]['title'],
                        description: data.articles[key]['description'],
                        author: data.articles[key]['author'],
                        date: data.articles[key]['date'],
                        estimatedReadTime: data.articles[key]['estimatedReadTime'],
                        image: data.articles[key]['image']

                    })
                }

                this.setState({
                    posts: postsArray

                })
            })
    }

    renderPosts() {
        const { posts } = this.state;
        return posts.map(({ key, title, description, author, date, estimatedReadTime, image }) => {
            return (<div className='ContainerCard'>
                <div className='justify-content-start card-container'>
                    <p className='card-medium' key={key}>POST ON MEDIUM </p>
                    <h1 className='card-title' title={title}> </h1>
                    <p className='card-content' description={description}></p>
                    <a href='#'><small className='card-author' author={author} > in Thought Catalog</small></a>
                    <div>
                        <span> <small className='card-date' date={date}></small></span>
                        <small className='card-read' estimatedReadTime={estimatedReadTime}></small>
                        <i className="far fa-star"></i>
                        <i className="far fa-bookmark"></i>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>

                </div>
                <div className='justify-content-end'>
                    <img  className="card-img" src={image} />
                </div>
            </div>
            );

        })

    }


    render() {
        return (
            <div>
                <ul>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}
