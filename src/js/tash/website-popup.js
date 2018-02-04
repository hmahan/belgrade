import React from 'react';

const WebsitePopup = ({content}) => (
    <div className="popup-inner">
        <figure className={`img-${content.name}`}></figure>
        <span className="tech">{content.tech}</span>
        <p>{content.description}</p>
        {content.links.map((link, key) => <a href={link} target="_blank">{link}</a>)}
    </div>
);

export default WebsitePopup;