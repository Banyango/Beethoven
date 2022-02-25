
export interface IButtonProps {
  /**
   * The button's label.
   */
  label: string;

  /**
   * The button's type.
   */
  type: 'default' | 'simple' | 'danger' | 'warning';

  /**
   * True if the button is disabled; false otherwise.
   */
  disabled?: boolean;

  /**
   * The class name of the button.
   */
  className?: string;

  /**
   * The bootstrap icon classname to display on the button.
   */
  iconClassname?: string;

  /**
   * The button's title.
   */
  title?: string;

  /**
   * The accessibility label for the button.
   */
  ariaLabel?: string;

  /**
   * True if accessibility is enabled; false otherwise.
   */
  ariaDisabled?: boolean;

  /**
   * The element ID used to describe this element.
   */
  ariaDescribedBy?: string;

  /**
   * emitted when the button is clicked
   */
  onClick: () => void;
}
