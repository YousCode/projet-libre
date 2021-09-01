import React, { PureComponent } from 'react'

class FeatureBox extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { image, title } = this.props;
        return (
            <div className='a-box'>
                <div className='a-b-img'>
                    <img src={image} />
                </div>
                <div className='s-b-text'>
                    <h2> {title} </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                </div>
            </div>
        )
    }
}

export default FeatureBox
