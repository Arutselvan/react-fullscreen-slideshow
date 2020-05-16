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

interface SocialShareBarProps {
    url: string;
    media: string;
}

export default class ReactModalGallery extends React.Component<SocialShareBarProps> {

    public url: string = window.location.href;
    public iconSize: number = 32;

    render() {
        return (
            <div className="gallery-icon-bar">
                <div className="icon"><FacebookShareButton url={this.url}> <FacebookIcon size={this.iconSize} round /> </FacebookShareButton></div>
                <div className="icon"><TwitterShareButton url={this.url}> <TwitterIcon size={this.iconSize} round /> </TwitterShareButton></div>
                <div className="icon"><LinkedinShareButton url={this.url}> <LinkedinIcon size={this.iconSize} round /> </LinkedinShareButton></div>
                <div className="icon"><WhatsappShareButton url={this.url}> <WhatsappIcon size={this.iconSize} round /> </WhatsappShareButton></div>
                <div className="icon"><PinterestShareButton url={this.url} media={this.props.media}> <PinterestIcon size={this.iconSize} round /> </PinterestShareButton></div>
            </div>
        );
    }
}