# react-fullscreen-slideshow

A simple React image fullscreen slideshow component


![Capture](https://user-images.githubusercontent.com/18646185/94140600-18e72e80-fe89-11ea-9d0f-45516199554e.PNG)



[View Demo](http://arutselvan.github.io/react-fullscreen-slideshow/)

### Features

- Full screen modal slideshow with thumbnail navigation
- Slideshow preview which can be clicked on for the fullscreen view.
- Display captions and big descriptions along with the images
- The View All view can be used for navigating galleries with large number of images

### Installation

```sh
npm install --save react-fullscreen-slideshow
```

### Usage

An example using react-fullscreen-slideshow

```javascript
import React, { Component } from 'react';
import ReactFullscreenSlideshow from 'react-fullscreen-slideshow';

const images = [
    {
        image: 'images/image_1.jpg',
        caption: 'Caption for image_1',
        description: 'Description for image_1'
    },
    {
        image: 'images/image_2.jpg',
        caption: 'Caption for image_2',
        description: 'Very big description for image_2'
    },
    {
        image: 'images/image_3.jpg',
        caption: 'Image with no description'
    }
];

class App extends Component {
  render() {
    return (
        <div className="App"> 
            <ReactFullscreenSlideshow images={images} title={"Example Image slideshow"}/>
        </div>
    );
  }
}
export default App;
```

### Props

|            Prop           |       Type       |                                          Description                                          | isRequired |    Default    |
|:-------------------------:|:----------------:|:---------------------------------------------------------------------------------------------:|:----------:|:-------------:|
|          `images`         | Array of objects | Array of objects containing image, caption and description. (See above example for reference) |     Yes    |       NA      |
|          `title`          |      string      | Title of the image slideshow                                                                    |     Yes    |       NA      |
|          `cycle`          |      boolean     | Enable/disable infinite cycling of slides                                                     |     No     | ``` false ``` |
|    `currentSlideIndex`    |      number      | Index of image from which the scrolling starts. |     No     |       0       |
|    `BannerImgIndex`    |      number      | Index of the image to be used in the preview banner. |     No     |       0       |
|    `displayOverlay`    |      boolean      | Show/hide the overlay text in the preview banner |     No     |       ```true```      |
|    `displayPreviewBanner`    |      boolean      | Show/hide the preview banner |     No     |       ```true```      |
|          `width`          |      string      | Sets the width of the preview. Examples: '100%', '50vw'                                       |     No     |     '100%'    |
|          `height`         |      string      | Sets the height of the preview. Examples: '300px', '40%'                                      |     No     |     'auto'    |
| `thumbnailsToBeDisplayed` |      number      | Number of thumbnails that are visible at a time.                                              |     No     |       8       |

License
----

MIT







