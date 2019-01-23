import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            surprise:false
        }
    }
        setSurprise(surprise) {
            event.preventDefault;
            console.log('showGif ran')
            this.setState({surprise})
        }

    render() {
        // Show the button to start with
        if (!this.state.surprise) {
        return <SurpriseButton handleClick={() => this.setSurprise(true)}/>;
        } else {
            return <SurpriseImage />;
        }
    }
}
