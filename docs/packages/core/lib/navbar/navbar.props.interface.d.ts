import { CSSProperties } from "react";
export interface INavbarProps {
    /**
     * The icon to display in the navbar.
     */
    icon?: string;
    /**
     * The image to display in the navbar.
     */
    image?: string;
    /**
     * The text to display in the navbar.
     */
    name: string;
    /**
     * The url to navigate to when the navbar is clicked.
     */
    url: string;
    /**
     * The style of the navbar.
     */
    style?: CSSProperties;
    /**
     * True if the navbar is collapsed; false otherwise.
     */
    collapsed?: boolean;
}
