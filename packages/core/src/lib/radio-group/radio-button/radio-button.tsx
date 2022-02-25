import React from 'react';
import classNames from "classnames";
import {IRadioButtonProps} from "./radio-button.props.interface";

import styles from './radio-button.module.scss';

export const RadioButton: React.FC<IRadioButtonProps> = (props) => {
  const {
    checked,
    disabled,
    label,
    onChange,
    value,
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <label
      className={classNames(
        styles.radioButton,
        {
          [styles.checked]: checked,
          [styles.disabled]: disabled,
        }
      )}>
      <input
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        type="radio"
        value={value}
      />
      <span>{label}</span>
    </label>
  );
};
