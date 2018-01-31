import React from 'react';
import NoviGrad from './../novi-grad'
import Savamala from './../savamala'
import StariGrad from './../stari-grad'

class Belgrade extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="container">
        		<NoviGrad/>
        		<Savamala/>
            	<StariGrad/>
            </div>
        );
    }
}

export default Belgrade;