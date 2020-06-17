import * as React from "react";
import "./styles.scss";
import SocialShareBar from "./components/SocialShareBar/SocialShareBar";

interface image {
	image: string;
	caption: string;
	description?: string;
}

interface ReactFullscreenSlideshowProps {
	images: image[];
	title: string;
	cycle?: boolean;
	currentSlideIndex?: number;
	BannerImgIndex?: number;
	width?: string;
	height?: string;
	thumbnailsToBeDisplayed?: number;
	maxViewAllThumbnailsPerRow?: number;
	displayOverlay?: boolean;
	displayPreviewBanner?: boolean;
}

interface ReactFullscreenSlideshowState {
	modalDisplay: string;
	viewAllmodalDisplay: string;
	currentSlideIndex: number;
	currentThumbNails: JSX.Element[] | null;
	allThumbNails: JSX.Element[] | null;
	leftArrowDisplay: string;
	rightArrowDisplay: string;
	modalClass: string;
}

export default class ReactFullscreenSlideshow extends React.Component<
	ReactFullscreenSlideshowProps,
	ReactFullscreenSlideshowState
> {
	public static defaultProps = {
		cycle: false,
		currentSlideIndex: 0,
		width: "100%",
		height: "auto",
		thumbnailsToBeDisplayed: 8,
		maxViewAllThumbnailsPerRow: 4,
		BannerImgIndex: 0,
		displayOverlay: true,
		displayPreviewBanner: true
	};

	public imagesCount: number;
	public photosIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABE0lEQVR4Ae3YJVCEURRAYdwLmnApWB+chNYl49ZouPXBrRHRiDv0ntCCV1w
		PTlt9b1bunfl+l5OfW2lDk12TQAn88fb25gt/TfzgbnLgd1w/9rCj2C6mEWFOoD92oGuOEWNu4AoecKvIHV4tDfRACrKQqUgZzkwK5GYIKtCIhm+1qFGgDvmIxbGpgem4hq
		6ZQZw9B86aGxiLaSxjSYFFbOPW0kB3eCnkiUScmBTISRIGMabBBAyIxrGpgbm4ha4ZQZTjBUqgBEqgBErgwff5IaLtKXAOQSiEAUUIsKfAeXh+tPznyIESOIowTGINLfCwp8
		Cx7/96wwde30H2Ffif6kAJjEYrutGlWC+KZQHTRiRQAt8Bc5MAo5hK7K0AAAAASUVORK5CYII=`;
	constructor(props: ReactFullscreenSlideshowProps) {
		super(props);
		this.imagesCount = this.props.images.length;
		this.state = {
			modalDisplay: "none",
			viewAllmodalDisplay: "none",
			currentSlideIndex: this.props.currentSlideIndex as number,
			currentThumbNails: null,
			allThumbNails: null,
			leftArrowDisplay: "white",
			rightArrowDisplay: "white",
			modalClass: "react-fullscreen-slideshow-modal",
		};
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	openModal() {
		this.setState({
			modalDisplay: "block",
		});
		document.body.style.overflow = "hidden";
	}

	openViewAllModal() {
		this.setState({
			viewAllmodalDisplay: "block",
			modalClass: "react-fullscreen-slideshow-modal-blur",
		});
	}

	closeModal() {
		this.setState({
			modalDisplay: "none",
			currentSlideIndex: this.props.currentSlideIndex as number,
		},
		() => {
			this.constructThumbnails();
			this.constructViewAllThumbnails();
			if (!this.props.cycle) {
				this.trackArrowColor();
			}
		});
		document.body.style.overflow = "auto";
	}

	closeViewAllModal() {
		this.setState({
			viewAllmodalDisplay: "none",
			modalClass: "react-fullscreen-slideshow-modal",
		});
	}

	trackArrowColor() {
		if (
			this.state.currentSlideIndex === this.imagesCount - 1 &&
			!this.props.cycle
		) {
			this.setState({
				rightArrowDisplay: "gray",
			});
		} else {
			this.setState({
				rightArrowDisplay: "white",
			});
		}

		if (this.state.currentSlideIndex === 0 && !this.props.cycle) {
			this.setState({
				leftArrowDisplay: "gray",
			});
		} else {
			this.setState({
				leftArrowDisplay: "white",
			});
		}
	}

	nextSlide() {
		let nextSlideIndex = this.state.currentSlideIndex + 1;
		if (nextSlideIndex > this.imagesCount - 1) {
			if (this.props.cycle) {
				nextSlideIndex = 0;
			} else {
				return;
			}
		}

		this.setState(
			{
				currentSlideIndex: nextSlideIndex,
			},
			() => {
				this.constructThumbnails();
				this.constructViewAllThumbnails();
				if (!this.props.cycle) {
					this.trackArrowColor();
				}
			}
		);
	}

	prevSlide() {
		let prevSlideIndex = this.state.currentSlideIndex - 1;
		if (prevSlideIndex < 0) {
			if (this.props.cycle) {
				prevSlideIndex = this.imagesCount - 1;
			} else {
				return;
			}
		}

		this.setState(
			{
				currentSlideIndex: prevSlideIndex,
			},
			() => {
				this.constructThumbnails();
				this.constructViewAllThumbnails();
				if (!this.props.cycle) {
					this.trackArrowColor();
				}
			}
		);
	}

	viewCurrentThumbnail(thumbnailIndex: number) {
		this.setState(
			{
				currentSlideIndex: thumbnailIndex,
				viewAllmodalDisplay: "none",
			},
			() => {
				this.constructThumbnails();
				this.constructViewAllThumbnails();
				this.closeViewAllModal();
			}
		);
	}

	constructThumbnails() {
		let thumbnails: JSX.Element[] = [];
		let thumbnailWidth = Math.floor(
			50 / this.props.thumbnailsToBeDisplayed!
		);
		let currentThumbNailSet = Math.floor(
			this.state.currentSlideIndex / this.props.thumbnailsToBeDisplayed!
		);
		let start = this.props.thumbnailsToBeDisplayed! * currentThumbNailSet;
		let end =
			start + this.props.thumbnailsToBeDisplayed! < this.imagesCount
				? start + this.props.thumbnailsToBeDisplayed!
				: this.imagesCount;
		let currentSlideIndex = this.state.currentSlideIndex;
		this.props.images.forEach((thumbnail, index) => {
			if (index >= start && index < end) {
				if (index === currentSlideIndex) {
					thumbnails.push(
						<img
							style={{
								maxWidth: thumbnailWidth + "vw",
								maxHeight: "10vh",
								background: "rgba(0, 0, 0, .5)",
								border: "3px solid white",
							}}
							alt={thumbnail.caption}
							onClick={() => this.viewCurrentThumbnail(index)}
							src={thumbnail.image}
							key={index}
						/>
					);
				} else {
					thumbnails.push(
						<img
							style={{
								maxWidth: thumbnailWidth + "vw",
								maxHeight: "10vh",
								background: "rgba(0, 0, 0, .5)",
								opacity: "0.5",
							}}
							alt={thumbnail.caption}
							onClick={() => this.viewCurrentThumbnail(index)}
							src={thumbnail.image}
							key={index}
						/>
					);
				}
			}
		}, this);

		this.setState({
			currentThumbNails: thumbnails,
		});
	}

	constructViewAllThumbnails() {
		let thumbnails: JSX.Element[] = [];
		let currentSlideIndex = this.state.currentSlideIndex;
		this.props.images.forEach((thumbnail, index) => {
			if (index === currentSlideIndex) {
				thumbnails.push(
					<img
						style={{ border: "3px solid white" }}
						alt={thumbnail.caption}
						onClick={() => this.viewCurrentThumbnail(index)}
						src={thumbnail.image}
						key={index}
					/>
				);
			} else {
				thumbnails.push(
					<img
						alt={thumbnail.caption}
						onClick={() => this.viewCurrentThumbnail(index)}
						src={thumbnail.image}
						key={index}
					/>
				);
			}
		}, this);

		this.setState({
			allThumbNails: thumbnails,
		});
	}

	handleKeyDown(event: KeyboardEvent) {
		let isModalOpen = this.state.modalDisplay === "block" ? true : false;
		if (event.keyCode === 37 && isModalOpen) {
			this.prevSlide();
		}
		if (event.keyCode === 39 && isModalOpen) {
			this.nextSlide();
		}
	}

	componentDidMount() {
		this.constructThumbnails();
		this.constructViewAllThumbnails();
		if (!this.props.cycle) {
			this.trackArrowColor();
		}
		window.addEventListener("keydown", this.handleKeyDown);
	}

	render() {
		return (
			<div>
				<div
					style={{
						maxWidth: this.props.width,
						maxHeight: this.props.height,
						display: this.props.displayPreviewBanner ? "" : "none"
					}}
					className='react-fullscreen-slideshow-modal-gallery'>
					<img
						src={
							this.props.images[this.props.BannerImgIndex!]
								.image
						}
						alt={
							this.props.images[this.props.BannerImgIndex!]
								.caption
						}
						className='react-fullscreen-slideshow-gallery-preview'  
						onClick={() => this.openModal()}
					/>
					<div className='react-fullscreen-slideshow-preview-overlay' style={{display: this.props.displayOverlay ? "" : "none" }}>
						<div className='react-fullscreen-slideshow-gallery-title'>{this.props.title}</div>
						<div className='react-fullscreen-slideshow-slideshow-info'>
							<div className='react-fullscreen-slideshow-photos-count'>
								<img
									id='react-fullscreen-slideshow-photos-icon'
									src={this.photosIcon}
									alt='photos-icon'
								/>
								<div id='react-fullscreen-slideshow-count'>
									{this.imagesCount + " photos"}
								</div>
								<div id='react-fullscreen-slideshow-pipe'>|</div>
								<div
									id='react-fullscreen-slideshow-view-slides-link'
									onClick={() => this.openModal()}>
									View Slide Show ›
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className='react-fullscreen-slideshow-modal-wrapper'
					style={{
						display: this.state.modalDisplay,
					}}>
					<div id='react-fullscreen-slideshow-gallery-modal' className={this.state.modalClass}>
						<div className='react-fullscreen-slideshow-modal-top'>
							<span className='react-fullscreen-slideshow-modal-gallery-title'>
								{this.props.title}
							</span>
							<span
								className='react-fullscreen-slideshow-close cursor'
								onClick={() => this.closeModal()}>
								&times;
							</span>
							<span
								className='react-fullscreen-slideshow-close-text cursor'
								onClick={() => this.closeModal()}>
								{"❮ Back"}
							</span>
						</div>
						<div className='react-fullscreen-slideshow-modal-content'>
							<div className='react-fullscreen-slideshow-slides'>
								<img
									src={
										this.props.images[
											this.state.currentSlideIndex
										].image
									}
									alt={
										this.props.images[
											this.state.currentSlideIndex
										].caption
									}
								/>
							</div>
							<button
								className='react-fullscreen-slideshow-prev-mobile'
								onClick={() => this.prevSlide()}>
								&#10094;
							</button>
							<button
								className='react-fullscreen-slideshow-next-mobile'
								onClick={() => this.nextSlide()}>
								&#10095;
							</button>
							<div className='react-fullscreen-slideshow-caption-container'>
								<div id='react-fullscreen-slideshow-caption'>
									<p className='react-fullscreen-slideshow-image-title'>
										{
											this.props.images[
												this.state.currentSlideIndex
											].caption
										}
									</p>
									<p className='react-fullscreen-slideshow-desc'>
										{
											this.props.images[
												this.state.currentSlideIndex
											].description
										}
									</p>
								</div>
								<SocialShareBar
									url={window.location.href}
									media={
										this.props.images[
											this.props.currentSlideIndex!
										].image
									}
								/>
							</div>
							<div className='react-fullscreen-slideshow-modal-bottom'>
								<div className='react-fullscreen-slideshow-thumbnails-list'>
									{this.state.currentThumbNails}
								</div>
								<div
									onClick={() => this.openViewAllModal()}
									className='react-fullscreen-slideshow-bottom-left-pane'>
									<div className='react-fullscreen-slideshow-view-all-box'>
										<div className='react-fullscreen-slideshow-tile-button'>
											<div className='react-fullscreen-slideshow-tile-row'>
												<div className='react-fullscreen-slideshow-tile-block'></div>
												<div className='react-fullscreen-slideshow-tile-block'></div>
											</div>
											<div className='react-fullscreen-slideshow-tile-row'>
												<div className='react-fullscreen-slideshow-tile-block'></div>
												<div className='react-fullscreen-slideshow-tile-block'></div>
											</div>
										</div>
									</div>
									<div className='react-fullscreen-slideshow-bottom-text'>View All</div>
								</div>

								<div className='react-fullscreen-slideshow-bottom-right-pane'>
									<div className='react-fullscreen-slideshow-numbertext'>
										{" "}
										{this.state.currentSlideIndex +
											1} / {this.imagesCount}
									</div>
									<div className='react-fullscreen-slideshow-widescreen-arrows'>
										<button
											className='react-fullscreen-slideshow-prev'
											style={{
												color: this.state
													.leftArrowDisplay,
											}}
											onClick={() => this.prevSlide()}>
											&#10094;
										</button>
										<button
											className='react-fullscreen-slideshow-next'
											style={{
												color: this.state
													.rightArrowDisplay,
											}}
											onClick={() => this.nextSlide()}>
											&#10095;
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					id='react-fullscreen-slideshow-va-modal'
					className='react-fullscreen-slideshow-view-all-modal'
					style={{ display: this.state.viewAllmodalDisplay }}>
					<span
						className='react-fullscreen-slideshow-close cursor react-fullscreen-slideshow-close-view-all'
						onClick={() => this.closeViewAllModal()}>
						&times;
					</span>
					<div className='react-fullscreen-slideshow-view-all-modal-content'>
						<div className='react-fullscreen-slideshow-view-all-gallery-name react-fullscreen-slideshow-normal-text'>
							{this.props.title}
						</div>
						<div className='react-fullscreen-slideshow-thumbnail-grid'>
							<div className='react-fullscreen-slideshow-view-all-thumbnails'>
								{this.state.allThumbNails}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
