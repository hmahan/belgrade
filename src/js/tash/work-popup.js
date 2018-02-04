import React from 'react';
import WebsitePopup from './website-popup';
import ArticlePopup from './article-popup';

class WorkPopup extends React.Component {
    constructor(props){
        super(props);

        this.renderPopupContent = this.renderPopupContent.bind(this);
    }

    renderPopupContent(content) {
        if (content.type === 'article') {
            return (<ArticlePopup content={content}/>);
        } else {
            return (<WebsitePopup content={content}/>);
        }
    }
    
    render(){
        const {onCloseClick, popupContent: [first]} = this.props;

        return (
            <div className="work-popup">
                <div className={`popup-wrap ${first.type}`}>
                    <span className="btn-close" onClick={() => {onCloseClick()}}>+</span>
                    {this.renderPopupContent(first)}
                </div>
            </div>
        )
    }
}

export default WorkPopup;
