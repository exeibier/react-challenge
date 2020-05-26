import React, {Component} from 'react'
import { Row, Container, Col } from 'reactstrap';

import LogInHead from '../../components/LogInHead'

//Services
import { LogIn as LogInService} from '../../services'

//CSS
import './LogIn.css'

export default class LogIn extends Component {
    constructor(props){
        super(props)
        this.state = {
          email: '',
          password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput({target: {name, value}}){
      this.setState({
        [name]: value
      })
    }

    handleSubmit(event){
      event.preventDefault();
      const { email, password} = this.state
      const data = {
        email, 
        password
      }
      LogInService(data)
    }

    render() {
      const {email, password} = this.state
        return(
            <Container fluid={true}>
              <LogInHead/>
                <Row>
                    <Col sm='12' xl='6' className="text-center big-picture">                
                      <div>
                        <img src='https://miro.medium.com/max/980/1*90cu6c0u4ZL8H8ic1woZDw@2x.png'></img>
                      </div>
                    </Col>  
                    <Col sm='12' xl='6' className='form-wrap'>
                    <h2>Welcome back.</h2>
                      <p>Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.</p>
                      <div className='form'>
                        <form onSubmit={this.handleSubmit}>
                            <input
                                value = {email}
                                name={'email'}
                                onChange={this.handleInput}
                                type={"email"}
                                placeholder={"Email"}
                            />
                            <input
                                value={password}
                                name={'password'}
                                onChange={this.handleInput}                    
                                type={"password"}
                                placeholder={"Password"}
                            />
                            <button type="submit">LogIn</button>
                        </form>                     
                      </div>      
                    </Col>
                </Row>
            </Container>
        )
    }



}