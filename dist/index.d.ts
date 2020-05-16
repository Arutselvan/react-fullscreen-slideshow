import * as React from "react";
import "./styles.scss";
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
export default class ReactFullscreenSlideshow extends React.Component<ReactFullscreenSlideshowProps, ReactFullscreenSlideshowState> {
    static defaultProps: {
        cycle: boolean;
        currentSlideIndex: number;
        width: string;
        height: string;
        thumbnailsToBeDisplayed: number;
        maxViewAllThumbnailsPerRow: number;
    };
    imagesCount: number;
    constructor(props: ReactFullscreenSlideshowProps);
    openModal(): void;
    openViewAllModal(): void;
    closeModal(): void;
    closeViewAllModal(): void;
    trackArrowColor(): void;
    nextSlide(): void;
    prevSlide(): void;
    viewCurrentThumbnail(thumbnailIndex: number): void;
    constructThumbnails(): void;
    constructViewAllThumbnails(): void;
    handleKeyDown(event: KeyboardEvent): void;
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
