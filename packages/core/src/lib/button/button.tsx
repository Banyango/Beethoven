import './button.module.scss';
import React, {useRef} from "react";
import {IButtonProps} from "./button.props.interface";
import classNames from "classnames";

// import icons from 'boostrap-icons/font/';

import styles from './button.module.scss';

const types: Record<IButtonProps['type'], string> = {
  default: styles.default,
  simple: styles.simple,
  danger: styles.danger,
  warning: styles.warning,
};


export const Button: React.FC<IButtonProps> = ({children, ariaDisabled, ariaDescribedBy, ariaLabel, iconClassname, onClick, type, label, disabled, className}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  return (
    <button
      ref={buttonRef}
      role="button"
      type="button"
      aria-label={label}
      aria-describedby={ariaDescribedBy}
      aria-disabled={disabled}
      disabled={disabled}
      className={classNames(styles.button, className, types[type], {
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
    >
      {children || label}
      {iconClassname ? <i data-testid="icon" className={classNames(iconClassname, styles.icon)} aria-hidden="true"/> : null}
    </button>
  );
}

export default Button;
