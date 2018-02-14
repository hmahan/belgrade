import React from 'react';
import Portfolio from './work';
import NoviGrad from './../novi-grad';
import Tash from './../tash';
import Savamala from './../savamala';
import StariGrad from './../stari-grad';
import Fade from 'react-reveal/Fade';

class Belgrade extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="container">
                <Fade>
        		  <NoviGrad/>
                </Fade>
                <Fade>
                    <Tash portfolio={Portfolio}/>
                </Fade>
                <Fade>
        		  <Savamala/>
                </Fade>
                <Fade>
            	   <StariGrad/>
                </Fade>
            </div>
        );
    }
}

export default Belgrade;