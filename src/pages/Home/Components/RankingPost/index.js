import React, { Component } from 'react'
import './RankingPost.css'


export default class RankingPost extends Component {
    constructor(props) {
        super(props)
    };


    render() {
        return (

            <div className=' order-1 order-lg-2 mb-4 mt-3'>
                <ul className="list-group list-group-flush">
                    <h3 className="border-bottom  p-3">Popular on medium</h3>
                    <div>
                        <li className='ranking-list'>
                            <span className="ranking-post align-self-start mt-3">01</span>
                            <div>
                                <p className='font-weight-bold mt-3'>My Journey Toward Radical Body Positivity</p>
                                <p className='m-0'>Matt McGorry in Human Parts</p>
                                <p data-toggle="tooltip" data-placement="top" title="Update Mar 28">
                                    <span class="article-card-date-publication card-text m-0">
                                        <small
                                            class="text-muted">May 26 . 2 min read
                                                </small>
                                    </span>
                                    <span
                                        class="icon-star"><i class="far fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        </li>

                    </div>

                    <div>
                        <li className='ranking-list'>
                            <span className="ranking-post align-self-start mt-3">02</span>
                            <div>
                                <p className='font-weight-bold mt-3'>My Journey Toward Radical Body Positivity</p>
                                <p className='m-0'>Matt McGorry in Human Parts</p>
                                <p data-toggle="tooltip" data-placement="top" title="Update Mar 28">
                                    <span class="article-card-date-publication card-text m-0">
                                        <small
                                            class="text-muted">May 12 . 2 min read
                                                </small>
                                    </span>
                                    <span
                                        class="icon-star"><i class="far fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        </li>

                    </div>
                    <div>
                        <li className='ranking-list'>
                            <span className="ranking-post align-self-start mt-3">03</span>
                            <div>
                                <p className='font-weight-bold mt-3'>My Journey Toward Radical Body Positivity</p>
                                <p className='m-0'>Matt McGorry in Human Parts</p>
                                <p data-toggle="tooltip" data-placement="top" title="Update Mar 28">
                                    <span class="article-card-date-publication card-text m-0">
                                        <small
                                            class="text-muted">May 16 . 2 min read
                        </small>
                                    </span>
                                    <span
                                        class="icon-star"><i class="far fa-star"></i>
                                    </span>
                                </p>
                            </div>
                        </li>

                    </div>


                </ul>
            </div>




        );
    }
}
