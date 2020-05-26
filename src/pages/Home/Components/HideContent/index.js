import React, { Component } from 'react'
import './HideContent.css'

export default class HideContent extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className='order-2 order-lg-1'>
                <div id="card-gray" className="card border-0 p-5 card-gray">
                    <div className="card-body m-0 p-0 ">
                        <h2 className="text-justify title-experience ">A new way to control your experience</h2>
                        <p className=" text-justify m">Hide content from authors or publications on your Medium
                         homepage and in emails by clicking the more icon (…) and selecting mute.
                                </p>
                        <a href="#" className="btn btn-learn" id="button2">Learn more</a>
                    </div>
                </div>
            </div>

        );
    }
}

