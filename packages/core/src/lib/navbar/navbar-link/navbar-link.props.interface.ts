export interface INavbarLinkProps {
  /**
   * The text to display in the navbar link.
   */
  text: string;

  /**
   * The URL to navigate to when the navbar link is clicked.
   */
  url: string;

  /**
   * True if the navbar link is active; false otherwise.
   */
  active?: boolean;
}
