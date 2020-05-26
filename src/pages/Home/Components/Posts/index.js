import React, { Component } from 'react'
import './Posts.css'
export default class HideContent extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
                <div className='ContainerCard'>
                    <div className='justify-content-start card-container'>
                        <p className='card-medium'> POPULAR ON MEDIUM</p>
                        <h1 className='card-title'> The 5-Year Rule: How to Create the Future You Want</h1>
                        <p className='card-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .</p>
                        <a href='#'><small className='card-author'> Shannon Hilson in Thought Catalog</small></a>
                        <div>

                            <span> <small className='card-date'>May 25</small></span>
                            <small className='card-read'>3 min read</small>
                            <i class="far fa-star"></i>
                            <i class="far fa-bookmark"></i>
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                        
                    </div>
                    <div className='justify-content-end'>
                            <img className="card-img" src={'https://picsum.photos/200'} />
                    </div>
                </div>
                );
            }
        }
