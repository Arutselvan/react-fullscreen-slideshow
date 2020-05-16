import * as React from "react";
import ReactFullscreenSlideshow from '../../src/index';
import {GalleryImages} from './GalleryImages';
import './css/demo.css';

export default class Demo extends React.Component{

    
    render() {
        return(
            <div className="container">
                <div className="title">
                    <h1>react-fullscreen-slideshow</h1>
                </div>
                <div className="slideshow">
                    <ReactFullscreenSlideshow images={GalleryImages} currentSlideIndex={0} title={'Sports Gallery'}/>
                </div>
            </div>
        );
    }
}