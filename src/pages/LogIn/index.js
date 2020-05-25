import React, {Component} from 'react'
import { Row, Container, Col } from 'reactstrap';

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
                <Row>
                    <Col sm='12' xl='6' className="text-center form">
                      <h2>Welcome back.</h2>
                      <p>Sign in to get personalized story recommendations, follow authors and topics you love, and interact with stories.</p>      
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
                    </Col>
                    <Col sm='12' xl='6'>
                      <img src='https://picsum.photos/700/600'/>
                    </Col>
                </Row>
            </Container>
        )
    }



}