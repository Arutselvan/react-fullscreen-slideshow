

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactShare = require('react-share');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

___$insertStyle(".react-modal-gallery {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  margin: auto;\n}\n\n.preview-bottom-text {\n  position: absolute;\n  left: 50px;\n  color: white;\n}\n\n.preview-overlay {\n  position: absolute;\n  bottom: 0;\n  width: 95%;\n}\n\n.preview-bottom-pane {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 100%;\n}\n\n.photos-box-icon {\n  position: absolute;\n  left: 15px;\n}\n\n.react-modal-gallery img {\n  max-width: 100%;\n  max-height: inherit;\n}\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  overflow-y: hidden;\n}\n\n.modal-content {\n  margin: auto;\n  padding: 0;\n  height: 75%;\n  display: flex;\n  flex-wrap: wrap;\n  /* background:linear-gradient(to bottom,rgba(0,0,0,0) 0%,rgba(0,0,0,0.8) 100%); */\n  background-color: #121212;\n}\n\n.modal-top {\n  border-bottom: 3px solid rgba(255, 255, 255, 0.1);\n  height: 10%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal-bottom {\n  border-top: 3px solid rgba(255, 255, 255, 0.1);\n  min-height: 15vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-content: center;\n  align-items: center;\n}\n\n.close {\n  color: white;\n  position: absolute;\n  left: 25px;\n  font-size: 35px;\n  font-weight: bold;\n  display: none;\n}\n\n.close-view-all {\n  position: absolute;\n  right: 25px;\n  top: 20px;\n  font-size: 40px;\n  text-align: right;\n  display: block;\n}\n\n.close:hover, .close:focus, .close-text:hover, .close-text:focus, #view-slides-link:hover, #view-slides-link:focus {\n  color: #999;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.view-all-thumbnails img {\n  margin: 2px;\n  /* max-width: 9vw; */\n  max-height: 8vh;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.slides {\n  height: 100%;\n  display: flex;\n  margin-top: 0;\n  margin-bottom: 0;\n  justify-content: center;\n  align-items: center;\n  flex: 10 0 65%;\n  border-right: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.slides img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.view-all-modal-content {\n  height: 100%;\n  width: 75%;\n  display: flex;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n  flex-flow: column;\n}\n\n.view-all-gallery-name {\n  color: white;\n  width: 100%;\n  text-align: center;\n  line-height: normal;\n  margin-bottom: 20px;\n}\n\n.view-all-thumbnails {\n  width: 75%;\n  max-height: 75vh;\n  display: flex;\n  flex-wrap: wrap;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n  overflow-y: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.view-all-thumbnails::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.view-all-modal {\n  display: none;\n  position: fixed;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 1;\n  backdrop-filter: blur(30px);\n  overflow-y: hidden;\n}\n\n.prev-mobile, .next-mobile {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 3vw;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  background-color: gray;\n  opacity: 0.75;\n  user-select: none;\n  -webkit-user-select: none;\n  display: none;\n}\n\n.prev, .next {\n  cursor: pointer;\n  width: auto;\n  padding: 12px;\n  font-weight: bold;\n  font-size: 20px;\n  transition: 0.6s ease;\n  user-select: none;\n  -webkit-user-select: none;\n  background: transparent;\n  border: none;\n  outline: none;\n}\n\n.next-mobile {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n.prev:hover, .next:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.bottom-right-pane {\n  position: absolute;\n  right: 30px;\n  display: flex;\n}\n\n.bottom-left-pane {\n  cursor: pointer;\n  position: absolute;\n  left: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.bottom-text {\n  width: auto;\n  padding: 0 5px;\n  color: white !important;\n  font-size: 16px;\n}\n\n.tile-button {\n  position: relative;\n  background-color: transparent;\n  padding: 5px;\n  height: 20px;\n  width: 20px;\n  -webkit-transition: opacity 0.5s cubic-bezier(0.4, 0, 0.6, 1) 0.3s;\n  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.6, 1) 0.3s;\n}\n\n.modal-gallery-title {\n  color: white;\n  font-size: 12px;\n  font-weight: bolder;\n}\n\n.gallery-title {\n  color: white;\n  padding: 2vh 0;\n  border-bottom: 0.25px solid gray;\n  line-height: normal;\n  font-weight: bolder;\n}\n\n.tile-row {\n  height: 10px;\n  width: 100%;\n}\n\n.tile-block {\n  transition: background-color 0.3s;\n  display: inline-block;\n  vertical-align: top;\n  background-color: #f7f7f7;\n  height: 8px;\n  width: 8px;\n  margin: 1px;\n}\n\n.numbertext {\n  width: auto;\n  padding: 0 5px;\n  color: #f2f2f2;\n  font-size: 14px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.caption-container {\n  text-align: left;\n  background-color: #121212;\n  color: white;\n  font-size: 12px;\n  width: 100%;\n  flex: 1 0 0;\n  margin: 0 15px;\n  max-height: 100%;\n  position: relative;\n}\n\n#caption {\n  margin: 0 auto;\n  min-width: 300px;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.image-title {\n  font-weight: bolder;\n}\n\n.desc {\n  font-weight: normal;\n  color: grey;\n}\n\nimg.demo {\n  opacity: 0.6;\n}\n\n.active, .demo:hover {\n  opacity: 1;\n}\n\nimg.hover-shadow {\n  transition: 0.3s;\n}\n\n.hover-shadow:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.thumbnails-list {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.slideshow-info {\n  padding: 2vh 0;\n}\n\n#photos-icon {\n  width: 30px;\n  height: 25px;\n  display: inline-block;\n  padding-right: 0.75rem;\n  vertical-align: middle;\n  /* font-size: 0.8125rem; */\n  line-height: 0.8125rem;\n  /* font-size: 0.9375rem;\r\n  line-height: 0.9375rem; */\n}\n\n#count {\n  color: white;\n  display: inline-block;\n  font-size: 0.8125rem;\n  line-height: 0.8125rem;\n  vertical-align: middle;\n}\n\n#view-slides-link {\n  display: inline-block;\n  color: white;\n  font-size: 0.8125rem;\n  line-height: 0.8125rem;\n  padding-right: 0.75rem;\n  vertical-align: middle;\n}\n\n#pipe {\n  display: inline-block;\n  color: white;\n  margin: 0 20px;\n  font-size: 0.8125rem;\n  line-height: 0.8125rem;\n  vertical-align: middle;\n}\n\n.gallery-icon-bar {\n  position: absolute;\n  bottom: 0;\n}\n\n.close-text {\n  color: white;\n  position: absolute;\n  left: 25px;\n  font-size: 16px;\n  display: block;\n}\n\n@media (max-width: 960px) {\n  #caption {\n    min-width: 90vw;\n  }\n\n  .gallery-icon-bar {\n    display: none;\n  }\n\n  .gallery-title {\n    font-size: 14px;\n    padding: 0;\n  }\n\n  .slides {\n    border: none;\n  }\n\n  #caption {\n    /* padding-top: 20px; */\n    max-width: 90vw;\n    text-align: center;\n    font-size: 12px;\n    line-height: normal;\n  }\n\n  .caption-container {\n    margin: 0;\n    height: 100px;\n  }\n\n  .modal-content {\n    height: 60%;\n  }\n\n  .modal-bottom {\n    min-height: 12vh;\n    bottom: 0;\n    position: fixed;\n  }\n\n  .thumbnails-list {\n    display: none;\n  }\n\n  .widescreen-arrows {\n    display: none;\n  }\n\n  .bottom-left-pane {\n    left: 0;\n    right: 0;\n  }\n\n  .prev-mobile, .next-mobile {\n    display: block;\n  }\n\n  .view-all-gallery-name {\n    font-size: 12px;\n  }\n\n  .modal-gallery-title {\n    font-size: 2.125vw;\n  }\n\n  .close {\n    display: block;\n  }\n\n  .close-text {\n    display: none;\n  }\n\n  .slideshow-info {\n    padding: 0;\n  }\n}");

const img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABE0lEQVR4Ae3YJVCEURRAYdwLmnApWB+chNYl49ZouPXBrRHRiDv0ntCCV1wPTlt9b1bunfl+l5OfW2lDk12TQAn88fb25gt/TfzgbnLgd1w/9rCj2C6mEWFOoD92oGuOEWNu4AoecKvIHV4tDfRACrKQqUgZzkwK5GYIKtCIhm+1qFGgDvmIxbGpgem4hq6ZQZw9B86aGxiLaSxjSYFFbOPW0kB3eCnkiUScmBTISRIGMabBBAyIxrGpgbm4ha4ZQZTjBUqgBEqgBErgwff5IaLtKXAOQSiEAUUIsKfAeXh+tPznyIESOIowTGINLfCwp8Cx7/96wwde30H2Ffif6kAJjEYrutGlWC+KZQHTRiRQAt8Bc5MAo5hK7K0AAAAASUVORK5CYII=";

var ReactModalGallery = /** @class */ (function (_super) {
    __extends(ReactModalGallery, _super);
    function ReactModalGallery() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.url = window.location.href;
        _this.iconSize = 32;
        return _this;
    }
    ReactModalGallery.prototype.render = function () {
        return (React.createElement("div", { className: "gallery-icon-bar" },
            React.createElement("div", { className: "icon" },
                React.createElement(reactShare.FacebookShareButton, { url: this.url },
                    " ",
                    React.createElement(reactShare.FacebookIcon, { size: this.iconSize, round: true }),
                    " ")),
            React.createElement("div", { className: "icon" },
                React.createElement(reactShare.TwitterShareButton, { url: this.url },
                    " ",
                    React.createElement(reactShare.TwitterIcon, { size: this.iconSize, round: true }),
                    " ")),
            React.createElement("div", { className: "icon" },
                React.createElement(reactShare.LinkedinShareButton, { url: this.url },
                    " ",
                    React.createElement(reactShare.LinkedinIcon, { size: this.iconSize, round: true }),
                    " ")),
            React.createElement("div", { className: "icon" },
                React.createElement(reactShare.WhatsappShareButton, { url: this.url },
                    " ",
                    React.createElement(reactShare.WhatsappIcon, { size: this.iconSize, round: true }),
                    " ")),
            React.createElement("div", { className: "icon" },
                React.createElement(reactShare.PinterestShareButton, { url: this.url, media: this.props.media },
                    " ",
                    React.createElement(reactShare.PinterestIcon, { size: this.iconSize, round: true }),
                    " "))));
    };
    return ReactModalGallery;
}(React.Component));

var ReactFullscreenSlideshow = /** @class */ (function (_super) {
    __extends(ReactFullscreenSlideshow, _super);
    function ReactFullscreenSlideshow(props) {
        var _this = _super.call(this, props) || this;
        _this.imagesCount = _this.props.images.length;
        _this.state = {
            modalDisplay: "none",
            viewAllmodalDisplay: "none",
            currentSlideIndex: _this.props.currentSlideIndex,
            currentThumbNails: null,
            allThumbNails: null,
            leftArrowDisplay: "white",
            rightArrowDisplay: "white",
        };
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        return _this;
    }
    ReactFullscreenSlideshow.prototype.openModal = function () {
        this.setState({
            modalDisplay: "block",
        });
        document.body.style.overflow = "hidden";
    };
    ReactFullscreenSlideshow.prototype.openViewAllModal = function () {
        this.setState({
            viewAllmodalDisplay: "block",
        });
    };
    ReactFullscreenSlideshow.prototype.closeModal = function () {
        this.setState({
            modalDisplay: "none",
            currentSlideIndex: this.props.currentSlideIndex,
        });
        document.body.style.overflow = "auto";
    };
    ReactFullscreenSlideshow.prototype.closeViewAllModal = function () {
        this.setState({
            viewAllmodalDisplay: "none",
        });
    };
    ReactFullscreenSlideshow.prototype.trackArrowColor = function () {
        if (this.state.currentSlideIndex === this.imagesCount - 1 &&
            !this.props.cycle) {
            this.setState({
                rightArrowDisplay: "gray",
            });
        }
        else {
            this.setState({
                rightArrowDisplay: "white",
            });
        }
        if (this.state.currentSlideIndex === 0 && !this.props.cycle) {
            this.setState({
                leftArrowDisplay: "gray",
            });
        }
        else {
            this.setState({
                leftArrowDisplay: "white",
            });
        }
    };
    ReactFullscreenSlideshow.prototype.nextSlide = function () {
        var _this = this;
        var nextSlideIndex = this.state.currentSlideIndex + 1;
        if (nextSlideIndex > this.imagesCount - 1) {
            if (this.props.cycle) {
                nextSlideIndex = 0;
            }
            else {
                return;
            }
        }
        this.setState({
            currentSlideIndex: nextSlideIndex,
        }, function () {
            _this.constructThumbnails();
            _this.constructViewAllThumbnails();
            if (!_this.props.cycle) {
                _this.trackArrowColor();
            }
        });
    };
    ReactFullscreenSlideshow.prototype.prevSlide = function () {
        var _this = this;
        var prevSlideIndex = this.state.currentSlideIndex - 1;
        if (prevSlideIndex < 0) {
            if (this.props.cycle) {
                prevSlideIndex = this.imagesCount - 1;
            }
            else {
                return;
            }
        }
        this.setState({
            currentSlideIndex: prevSlideIndex,
        }, function () {
            _this.constructThumbnails();
            _this.constructViewAllThumbnails();
            if (!_this.props.cycle) {
                _this.trackArrowColor();
            }
        });
    };
    ReactFullscreenSlideshow.prototype.viewCurrentThumbnail = function (thumbnailIndex) {
        var _this = this;
        this.setState({
            currentSlideIndex: thumbnailIndex,
            viewAllmodalDisplay: "none",
        }, function () {
            _this.constructThumbnails();
            _this.constructViewAllThumbnails();
        });
    };
    ReactFullscreenSlideshow.prototype.constructThumbnails = function () {
        var _this = this;
        var thumbnails = [];
        var thumbnailWidth = Math.floor(50 / this.props.thumbnailsToBeDisplayed);
        var currentThumbNailSet = Math.floor(this.state.currentSlideIndex / this.props.thumbnailsToBeDisplayed);
        var start = this.props.thumbnailsToBeDisplayed * currentThumbNailSet;
        var end = start + this.props.thumbnailsToBeDisplayed < this.imagesCount
            ? start + this.props.thumbnailsToBeDisplayed
            : this.imagesCount;
        var currentSlideIndex = this.state.currentSlideIndex;
        this.props.images.forEach(function (thumbnail, index) {
            if (index >= start && index < end) {
                if (index === currentSlideIndex) {
                    thumbnails.push(React.createElement("img", { style: {
                            maxWidth: thumbnailWidth + "vw",
                            maxHeight: "10vh",
                            background: "rgba(0, 0, 0, .5)",
                            border: "3px solid white",
                        }, alt: thumbnail.caption, onClick: function () { return _this.viewCurrentThumbnail(index); }, src: thumbnail.image, key: index }));
                }
                else {
                    thumbnails.push(React.createElement("img", { style: {
                            maxWidth: thumbnailWidth + "vw",
                            maxHeight: "10vh",
                            background: "rgba(0, 0, 0, .5)",
                            opacity: "0.5",
                        }, alt: thumbnail.caption, onClick: function () { return _this.viewCurrentThumbnail(index); }, src: thumbnail.image, key: index }));
                }
            }
        }, this);
        this.setState({
            currentThumbNails: thumbnails,
        });
    };
    ReactFullscreenSlideshow.prototype.constructViewAllThumbnails = function () {
        var _this = this;
        var thumbnails = [];
        var currentSlideIndex = this.state.currentSlideIndex;
        this.props.images.forEach(function (thumbnail, index) {
            if (index === currentSlideIndex) {
                thumbnails.push(React.createElement("img", { style: { border: "3px solid white" }, alt: thumbnail.caption, onClick: function () { return _this.viewCurrentThumbnail(index); }, src: thumbnail.image, key: index }));
            }
            else {
                thumbnails.push(React.createElement("img", { alt: thumbnail.caption, onClick: function () { return _this.viewCurrentThumbnail(index); }, src: thumbnail.image, key: index }));
            }
        }, this);
        this.setState({
            allThumbNails: thumbnails,
        });
    };
    ReactFullscreenSlideshow.prototype.handleKeyDown = function (event) {
        var isModalOpen = this.state.modalDisplay === "block" ? true : false;
        if (event.keyCode === 37 && isModalOpen) {
            this.prevSlide();
        }
        if (event.keyCode === 39 && isModalOpen) {
            this.nextSlide();
        }
    };
    ReactFullscreenSlideshow.prototype.componentDidMount = function () {
        this.constructThumbnails();
        this.constructViewAllThumbnails();
        if (!this.props.cycle) {
            this.trackArrowColor();
        }
        window.addEventListener("keydown", this.handleKeyDown);
    };
    ReactFullscreenSlideshow.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { style: {
                    maxWidth: this.props.width,
                    maxHeight: this.props.height,
                }, className: 'react-modal-gallery' },
                React.createElement("img", { src: this.props.images[this.props.currentSlideIndex]
                        .image, alt: this.props.images[this.props.currentSlideIndex]
                        .caption, className: 'gallery-preview' }),
                React.createElement("div", { className: 'preview-overlay' },
                    React.createElement("div", { className: 'gallery-title' }, this.props.title),
                    React.createElement("div", { className: "slideshow-info" },
                        React.createElement("div", { className: "photos-count" },
                            React.createElement("img", { id: "photos-icon", src: img /* Temporary fix*/, alt: "photos-icon" }),
                            React.createElement("div", { id: "count" }, this.imagesCount + " photos"),
                            React.createElement("div", { id: "pipe" }, "|"),
                            React.createElement("div", { id: "view-slides-link", onClick: function () { return _this.openModal(); } }, "View Slide Show \u203A"))))),
            React.createElement("div", { id: 'gallery-modal', className: 'modal', style: { display: this.state.modalDisplay } },
                React.createElement("div", { className: 'modal-top' },
                    React.createElement("span", { className: 'modal-gallery-title' }, this.props.title),
                    React.createElement("span", { className: 'close cursor', onClick: function () { return _this.closeModal(); } }, "\u00D7"),
                    React.createElement("span", { className: 'close-text cursor', onClick: function () { return _this.closeModal(); } }, '❮ Back to article')),
                React.createElement("div", { className: 'modal-content' },
                    React.createElement("div", { className: 'slides' },
                        React.createElement("img", { src: this.props.images[this.state.currentSlideIndex].image, alt: this.props.images[this.state.currentSlideIndex].caption })),
                    React.createElement("button", { className: 'prev-mobile', onClick: function () { return _this.prevSlide(); } }, "\u276E"),
                    React.createElement("button", { className: 'next-mobile', onClick: function () { return _this.nextSlide(); } }, "\u276F"),
                    React.createElement("div", { className: 'caption-container' },
                        React.createElement("div", { id: 'caption' },
                            React.createElement("p", { className: 'image-title' }, this.props.images[this.state.currentSlideIndex].caption),
                            React.createElement("p", { className: 'desc' }, this.props.images[this.state.currentSlideIndex].description)),
                        React.createElement(ReactModalGallery, { url: window.location.href, media: this.props.images[this.props.currentSlideIndex].image })),
                    React.createElement("div", { className: 'modal-bottom' },
                        React.createElement("div", { className: 'thumbnails-list' }, this.state.currentThumbNails),
                        React.createElement("div", { onClick: function () { return _this.openViewAllModal(); }, className: 'bottom-left-pane' },
                            React.createElement("div", { className: 'view-all-box' },
                                React.createElement("div", { className: 'tile-button' },
                                    React.createElement("div", { className: 'tile-row' },
                                        React.createElement("div", { className: 'tile-block' }),
                                        React.createElement("div", { className: 'tile-block' })),
                                    React.createElement("div", { className: 'tile-row' },
                                        React.createElement("div", { className: 'tile-block' }),
                                        React.createElement("div", { className: 'tile-block' })))),
                            React.createElement("div", { className: 'bottom-text' }, "View All")),
                        React.createElement("div", { className: 'bottom-right-pane' },
                            React.createElement("div", { className: 'numbertext' },
                                " ",
                                this.state.currentSlideIndex + 1,
                                " /",
                                " ",
                                this.imagesCount),
                            React.createElement("div", { className: 'widescreen-arrows' },
                                React.createElement("button", { className: 'prev', style: {
                                        color: this.state.leftArrowDisplay,
                                    }, onClick: function () { return _this.prevSlide(); } }, "\u276E"),
                                React.createElement("button", { className: 'next', style: {
                                        color: this.state.rightArrowDisplay,
                                    }, onClick: function () { return _this.nextSlide(); } }, "\u276F")))))),
            React.createElement("div", { id: 'va-modal', className: 'view-all-modal', style: { display: this.state.viewAllmodalDisplay } },
                React.createElement("span", { className: 'close cursor close-view-all', onClick: function () { return _this.closeViewAllModal(); } }, "\u00D7"),
                React.createElement("div", { className: 'view-all-modal-content' },
                    React.createElement("div", { className: 'view-all-gallery-name normal-text' }, this.props.title),
                    React.createElement("div", { className: 'thumbnail-grid' },
                        React.createElement("div", { className: 'view-all-thumbnails' }, this.state.allThumbNails))))));
    };
    ReactFullscreenSlideshow.defaultProps = {
        cycle: false,
        currentSlideIndex: 0,
        width: "100%",
        height: "50vh",
        thumbnailsToBeDisplayed: 8,
        maxViewAllThumbnailsPerRow: 4,
    };
    return ReactFullscreenSlideshow;
}(React.Component));

exports.default = ReactFullscreenSlideshow;
//# sourceMappingURL=index.js.map
