import React, { PureComponent } from 'react'

class About extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { image, title, button } = this.props;
        return (
            <div id='about'>
                <div className='about-image'>
                    <img src={image} alt='aboutImage' />
                </div>
                <div className='about-text'>
                    <h2> {title} </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button> {button} </button>
                </div>
            </div>
        )
    }
}

export default About
