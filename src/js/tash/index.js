import React from 'react';

class Tash extends React.Component {
    constructor(props) {
        super(props);

        this.renderTiles = this.renderTiles.bind(this);
        this.renderWorkPopup = this.renderWorkPopup.bind(this);
    }

    renderTiles(tile, key) {
        if (tile.name === 'coming-soon') {
            return (<div key={key} className={`piece ${tile.name}`}><p>{tile.title}</p></div>);
        } else {
            return (<a key={key} href="#!" onClick={this.renderWorkPopup} className={`piece ${tile.name}`}><p>{tile.title}</p><h2>0{key + 1}</h2></a>);
        }
    }

    renderWorkPopup(e) {
        e.preventDefault();

        console.log('popup');
    }

    render() {
        const {work} = this.props.portfolio;

        return (
            <section className="portfolio">
                <div className="row">
                    <h3>Selected Works</h3>
                    {work.map((tile, key) =>
                        this.renderTiles(tile, key)
                    )}
                </div>
            </section>
        );
    }
}

export default Tash;