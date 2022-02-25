import React from "react";
import {ITextFieldProps} from "./text-field.props.interface";

import styles from './text-field.module.scss';

export const TextField: React.FC<ITextFieldProps> = props => {
  const [focused, setFocused] = React.useState(false);
  const focus = () => setFocused(true);
  const blur = () => setFocused(false);
  const style = props.style === 'default' ? styles.default: styles.minimal
  return (
    <div className={styles.textfield}>
      <label className={styles.label}>
        {props.label}
      </label>
      <input className={style}
             type={props.type ?? 'text'}
             placeholder={!focused ? props.placeholder ?? '' : ''}
             onFocus={focus}
             onBlur={blur}/>
    </div>
  );
}

export default TextField;
