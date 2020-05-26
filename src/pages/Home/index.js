import React from 'react'
import './Home.css'
import Header from './Components/Header'
import Menu from './Components/Menu'
import PostPrincipal from './Components/PostPrincipal'

function Home(){
    return(
        <div className="Container">
          
            <Header/>
            <Menu/>
            <PostPrincipal/>
            <div className="containerSeeEditors">
                <div className="containerLink">
                <a className="link">SEE EDITOR’S PICKS</a>
                </div>
            </div>
            <div className="separator"></div>
            
        </div>
    );
}

export default Home;