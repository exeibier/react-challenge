import React, {Component} from 'react'
//CSS
import "./Menu.css"
export default class Menu extends Component{
   
    
  
  render (){
    return(
        <div className="menu-wrapper">
            <button className="right-paddle paddle">
                            >
            </button>
            <div className="paddles">
                <ul className="menu">
                    <li className="item">HOME</li>
                    <li className="item">CORONAVIRUS BLOG</li>
                    <li className="item">ONEZERO</li>
                    <li className="item">ELEMENTAL</li>
                    <li className="item">GEN</li>
                    <li className="item">ZORA</li>
                    <li className="item">FORGE</li>
                    <li className="item">HUMAN PARTS</li>
                    <li className="item">MARKER</li>
                    <li className="item">LEVEL</li>
                    <li className="item">HEATED</li>
                    <li className="item">MORE</li>
                </ul>
            </div>
            <button className="right-paddle paddle">
                            >
            </button>
        </div> 
    )
  }
}

