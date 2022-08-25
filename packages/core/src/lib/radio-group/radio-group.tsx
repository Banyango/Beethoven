import React, {PropsWithChildren} from "react";
import {IRadioGroup} from "./radio-group.props.interface";

import styles from './radio-group.module.scss';

export const RadioGroup: React.FC<PropsWithChildren<IRadioGroup>> = props => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <label className={styles.label}>{props.label}
      <div className={styles.radioGroup}>
        {
          React.Children.map(props.children, (child, index) => {
            return React.cloneElement(child as React.ReactElement<any>, {
              checked: selectedIndex === index,
              onChange: () => {
                setSelectedIndex(index);
              }
            });
          })
        }
      </div>
    </label>
  );
}

export default RadioGroup;
