import React from 'react'
import './Home.css'
import Header from '../../components/Header'
import Menu from './Components/Menu'
import PrincipalPosts from './Components/PrincipalsPosts'
import HideContent from './Components/HideContent'
import Posts from './Components/Posts'
import RankingPost from './Components/RankingPost'
import Footer from '../../components/Footer'
import { Container, Row, Col } from 'reactstrap'

function Home(){
    return(
        <div className="Container">
            
            <Header/>
            <Menu/>
            <PrincipalPosts/>
            <div className="containerSeeEditors">
                <div className="containerLink">
                <a className="link">SEE EDITOR’S PICKS</a>
                </div>
            </div>
            <div className="separator"></div>
            <Container>
            <Row>
                <div className="col-12 col-lg-8 ">
                    <HideContent/>
                    <Posts />
                </div>
                <div className="col-12 col-lg-4">
                    <RankingPost />
                    <Footer/>
                </div>
            </Row>
        </Container>
            
        </div>
    )
}

export default Home;