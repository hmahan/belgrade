import React from 'react';
import smoothScroll from 'smoothScroll';

class NoviGrad extends React.Component {
    constructor() {
        super();

        this.handleNavBar = this.handleNavBar.bind(this);
    }

    handleNavBar(e) {
        e.preventDefault();

        const location = document.querySelector(`#${e.target.className}`);
        smoothScroll(location);
    }

    render() {
        return (
            <header>
                <div className="row-full">
                    <nav>
                        <figure>hm</figure>
                        <ul>
                            <li><a className="portfolio" href="#" onClick={this.handleNavBar}>Portfolio</a></li>
                            <li><a href="https://medium.com/@mshaileytoyou" target="_blank">Blog</a></li>
                            <li><a className="about" href="#" onClick={this.handleNavBar}>About</a></li>
                            <li><a className="contact" href="#" onClick={this.handleNavBar}>Contact</a></li>
                        </ul>
                    </nav>
                    <h1>
                        <span>Hailey</span> Mahan
                        <small>Digital Storytelling &amp; Strategy</small>
                    </h1>
                </div>
            </header>
        );
    }
}

export default NoviGrad;