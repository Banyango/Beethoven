import {ChangeEvent, FocusEvent} from "react";

export interface ISelectProps {
  /**
   * The label of the select.
   */
  label: string;

  /**
   * The class name of the select.
   */
  className?: string;

  /**
   * The value of the select.
   */
  value: string | number;

  /**
   * The name of the select.
   */
  name: string;

  /**
   * The disabled state of the select.
   */
  disabled: boolean;

  /**
   * The onChange event handler of the select.
   */
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;

  /**
   * The options of the select.
   */
  options : Array<IOption>

  /**
   * The max-width of the select.
   */
  maxWidth?: string;
}

export interface IOption {
  /**
   *  Whether this option is non-interactive.
   */
  disabled?: boolean;

  /**
   *  Label text for this option. If omitted, `value` is used as the label.
   */
  label?: string;

  /**
   *  Value of this option.
   */
  value: string | number;

  /**
   *  A space-delimited list of class names to pass along to a child element.
   */
  className?: string;
}
