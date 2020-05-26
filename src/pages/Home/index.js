import React from 'react'
import HideContent from './Components/HideContent'
import Posts from './Components/Posts'
import RankingPost from './Components/RankingPost'
import Footer from './Components/Footer'
import './Home.css'
import { Container, Row, Col } from 'reactstrap'

function Home() {
    return (
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
    );
}

export default Home;