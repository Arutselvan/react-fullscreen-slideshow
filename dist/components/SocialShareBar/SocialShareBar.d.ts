import * as React from "react";
interface SocialShareBarProps {
    url: string;
    media: string;
}
export default class ReactModalGallery extends React.Component<SocialShareBarProps> {
    url: string;
    iconSize: number;
    render(): JSX.Element;
}
export {};
