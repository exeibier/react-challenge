import React, {Component} from 'react'
//CSS
import "./PrincipalsPosts.css"
export default class PrincipalsPosts extends Component{

  render (){
    return(
        <div className="ContainerPrincipals">
            <div className="PrincipalPost">
                <div >
                    <img className="card-img-principal" src={'https://picsum.photos/200'} />
                </div>
                <div className='card-container-principal'>
                    <h1 className='card-title'> The 5-Year Rule: How to Create the Future You Want</h1>
                    <p className='card-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .</p>
                    <a href='#'><small className='card-author'> Shannon Hilson in Thought Catalog</small></a>
                    <div className="markers">
                        <div >
                            <span> <small className='card-date'>May 25</small></span>
                            <small className='card-read'>3 min read</small>
                            <i class="far fa-star"></i>
                        </div>
                        <div >
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="PostsCentral">
                <article className="d-flex">
                    <div className="justify-content-start">
                        <a href=""><img src="https://picsum.photos/seed/picsum/100/100" class="" alt=""/></a>
                    </div>
                    <div className="justify-content-end">
                        <p className="article-card-title">COVID-19 Vaccine May Be Avaible in Fall</p>
                        <div className="article-card-data d-flex justify-content-between">
                            <div>
                                <p> 
                                    <a href="" className="article-card-autor">Jesse Smith in Marker</a> 
                                    <br/>
                                    <span
                                        className="article-card-date-publication justify-space-between">March 26 . 2 min read
                                    </ span>
                                </p>
                            </div>
                            <a href="" className="align-self-center ellipsis"><i class="fas fa-ellipsis-h"></i></a>
                        </div>
                    </div>
                </article>
            
                <article className="d-flex">
                    <div className="justify-content-start">
                        <a href=""><img src="https://picsum.photos/seed/picsum/100/100" class="" alt=""/></a>
                    </div>
                    <div className="justify-content-end">
                        <p className="article-card-title">COVID-19 Vaccine May Be Avaible in Fall</p>
                        <div className="article-card-data d-flex justify-content-between">
                            <div>
                                <p> 
                                    <a href="" className="article-card-autor">Jesse Smith in Marker</a> 
                                    <br/>
                                    <span
                                        className="article-card-date-publication justify-space-between">March 26 . 2 min read
                                    </ span>
                                </p>
                            </div>
                            <a href="" className="align-self-center ellipsis"><i class="fas fa-ellipsis-h"></i></a>
                        </div>
                    </div>
                </article>
            
                <article className="d-flex">
                    <div className="justify-content-start">
                        <img src="https://picsum.photos/100/100" className="img-article" alt=""/>
                    </div>
                    <div className="justify-content-end">
                        <p className="article-card-title">COVID-19 Vaccine May Be Avaible in Fall</p>
                        <div className="article-card-data d-flex justify-content-between">
                            <div>
                                <p> 
                                    <a href="" className="article-card-autor">Jesse Smith in Marker</a> 
                                    <br/>
                                    <span
                                        className="article-card-date-publication justify-space-between">March 26 . 2 min read
                                    </ span>
                                </p>
                            </div>
                            <a href="" className="align-self-center ellipsis"><i class="fas fa-ellipsis-h"></i></a>
                        </div>
                    </div>
                </article>
                    
            </div>
            <div className="SecondaryPost">
                <div >
                    <img className="card-img-principal" src={'https://picsum.photos/200'} />
                </div>
                <div className='card-container-secondary'>
                    <h1 className='card-title'> The 5-Year Rule: How to Create the Future You Want</h1>
                    <p className='card-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .</p>
                    <a href='#'><small className='card-author'> Shannon Hilson in Thought Catalog</small></a>
                    <div className="markers">
                        <div >
                            <span> <small className='card-date'>May 25</small></span>
                            <small className='card-read'>3 min read</small>
                            <i class="far fa-star"></i>
                        </div>
                        <div >
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
  }
}

