import * as React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    PinterestIcon,
    PinterestShareButton
} from 'react-share';

import './SocialShareBar.scss';

interface SocialShareBarProps {
    url: string;
    media: string;
}

export default class ReactModalGallery extends React.Component<SocialShareBarProps> {

    public url: string = window.location.href;
    public iconSize: number = 32;

    render() {
        return (
            <div className="react-fullscreen-slideshow-gallery-icon-bar">
                <div className="share-button"><FacebookShareButton url={this.url}> <FacebookIcon size={this.iconSize} round /> </FacebookShareButton></div>
                <div className="share-button"><TwitterShareButton url={this.url}> <TwitterIcon size={this.iconSize} round /> </TwitterShareButton></div>
                <div className="share-button"><LinkedinShareButton url={this.url}> <LinkedinIcon size={this.iconSize} round /> </LinkedinShareButton></div>
                <div className="share-button"><WhatsappShareButton url={this.url}> <WhatsappIcon size={this.iconSize} round /> </WhatsappShareButton></div>
                <div className="share-button"><PinterestShareButton url={this.url} media={this.props.media}> <PinterestIcon size={this.iconSize} round /> </PinterestShareButton></div>
            </div>
        );
    }
}