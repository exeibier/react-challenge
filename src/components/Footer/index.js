import React, {Component} from 'react'
import './Footer.css'

export default class Footer extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <footer class="d-none d-lg-block">
                <div class="links-footer p-2 border-top">
                    <div>
                        <a className='link-a' href="#">Help</a>
                        <a className='link-a' href="#">Status</a>
                        <a className='link-a' href="#">Writers</a>
                        <a className='link-a' href="#">Blog</a>
                        <a className='link-a' href="#">Careers</a>
                    </div>
                    <div>
                        <a className='link-a' href="#">Privacy</a>
                        <a className='link-a' href="#">Terms</a>
                        <a className='link-a' href="#">About</a>
                    </div>
                   
                </div>
            </footer>
        )
    }
}

