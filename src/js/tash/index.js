import React from 'react';
import ReactDOM from 'react-dom';
import WorkPopup from './work-popup';

class Tash extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopup: false,
            popupContent: false
        }

        this.renderTiles = this.renderTiles.bind(this);
        this.renderWorkPopup = this.renderWorkPopup.bind(this);
        this.closeWorkPopup = this.closeWorkPopup.bind(this);
    }

    renderTiles(tile, key) {
        if (tile.name === 'coming-soon') {
            return (<div key={key} className={`piece ${tile.name}`}><p>{tile.title}</p></div>);
        } else {
            return (<a key={key} href="#!" onClick={(e) => this.renderWorkPopup(e, tile.name)} className={`piece ${tile.name}`}><p>{tile.title}</p><h2>0{key + 1}</h2></a>);
        }
    }

    renderWorkPopup(e, name) {
        e.preventDefault();

        const {work} = this.props.portfolio, 
            popupContent = work.filter((tile) => tile.name === name);

        this.setState({showPopup: true, popupContent});
    }

    closeWorkPopup() {
        this.setState({showPopup: false});
    }

    render() {
        const {work} = this.props.portfolio,
            {showPopup, popupContent} = this.state;

        return (
            <section className="portfolio">
                <div className="row">
                    <h3>Selected Works</h3>
                    {work.map((tile, key) =>
                        this.renderTiles(tile, key)
                    )}
                </div>
                {showPopup && <WorkPopup popupContent={popupContent} onCloseClick={this.closeWorkPopup} />}
            </section>
        );
    }
}

export default Tash;