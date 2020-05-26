import React, {Component} from 'react'
import { Row, Container, Col } from 'reactstrap';


//CSS
import './LogInHead.css'

 function LogInHead () {
    return(
        <div>
          <div className='log-in-head'>
            <a><img src='https://miro.medium.com/max/1090/1*TGH72Nnw24QL3iV9IOm4VA.png'></img></a>
            <button>log In</button> 
          </div>
        </div>
    )

}

export default LogInHead;