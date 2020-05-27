import React, {Component} from 'react'
import { Row, Container, Col } from 'reactstrap';

import LogInHead from '../../components/LogInHead'
//External packages
import {Redirect} from 'react-router-dom';

//Services
import { LogIn as LogInService} from '../../services'

//CSS
import './LogIn.css'

export default class LogIn extends Component {
    constructor(props){
        super(props)
        this.state = {
          email: '',
          password: '',
          success: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleServiceResponse = this.handleServiceResponse.bind(this)
    }
    handleInput({target: {name, value}}){
      this.setState({
        [name]: value
      })
    }

    handleServiceResponse (response) {
      if (response.success) {
        localStorage.setItem('authTokenUser', response.data.token)
        this.setState({
          success: true
        })
      }
      console.log(response.error)
    }

    handleSubmit(event){
      event.preventDefault();
      const { email, password} = this.state
      const data = {
        email, 
        password
      }
      LogInService(data, this.handleServiceResponse)
    }

    render() {
      const {email, password, success} = this.state
        return(
            <Container fluid={true}>
              {success ? <Redirect to='/posts'/> : null}  
              <LogInHead/>
                <Row className='login-component'>
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
                                required
                            />
                            <input
                                value={password}
                                name={'password'}
                                onChange={this.handleInput}                    
                                type={"password"}
                                placeholder={"Password"}
                                required
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