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
        fetch("http://localhost:8080")
            .then(response => response.json())
            .then(({ posts }) => {
                var postsArray = []
                for (let key in posts) {
                    postsArray.push({
                        key,
                        title: posts[key]['title'],
                        description: posts[key]['description'],
                        author: posts[key]['author'],
                        date: posts[key]['date'],
                        estimatedReadtime: posts[key]['estimatedReadtime'],
                        image: posts[key]['image']

                    })
                }

                this.setState({
                    posts: postsArray

                })
            })
    }

    renderPosts() {
        const { posts } = this.state;
        return posts.map(({ key, title, description, author, date, estimatedReadtime, image }) => {
            return (<div className='ContainerCard'>
                <div className='justify-content-start card-container'>
                    <p className='card-medium'>POST ON MEDIUM {key}</p>
                    <h1 className='card-title'> {title}</h1>
                    <p className='card-content'>{description}</p>
                    <a href='#'><small className='card-author'> {author} in Thought Catalog</small></a>
                    <div>
                        <span> <small className='card-date'>{date}</small></span>
                        <small className='card-read'>{estimatedReadtime}</small>
                        <i class="far fa-star"></i>
                        <i class="far fa-bookmark"></i>
                        <i class="fas fa-ellipsis-h"></i>
                    </div>

                </div>
                <div className='justify-content-end'>
                    <img className="card-img" src={image} />
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
