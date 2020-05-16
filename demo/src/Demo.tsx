import * as React from "react";
import ReactFullscreenSlideshow from '../../src/index';
import {GalleryImages} from './GalleryImages';

export default class Demo extends React.Component{

    
    render() {
        return(
            <div>
				<ReactFullscreenSlideshow images={GalleryImages} title={'Sports Gallery'} />
            </div>
        );
    }
}