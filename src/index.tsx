import * as React from "react";
import "./styles.scss";
import * as photosIcon from '../assets/images/photosIcon.png';
import SocialShareBar from './components/SocialShareBar/SocialShareBar';

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
	width?: string;
	height?: string;
	thumbnailsToBeDisplayed?: number;
	maxViewAllThumbnailsPerRow?: number;
}

interface ReactFullscreenSlideshowState {
	modalDisplay: string;
	viewAllmodalDisplay: string;
	currentSlideIndex: number;
	currentThumbNails: JSX.Element[] | null;
	allThumbNails: JSX.Element[] | null;
	leftArrowDisplay: string;
	rightArrowDisplay: string;
}

export default class ReactFullscreenSlideshow extends React.Component<
	ReactFullscreenSlideshowProps,
	ReactFullscreenSlideshowState
	> {
	public static defaultProps = {
		cycle: false,
		currentSlideIndex: 0,
		width: "100%",
		height: "50vh",
		thumbnailsToBeDisplayed: 8,
		maxViewAllThumbnailsPerRow: 4,
	};

	public imagesCount: number;
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
		});
	}

	closeModal() {
		this.setState({
			modalDisplay: "none",
			currentSlideIndex: this.props.currentSlideIndex as number,
		});
		document.body.style.overflow = "auto";
	}

	closeViewAllModal() {
		this.setState({
			viewAllmodalDisplay: "none",
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
					}}
					className='react-modal-gallery'>
					<img
						src={
							this.props.images[this.props.currentSlideIndex!]
								.image
						}
						alt={
							this.props.images[this.props.currentSlideIndex!]
								.caption
						}
						className='gallery-preview'
					/>
					<div className='preview-overlay'>
						<div className='gallery-title'>
							{this.props.title}
						</div>
						<div className="slideshow-info">
							<div className="photos-count">
								<img id="photos-icon" src={photosIcon.default /* Temporary fix*/} alt="photos-icon" />
								<div id="count">{this.imagesCount + " photos"}</div>
								<div id="pipe">|</div>
								<div id="view-slides-link" onClick={() => this.openModal()}>View Slide Show ›</div>
							</div>
						</div>
					</div>
				</div>

				<div
					id='gallery-modal'
					className='modal'
					style={{ display: this.state.modalDisplay }}>
					<div className='modal-top'>
						<span className='modal-gallery-title'>
							{this.props.title}
						</span>
						<span
							className='close cursor'
							onClick={() => this.closeModal()}>
							&times;
						</span>
						<span
							className='close-text cursor'
							onClick={() => this.closeModal()}>
							{'❮ Back to article'}
						</span>
					</div>
					<div className='modal-content'>
						<div className='slides'>
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
							className='prev-mobile'
							onClick={() => this.prevSlide()}>
							&#10094;
						</button>
						<button
							className='next-mobile'
							onClick={() => this.nextSlide()}>
							&#10095;
						</button>
						<div className='caption-container'>
							<div id='caption'>
								<p className='image-title'>
									{
										this.props.images[
											this.state.currentSlideIndex
										].caption
									}
								</p>
								<p className='desc'>
									{
										this.props.images[
											this.state.currentSlideIndex
										].description
									}
								</p>
							</div>
							<SocialShareBar url={window.location.href} media={this.props.images[this.props.currentSlideIndex!].image} />
						</div>
						<div className='modal-bottom'>
							<div className='thumbnails-list'>
								{this.state.currentThumbNails}
							</div>
							<div
								onClick={() => this.openViewAllModal()}
								className='bottom-left-pane'>
								<div className='view-all-box'>
									<div className='tile-button'>
										<div className='tile-row'>
											<div className='tile-block'></div>
											<div className='tile-block'></div>
										</div>
										<div className='tile-row'>
											<div className='tile-block'></div>
											<div className='tile-block'></div>
										</div>
									</div>
								</div>
								<div className='bottom-text'>View All</div>
							</div>

							<div className='bottom-right-pane'>
								<div className='numbertext'>
									{" "}
									{this.state.currentSlideIndex + 1} /{" "}
									{this.imagesCount}
								</div>
								<div className='widescreen-arrows'>
									<button
										className='prev'
										style={{
											color: this.state.leftArrowDisplay,
										}}
										onClick={() => this.prevSlide()}>
										&#10094;
									</button>
									<button
										className='next'
										style={{
											color: this.state.rightArrowDisplay,
										}}
										onClick={() => this.nextSlide()}>
										&#10095;
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div
					id='va-modal'
					className='view-all-modal'
					style={{ display: this.state.viewAllmodalDisplay }}>
					<span
						className='close cursor close-view-all'
						onClick={() => this.closeViewAllModal()}>
						&times;
					</span>
					<div className='view-all-modal-content'>
						<div className='view-all-gallery-name normal-text'>
							{this.props.title}
						</div>
						<div className='thumbnail-grid'>
							<div className='view-all-thumbnails'>
								{this.state.allThumbNails}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
