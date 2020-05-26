import React from 'react'
import './Posts.css'
import { Row, Container, Col } from 'reactstrap';

function Posts() {
    return (
        <Container>
            <Row >
                <Col className='col-12 col-lg-8 border-line'>
                    <div className='order-2 order-lg-1'> 
                        <div id="card-gray" className="card border-0 p-5 card-gray">
                            <div className="card-body m-0 p-0 ">
                                <h2 className="text-justify title-experience ">A new way to control your experience</h2>
                                <p className=" text-justify m">Hide content from authors or publications on your Medium
                                 homepage and in emails by clicking the more icon (…) and selecting mute.
                                    </p>
                                <a href="#" className="btn btn-learn" id="button2">Learn more</a>
                            </div>
                        </div>
                    </div>

                     {/*Listado de posts */}
                     
                    <div className='d-flex justify-content-between card-container border-0'>
                        <div>
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
                        <div>
                            <img className='card-img img-fluid' src={'https://picsum.photos/200'} />
                        </div>

                    </div>
                    <div className='d-flex justify-content-between card-container border-0'>
                        <div>
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
                        <div>
                            <img className='card-img img-fluid' src={'https://picsum.photos/200'} />
                        </div>

                    </div>
                    <div className='d-flex justify-content-between card-container border-0'>
                        <div>
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
                        <div>
                            <img className=' card-img img-fluid' src={'https://picsum.photos/200'} />
                        </div>

                    </div>

                    {/*POST populares*/}

                </Col>
                <Col className='col-12 col-lg-4'>
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
                                                class="icon-star"><i class="fa fa-star"></i>
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

                        <footer class="d-none d-lg-block">
                            <div class="links-footer p-2 border-top">
                                <a className='link-a' href="#">Help</a>
                                <a className='link-a' href="#">Status</a>
                                <a className='link-a' href="#">Writers</a>
                                <a className='link-a' href="#">Blog</a>
                                <a className='link-a' href="#">Careers</a>
                                <a className='link-a' href="#">Privacy</a>
                                <a className='link-a' href="#">Terms</a>
                                <a className='link-a' href="#">About</a>
                            </div>
                        </footer>
                    </div>




                </Col>



            </Row>







        </Container >
    )
}

export default Posts;