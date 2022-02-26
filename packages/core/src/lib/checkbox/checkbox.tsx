import React, {useState} from "react";
import {ICheckboxProps} from "./checkbox.props.interface";

import styles from './checkbox.module.scss';


export const Checkbox: React.FC<ICheckboxProps> = ({checked, disabled, label, name, onBlur, onChange, onFocus, value}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onChange && onChange(event);
  };
  return (
    <label className={styles.container}> {label}
        <input type="checkbox"
               name={name}
               className={styles.checkbox}
               disabled={disabled}
               value={value}
               checked={isChecked}
               onChange={handleChange}
               onFocus={onFocus}
               onBlur={onBlur}
        />
        <span className={styles.checkmark}/>
    </label>
  );
}

export default Checkbox;
