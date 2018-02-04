import React from 'react';
import Portfolio from './work';
import NoviGrad from './../novi-grad';
import Tash from './../tash';
import Savamala from './../savamala';
import StariGrad from './../stari-grad';

class Belgrade extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="container">
        		<NoviGrad/>
                <Tash portfolio={Portfolio}/>
        		<Savamala/>
            	<StariGrad/>
            </div>
        );
    }
}

export default Belgrade;