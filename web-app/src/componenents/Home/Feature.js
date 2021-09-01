import React, { PureComponent } from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../../images/feature_1.png';
import featureimage1 from '../../images/feature_2.png';
import featureimage2 from '../../images/feature_3.png';

class Feature extends PureComponent {

    render() {
        return (
            <div id='features'>
                <div className='a-container'>
                    <FeatureBox image={featureimage} title='Learn more' />
                    <FeatureBox image={featureimage1} title='Save money' />
                    <FeatureBox image={featureimage2} title='Find your Fit' />
                </div>
            </div>
        )
    }

}

export default Feature
